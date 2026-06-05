"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type State =
  | { kind: "count"; days: number }
  | { kind: "today" }
  | { kind: "passed" };

export default function Countdown() {
  const t = useTranslations("countdown");
  // Start in the locale-stable "passed" note so server and first client render
  // match; the real day count is computed after mount (depends on "now").
  const [state, setState] = useState<State>({ kind: "passed" });

  useEffect(() => {
    const exam = new Date(2026, 5, 17); // 17 June 2026 (month 0-indexed)
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const days = Math.round((+exam - +now) / 86400000);
    if (days > 0) setState({ kind: "count", days });
    else if (days === 0) setState({ kind: "today" });
    else setState({ kind: "passed" });
  }, []);

  if (state.kind === "count") {
    return (
      <div className="countdown-hero">
        <span className="cd-num">{state.days}</span>
        <span className="cd-meta">
          <span className="cd-unit">{t("heroUnit", { days: state.days })}</span>
          <span className="cd-text">{t("heroUntil")}</span>
        </span>
      </div>
    );
  }

  return (
    <div className="countdown-hero is-note">
      {state.kind === "today" ? t("today") : t("passed")}
    </div>
  );
}
