import "./globals.css";
import type { Metadata } from "next";
import { StudyProvider } from "@/components/StudyProvider";
import Sidebar from "@/components/Sidebar";
import Sprite from "@/components/Sprite";

export const metadata: Metadata = {
  title: "Final Exam Prep",
  description: "Active-recall study sheets — Internetworking, Cyber Security, Mobile Programming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sprite />
        <StudyProvider>
          <Sidebar />
          {children}
        </StudyProvider>
      </body>
    </html>
  );
}
