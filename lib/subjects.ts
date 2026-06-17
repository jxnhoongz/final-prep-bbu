import type { Locale } from "@/i18n/config";

import en_internetworking from "@/content/en/internetworking";
import en_cybersecurity from "@/content/en/cybersecurity";
import en_mobile from "@/content/en/mobile";
import km_internetworking from "@/content/km/internetworking";
import km_cybersecurity from "@/content/km/cybersecurity";
import km_mobile from "@/content/km/mobile";

export type Topic = { id: string; title: string };
export type Theme = "net" | "cyber" | "mobile";

/** A source document this sheet was built from. `file` is its name under public/sources/. */
export type SourceDoc = { file: string; label: string };

/** A subject as needed by nav/home: localized labels + derived topics, no body HTML. */
export type Subject = {
  slug: string;
  route: string;
  theme: Theme;
  icon: string; // sprite symbol id
  title: string;
  short: string;
  bullets: string[];
  topics: Topic[];
  /** Original course documents this review sheet was built from. */
  sources: SourceDoc[];
};

/** A subject plus its full localized review document. */
export type SubjectContent = Subject & { html: string };

type Localized<T> = Record<Locale, T>;

type SubjectMeta = {
  slug: string;
  route: string;
  theme: Theme;
  icon: string;
  title: Localized<string>;
  short: Localized<string>;
  bullets: Localized<string[]>;
  html: Localized<string>;
  sources: SourceDoc[];
};

/** Course names + acronym bullet lists are technical, so they read the same in both locales. */
const META: SubjectMeta[] = [
  {
    slug: "internetworking",
    route: "/internetworking",
    theme: "net",
    icon: "ic-globe",
    title: { en: "Internetworking II", km: "Internetworking II" },
    short: {
      en: "Routing protocols, configs & VPNs",
      km: "ប្រូតូកូល Routing, config និង VPN",
    },
    bullets: {
      en: [
        "OSPF · RIP · EIGRP · BGP",
        "Subnet masks · IPv6 · wildcard",
        "ACLs · NAT · IPsec VPN · GRE",
      ],
      km: [
        "OSPF · RIP · EIGRP · BGP",
        "Subnet masks · IPv6 · wildcard",
        "ACLs · NAT · IPsec VPN · GRE",
      ],
    },
    html: { en: en_internetworking, km: km_internetworking },
    sources: [
      { file: "internetworking.pdf", label: "answer_internetworking.pdf" },
      { file: "internetworking_state_prepare.pdf", label: "Internetworking_II_State_Prepare.pdf" },
    ],
  },
  {
    slug: "cybersecurity",
    route: "/cybersecurity",
    theme: "cyber",
    icon: "ic-shield",
    title: { en: "Cyber Security", km: "Cyber Security" },
    short: {
      en: "Principles, controls & Kali toolkit",
      km: "គោលការណ៍, controls និងឧបករណ៍ Kali",
    },
    bullets: {
      en: [
        "CIA · AAA · controls (4+6)",
        "Crypto · risk · social engineering",
        "Hardening · hacking · Kali commands",
      ],
      km: [
        "CIA · AAA · controls (4+6)",
        "Crypto · risk · social engineering",
        "Hardening · hacking · Kali commands",
      ],
    },
    html: { en: en_cybersecurity, km: km_cybersecurity },
    sources: [{ file: "cybersecurity.pdf", label: "Cybersecurity_Principles_V3.pdf" }],
  },
  {
    slug: "mobile",
    route: "/mobile",
    theme: "mobile",
    icon: "ic-phone",
    title: { en: "Mobile Programming II", km: "Mobile Programming II" },
    short: {
      en: "Android (Java) + Flutter (Dart)",
      km: "Android (Java) + Flutter (Dart)",
    },
    bullets: {
      en: [
        "Lifecycle · Intents · SharedPreferences",
        "RecyclerView · Fragments · widgets",
        "Navigator · setState · Dart + async",
      ],
      km: [
        "Lifecycle · Intents · SharedPreferences",
        "RecyclerView · Fragments · widgets",
        "Navigator · setState · Dart + async",
      ],
    },
    html: { en: en_mobile, km: km_mobile },
    sources: [
      { file: "mobile.pdf", label: "exam_answers_han_vatana_mobile.pdf" },
      { file: "mobile_preview.pdf", label: "Preview_Final_State_Mobile_Programming_2025_1.pdf" },
    ],
  },
];

/** Derive the "On this page" list from the section headings in the content HTML. */
function topicsFrom(html: string): Topic[] {
  const out: Topic[] = [];
  const re = /<h2[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const title = m[2]
      .replace(/<span class="(kh|pill|tag-a|tag-f)"[^>]*>[\s\S]*?<\/span>/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim();
    out.push({ id: m[1], title });
  }
  return out;
}

function toSubject(m: SubjectMeta, locale: Locale): Subject {
  return {
    slug: m.slug,
    route: m.route,
    theme: m.theme,
    icon: m.icon,
    title: m.title[locale],
    short: m.short[locale],
    bullets: m.bullets[locale],
    topics: topicsFrom(m.html[locale]),
    sources: m.sources,
  };
}

/** Lightweight (no body HTML) localized subject list — for the home dashboard and sidebar. */
export function getSubjects(locale: Locale): Subject[] {
  return META.map((m) => toSubject(m, locale));
}

/** Full localized review document for a single subject page. */
export function getSubjectContent(
  slug: string,
  locale: Locale,
): SubjectContent | undefined {
  const m = META.find((s) => s.slug === slug);
  if (!m) return undefined;
  return { ...toSubject(m, locale), html: m.html[locale] };
}
