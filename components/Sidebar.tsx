"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import type { Subject } from "@/lib/subjects";
import { useStudy } from "./StudyProvider";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Sidebar({ subjects }: { subjects: Subject[] }) {
  const path = usePathname();
  const active = subjects.find((s) => s.route === path);
  const { reveal, hide } = useStudy();
  const t = useTranslations("sidebar");

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
        {t("brand")}
        <span>{t("examDate")}</span>
      </div>

      <div className="sb-sec">{t("navigate")}</div>
      <a className={path === "/" ? "active" : ""} href="/">
        <svg className="ic">
          <use href="#ic-home" />
        </svg>
        {t("home")}
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
          <div className="sb-sec">{t("onThisPage")}</div>
          <div id="sb-topics">
            {active.topics.map((tp) => (
              <a key={tp.id} className="sb-topic" href={`#${tp.id}`}>
                {tp.title}
              </a>
            ))}
          </div>
          <div className="sb-ctl">
            <LocaleSwitcher />
            <button className="btn" onClick={reveal}>
              {t("revealAll")}
            </button>
            <button className="btn" onClick={hide}>
              {t("hideAll")}
            </button>
            <button className="btn primary" onClick={() => window.print()}>
              {t("print")}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="sb-sec">{t("rememberTitle")}</div>
          <div className="sb-note">{t("rememberNote")}</div>
          <div className="sb-ctl">
            <LocaleSwitcher />
          </div>
        </>
      )}
    </nav>
  );
}
