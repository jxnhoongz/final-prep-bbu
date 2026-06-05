import type { Metadata } from "next";
import Sheet from "@/components/Sheet";
import { bySlug } from "@/lib/subjects";

export const metadata: Metadata = { title: "Internetworking II — Review" };

export default function Page() {
  const s = bySlug("internetworking")!;
  return <Sheet html={s.html} />;
}
