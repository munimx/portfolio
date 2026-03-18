import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import MotionProvider from "./components/MotionProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
});

const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: "Munim Ahmad - Full-Stack AI Engineer",
  description:
    "Portfolio of Munim Ahmad, Full-Stack AI Engineer focused on RAG systems, LLM optimization, and scalable backend architecture.",
  keywords: [
    "Full-Stack AI Engineer",
    "RAG Systems",
    "LLM Optimization",
    "Machine Learning Engineer",
    "Python",
    "Next.js",
    ".NET",
    "Backend Architecture",
  ],
  authors: [{ name: "Munim Ahmad" }],
  creator: "Munim Ahmad",
  publisher: "Munim Ahmad",
  metadataBase: new URL('https://munimx.github.io'),
  openGraph: {
    title: "Munim Ahmad - Full-Stack AI Engineer",
    description:
      "Building production-ready AI applications from model development to deployment, with a focus on RAG, latency optimization, and backend systems.",
    type: "website",
    locale: "en_US",
    url: "https://munimx.github.io/portfolio",
    siteName: "Munim Ahmad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munim Ahmad - Full-Stack AI Engineer",
    description:
      "Portfolio focused on production AI systems, model optimization, and full-stack delivery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0b1020',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable} scroll-smooth`}>
      <body className={manrope.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] glass px-3 py-2 rounded-lg"
        >
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
