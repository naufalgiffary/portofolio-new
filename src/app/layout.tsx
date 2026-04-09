import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naufal Algiffary | Frontend, Mobile, Fullstack Developer",
  description:
    "Portfolio website of Naufal Algiffary showcasing experience, tech stack, and software engineering projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
