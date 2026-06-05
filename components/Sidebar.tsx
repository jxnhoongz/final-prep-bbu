"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { subjects, byRoute } from "@/lib/subjects";
import { useStudy } from "./StudyProvider";

export default function Sidebar() {
  const path = usePathname();
  const active = byRoute(path);
  const { kmOn, toggleKm, reveal, hide } = useStudy();

  // theme the whole page (sidebar + content) by setting the subject on <body>
  useEffect(() => {
    document.body.dataset.subject = active ? active.theme : "home";
  }, [active]);

  return (
    <nav className="sidebar no-print">
      <div className="sb-brand">
        <svg className="ic">
          <use href="#ic-book" />
        </svg>
        Final Exam Prep<span>17 June 2026</span>
      </div>

      <div className="sb-sec">Navigate</div>
      <a className={path === "/" ? "active" : ""} href="/">
        <svg className="ic">
          <use href="#ic-home" />
        </svg>
        Home
      </a>
      {subjects.map((s) => (
        <a
          key={s.slug}
          className={path === s.route ? "active" : ""}
          href={s.route}
        >
          <svg className="ic">
            <use href={`#${s.icon}`} />
          </svg>
          {s.title}
        </a>
      ))}

      {active ? (
        <>
          <div className="sb-sec">On this page</div>
          <div id="sb-topics">
            {active.topics.map((t) => (
              <a key={t.id} className="sb-topic" href={`#${t.id}`}>
                {t.title}
              </a>
            ))}
          </div>
          <div className="sb-ctl">
            <button className="btn" id="kmBtn" onClick={toggleKm}>
              {kmOn ? "English" : "ភាសាខ្មែរ"}
            </button>
            <button className="btn" onClick={reveal}>
              Reveal all
            </button>
            <button className="btn" onClick={hide}>
              Hide all
            </button>
            <button className="btn primary" onClick={() => window.print()}>
              Print / PDF
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="sb-sec">Remember</div>
          <div className="sb-note">
            Cover the screen. Answer out loud or on paper <i>before</i> you click
            reveal. Recognition lies; retrieval is the real test.
          </div>
        </>
      )}
    </nav>
  );
}
