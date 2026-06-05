import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Khmer, Noto_Serif_Khmer, Newsreader } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { StudyProvider } from "@/components/StudyProvider";
import Sidebar from "@/components/Sidebar";
import Sprite from "@/components/Sprite";
import { getSubjects } from "@/lib/subjects";
import type { Locale } from "@/i18n/config";

// Editorial display serif for headings (Latin) — "exam handbook" feel.
const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Khmer body + matching Khmer display serif for headings.
const khmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "600", "700"],
  variable: "--font-khmer",
  display: "swap",
});
const khmerDisplay = Noto_Serif_Khmer({
  subsets: ["khmer"],
  weight: ["500", "600", "700"],
  variable: "--font-display-km",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Final Exam Prep",
  description:
    "Active-recall study sheets — Internetworking, Cyber Security, Mobile Programming",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (await getLocale()) as Locale;
  const subjects = getSubjects(locale);

  return (
    <html
      lang={locale}
      className={`${display.variable} ${khmer.variable} ${khmerDisplay.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <Sprite />
          <StudyProvider>
            <Sidebar subjects={subjects} />
            {children}
          </StudyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
