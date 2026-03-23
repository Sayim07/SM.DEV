import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Sayim Mullick — Developer",
  description: "B.Tech IT student at BPPIMT, Kolkata — building across frontend, backend, and blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable}`} suppressHydrationWarning>
        <Cursor />
        <div className="grid-bg"></div>
        <main style={{ fontFamily: "var(--font-syne)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
