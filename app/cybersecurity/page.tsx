import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Sheet from "@/components/Sheet";
import { getSubjectContent } from "@/lib/subjects";
import type { Locale } from "@/i18n/config";

const SLUG = "cybersecurity";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const s = getSubjectContent(SLUG, locale)!;
  const t = await getTranslations("page");
  return { title: `${s.title} — ${t("reviewSuffix")}` };
}

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const s = getSubjectContent(SLUG, locale)!;
  return <Sheet html={s.html} />;
}
