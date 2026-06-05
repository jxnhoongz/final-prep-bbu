import type { Metadata } from "next";
import Sheet from "@/components/Sheet";
import { bySlug } from "@/lib/subjects";

export const metadata: Metadata = { title: "Cyber Security — Review" };

export default function Page() {
  const s = bySlug("cybersecurity")!;
  return <Sheet html={s.html} />;
}
