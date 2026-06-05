"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { localeLabel, LOCALE_COOKIE, type Locale } from "@/i18n/config";

/**
 * Toggles between English and Khmer by writing the NEXT_LOCALE cookie and
 * refreshing the route — server components re-render with the new locale, so
 * the whole document swaps language (no English left showing underneath).
 */
export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const next: Locale = locale === "en" ? "km" : "en";

  const switchTo = () => {
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
    startTransition(() => router.refresh());
  };

  return (
    <button
      className="btn"
      id="langBtn"
      onClick={switchTo}
      disabled={pending}
      aria-label={`Switch language to ${next}`}
    >
      {localeLabel[next]}
    </button>
  );
}
