"use client";

import { useEffect, useRef } from "react";
import { useStudy } from "./StudyProvider";

/**
 * Renders a review sheet's content and wires the interactive behaviour:
 *  - click a drill question to toggle its answer
 *  - reveal-all / hide-all driven from the sidebar via context
 */
export default function Sheet({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { revealNonce, hideNonce } = useStudy();

  // click-to-reveal on individual drills (event delegation)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const q = target.closest(".drill .q");
      if (q && el.contains(q)) q.parentElement?.classList.toggle("show");
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  // reveal all
  useEffect(() => {
    if (revealNonce > 0)
      ref.current
        ?.querySelectorAll(".drill")
        .forEach((d) => d.classList.add("show"));
  }, [revealNonce]);

  // hide all
  useEffect(() => {
    if (hideNonce > 0)
      ref.current
        ?.querySelectorAll(".drill")
        .forEach((d) => d.classList.remove("show"));
  }, [hideNonce]);

  return (
    <div
      className="wrap"
      ref={ref}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
