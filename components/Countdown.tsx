"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [txt, setTxt] = useState("Exam: 17 June 2026");

  useEffect(() => {
    const exam = new Date(2026, 5, 17); // 17 June 2026 (month 0-indexed)
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const days = Math.round((+exam - +now) / 86400000);
    if (days > 0)
      setTxt(`Exam: 17 June 2026 — ${days} day${days === 1 ? "" : "s"} to go`);
    else if (days === 0) setTxt("Exam is today — you’ve got this.");
    else setTxt("Exam: 17 June 2026");
  }, []);

  return (
    <span className="count" id="count">
      {txt}
    </span>
  );
}
