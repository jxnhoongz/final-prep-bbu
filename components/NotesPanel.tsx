"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type Tool = "pen" | "eraser" | "text";

const PEN_COLORS = ["#1a1d23", "#1d6fe0", "#c62828", "#0f9d58"];
const PEN_WIDTH = 2.5;
const ERASER_WIDTH = 22;
const TEXT_SIZE = 16;

/**
 * Right-side scratchpad for active recall: write/draw your answer before
 * revealing. Pen + eraser drawing and click-to-type text on one canvas.
 * Persisted to localStorage per page (private to this device — never uploaded).
 */
export default function NotesPanel() {
  const pathname = usePathname();
  const t = useTranslations("notes");
  const storeKey = `notes:${pathname}`;

  const [open, setOpen] = useState(false);
  const [tool, setTool] = useState<Tool>("pen");
  const [color, setColor] = useState(PEN_COLORS[0]);
  const [textBox, setTextBox] = useState<{ x: number; y: number; value: string } | null>(
    null,
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const latest = useRef<string>(""); // last saved dataURL, used to restore on resize

  const ctx = () => canvasRef.current?.getContext("2d") ?? null;

  const save = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      latest.current = canvas.toDataURL("image/png");
      localStorage.setItem(storeKey, latest.current);
    } catch {
      /* storage full or unavailable — drawing still works for this session */
    }
  }, [storeKey]);

  // size the canvas to its box (DPR-aware) and paint a stored image into it
  const fit = useCallback((dataUrl: string) => {
    const canvas = canvasRef.current;
    const box = wrapRef.current;
    const c = ctx();
    if (!canvas || !box || !c) return;
    const rect = box.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.lineCap = "round";
    c.lineJoin = "round";
    if (dataUrl) {
      const img = new Image();
      img.onload = () => c.drawImage(img, 0, 0, rect.width, rect.height);
      img.src = dataUrl;
    }
  }, []);

  // load saved notes for this page whenever the panel opens / route changes
  useLayoutEffect(() => {
    if (!open) return;
    const saved = (() => {
      try {
        return localStorage.getItem(storeKey) ?? "";
      } catch {
        return "";
      }
    })();
    latest.current = saved;
    fit(saved);
  }, [open, storeKey, fit]);

  // keep the canvas crisp + content intact across window resizes
  useEffect(() => {
    if (!open) return;
    const onResize = () => fit(latest.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open, fit]);

  const pos = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (tool === "text") {
      // prevent the canvas from grabbing focus (which would instantly blur +
      // dismiss the textarea we are about to mount)
      e.preventDefault();
      const p = pos(e);
      setTextBox({ x: p.x, y: p.y, value: "" });
      // focus after the textarea mounts (next frame), since the placing click
      // would otherwise leave focus on the canvas/body
      requestAnimationFrame(() => textRef.current?.focus());
      return;
    }
    const c = ctx();
    if (!c) return;
    drawing.current = true;
    last.current = pos(e);
    canvasRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    const c = ctx();
    if (!c || !last.current) return;
    const p = pos(e);
    c.globalCompositeOperation =
      tool === "eraser" ? "destination-out" : "source-over";
    c.strokeStyle = color;
    c.lineWidth = tool === "eraser" ? ERASER_WIDTH : PEN_WIDTH;
    c.beginPath();
    c.moveTo(last.current.x, last.current.y);
    c.lineTo(p.x, p.y);
    c.stroke();
    last.current = p;
  };

  const endStroke = () => {
    if (!drawing.current) return;
    drawing.current = false;
    last.current = null;
    save();
  };

  const commitText = () => {
    const c = ctx();
    if (c && textBox && textBox.value.trim()) {
      c.globalCompositeOperation = "source-over";
      c.fillStyle = color;
      c.font = `${TEXT_SIZE}px -apple-system, "Noto Sans Khmer", system-ui, sans-serif`;
      c.textBaseline = "top";
      textBox.value.split("\n").forEach((line, i) => {
        c.fillText(line, textBox.x, textBox.y + i * (TEXT_SIZE * 1.35));
      });
      save();
    }
    setTextBox(null);
  };

  const clearAll = () => {
    if (!window.confirm(t("clearConfirm"))) return;
    const canvas = canvasRef.current;
    const c = ctx();
    if (canvas && c) c.clearRect(0, 0, canvas.width, canvas.height);
    latest.current = "";
    try {
      localStorage.removeItem(storeKey);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      {!open && (
        <button
          className="notes-tab no-print"
          onClick={() => setOpen(true)}
          aria-label={t("open")}
        >
          <svg className="ic" aria-hidden="true">
            <use href="#ic-book" />
          </svg>
          <span>{t("title")}</span>
        </button>
      )}

      <aside
        className={`notes-panel no-print ${open ? "open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <header className="notes-head">
          <strong>{t("title")}</strong>
          <button className="notes-x" onClick={() => setOpen(false)} aria-label={t("close")}>
            ✕
          </button>
        </header>

        <div className="notes-tools">
          <div className="notes-toolgroup">
            <button
              className={`notes-tool ${tool === "pen" ? "on" : ""}`}
              onClick={() => setTool("pen")}
              title={t("pen")}
              aria-pressed={tool === "pen"}
            >
              ✏️
            </button>
            <button
              className={`notes-tool ${tool === "eraser" ? "on" : ""}`}
              onClick={() => setTool("eraser")}
              title={t("eraser")}
              aria-pressed={tool === "eraser"}
            >
              ⌫
            </button>
            <button
              className={`notes-tool ${tool === "text" ? "on" : ""}`}
              onClick={() => setTool("text")}
              title={t("text")}
              aria-pressed={tool === "text"}
            >
              T
            </button>
          </div>

          <div className="notes-colors">
            {PEN_COLORS.map((c) => (
              <button
                key={c}
                className={`notes-swatch ${color === c ? "on" : ""}`}
                style={{ background: c }}
                onClick={() => {
                  setColor(c);
                  if (tool === "eraser") setTool("pen");
                }}
                aria-label={`color ${c}`}
              />
            ))}
          </div>

          <button className="notes-clear" onClick={clearAll}>
            {t("clear")}
          </button>
        </div>

        <div className="notes-canvas-wrap" ref={wrapRef}>
          <canvas
            ref={canvasRef}
            className={`notes-canvas tool-${tool}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endStroke}
            onPointerLeave={endStroke}
          />
          {textBox && (
            <textarea
              ref={textRef}
              className="notes-textbox"
              autoFocus
              placeholder="type…"
              style={{ left: textBox.x, top: textBox.y, color }}
              value={textBox.value}
              onChange={(e) => setTextBox({ ...textBox, value: e.target.value })}
              onBlur={commitText}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  commitText();
                }
                if (e.key === "Escape") setTextBox(null);
              }}
            />
          )}
        </div>

        <p className="notes-hint">{t("hint")}</p>
      </aside>
    </>
  );
}
