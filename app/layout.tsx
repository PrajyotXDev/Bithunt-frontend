import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bithunt // Team Parsec",
  description: "Bithunt — a competitive coding hunt by Team Parsec, IIT Dharwad.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
