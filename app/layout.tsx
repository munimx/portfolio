import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Munim Ahmad - Full Stack Developer & AI Engineer",
  description: "Portfolio of Munim Ahmad - Full Stack Developer specializing in AI/ML, TypeScript, Python, and modern web technologies.",
  keywords: ["Full Stack Developer", "AI Engineer", "TypeScript", "Python", "React", "Next.js", "LLM"],
  authors: [{ name: "Munim Ahmad" }],
  openGraph: {
    title: "Munim Ahmad - Full Stack Developer & AI Engineer",
    description: "Portfolio showcasing projects in AI/ML, web development, and real-time systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
