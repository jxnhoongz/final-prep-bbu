import { getLocale, getTranslations } from "next-intl/server";
import Countdown from "@/components/Countdown";
import { getSubjects } from "@/lib/subjects";
import type { Locale } from "@/i18n/config";

export default async function Home() {
  const locale = (await getLocale()) as Locale;
  const subjects = getSubjects(locale);
  const t = await getTranslations("home");

  const rich = {
    b: (chunks: React.ReactNode) => <b>{chunks}</b>,
    i: (chunks: React.ReactNode) => <i>{chunks}</i>,
  };

  return (
    <div className="main">
      <header className="masthead">
        <h1 className="masthead-title">{t("title")}</h1>
        <p className="masthead-sub">{t("subtitle")}</p>
        <Countdown />
      </header>

      <nav className="subject-index" aria-label={t("title")}>
        {subjects.map((s) => (
          <a key={s.slug} className={`subject-row ${s.theme}`} href={s.route}>
            <span className="sr-icon">
              <svg aria-hidden="true">
                <use href={`#${s.icon}`} />
              </svg>
            </span>
            <span className="sr-body">
              <span className="name">{s.title}</span>
              <span className="desc">{s.short}</span>
            </span>
            <span className="sr-meta">
              {t("topicsMeta", { count: s.topics.length })}
            </span>
          </a>
        ))}
      </nav>

      <section className="panel">
        <h3>{t("methodTitle")}</h3>
        <ol>
          <li>{t.rich("step1", rich)}</li>
          <li>{t.rich("step2", rich)}</li>
          <li>{t.rich("step3", rich)}</li>
          <li>{t.rich("step4", rich)}</li>
        </ol>
        <div className="tip">{t.rich("tip", rich)}</div>
      </section>

      <section className="panel">
        <h3>{t("langTitle")}</h3>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: "var(--text-sm)" }}>
          {t.rich("langBody", rich)}
        </p>
      </section>

      <section className="panel sources">
        <h3>{t("sourcesTitle")}</h3>
        <p>{t("sourcesIntro")}</p>
        <ul className="sources-list">
          {subjects.map((s) => (
            <li key={s.slug} className={`source-item ${s.theme}`}>
              <span className="subj">{s.title}</span>
              <span className="file">{s.source}</span>
              <a
                className="source-view"
                href={`/sources/${s.slug}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("viewPdf")}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
