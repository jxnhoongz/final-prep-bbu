import internetworking from "@/content/internetworking";
import cybersecurity from "@/content/cybersecurity";
import mobile from "@/content/mobile";

export type Topic = { id: string; title: string };

export type Subject = {
  slug: string;
  route: string;
  title: string;
  short: string;
  theme: "net" | "cyber" | "mobile";
  icon: string; // sprite symbol id
  bullets: string[];
  html: string;
  topics: Topic[];
};

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

export const subjects: Subject[] = [
  {
    slug: "internetworking",
    route: "/internetworking",
    title: "Internetworking II",
    short: "Routing protocols, configs & VPNs",
    theme: "net",
    icon: "ic-globe",
    bullets: [
      "OSPF · RIP · EIGRP · BGP",
      "Subnet masks · IPv6 · wildcard",
      "ACLs · NAT · IPsec VPN · GRE",
    ],
    html: internetworking,
    topics: topicsFrom(internetworking),
  },
  {
    slug: "cybersecurity",
    route: "/cybersecurity",
    title: "Cyber Security",
    short: "Principles, controls & Kali toolkit",
    theme: "cyber",
    icon: "ic-shield",
    bullets: [
      "CIA · AAA · controls (4+6)",
      "Crypto · risk · social engineering",
      "Hardening · hacking · Kali commands",
    ],
    html: cybersecurity,
    topics: topicsFrom(cybersecurity),
  },
  {
    slug: "mobile",
    route: "/mobile",
    title: "Mobile Programming II",
    short: "Android (Java) + Flutter (Dart)",
    theme: "mobile",
    icon: "ic-phone",
    bullets: [
      "Lifecycle · Intents · SharedPreferences",
      "RecyclerView · Fragments · widgets",
      "Navigator · setState · Dart + async",
    ],
    html: mobile,
    topics: topicsFrom(mobile),
  },
];

export const bySlug = (slug: string) => subjects.find((s) => s.slug === slug);
export const byRoute = (path: string) => subjects.find((s) => s.route === path);
