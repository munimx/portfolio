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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
