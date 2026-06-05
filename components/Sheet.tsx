"use client";

import { useEffect, useRef } from "react";
import { useStudy } from "./StudyProvider";

/**
 * Renders a review sheet's content and wires the interactive behaviour:
 *  - click OR keyboard (Enter/Space) a drill question to toggle its answer
 *  - reveal-all / hide-all driven from the sidebar via context
 *  - drills are exposed as accessible disclosure buttons (focusable, aria-expanded)
 */
export default function Sheet({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { revealNonce, hideNonce } = useStudy();

  // make every drill question a keyboard-operable disclosure control
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>(".drill .q").forEach((q) => {
      q.setAttribute("role", "button");
      q.setAttribute("tabindex", "0");
      const open = q.parentElement?.classList.contains("show") ?? false;
      q.setAttribute("aria-expanded", String(open));
    });
  }, [html]);

  const toggle = (drill: Element | null | undefined) => {
    if (!drill) return;
    const open = drill.classList.toggle("show");
    drill.querySelector(".q")?.setAttribute("aria-expanded", String(open));
  };

  // click + keyboard activation via event delegation
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e: MouseEvent) => {
      const q = (e.target as HTMLElement).closest(".drill .q");
      if (q && el.contains(q)) toggle(q.parentElement);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const q = (e.target as HTMLElement).closest(".drill .q");
      if (q && el.contains(q)) {
        e.preventDefault(); // stop Space from scrolling the page
        toggle(q.parentElement);
      }
    };

    el.addEventListener("click", onClick);
    el.addEventListener("keydown", onKeyDown);
    return () => {
      el.removeEventListener("click", onClick);
      el.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // reveal all / hide all, keeping aria-expanded in sync
  useEffect(() => {
    if (revealNonce > 0)
      ref.current?.querySelectorAll(".drill").forEach((d) => {
        d.classList.add("show");
        d.querySelector(".q")?.setAttribute("aria-expanded", "true");
      });
  }, [revealNonce]);

  useEffect(() => {
    if (hideNonce > 0)
      ref.current?.querySelectorAll(".drill").forEach((d) => {
        d.classList.remove("show");
        d.querySelector(".q")?.setAttribute("aria-expanded", "false");
      });
  }, [hideNonce]);

  return (
    <div className="wrap" ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
