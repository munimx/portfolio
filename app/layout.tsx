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
  description: "Portfolio of Munim Ahmad - Full Stack Developer specializing in AI/ML, TypeScript, Python, and modern web technologies. Featured projects: ReCallM, DocuChat, Folio.",
  keywords: ["Full Stack Developer", "AI Engineer", "TypeScript", "Python", "React", "Next.js", "LLM", "Machine Learning", "Web Development"],
  authors: [{ name: "Munim Ahmad" }],
  creator: "Munim Ahmad",
  publisher: "Munim Ahmad",
  metadataBase: new URL('https://munimx.github.io'),
  openGraph: {
    title: "Munim Ahmad - Full Stack Developer & AI Engineer",
    description: "Portfolio showcasing projects in AI/ML, web development, and real-time systems. Building intelligent applications with modern technologies.",
    type: "website",
    locale: "en_US",
    url: "https://munimx.github.io/portfolio",
    siteName: "Munim Ahmad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munim Ahmad - Full Stack Developer & AI Engineer",
    description: "Portfolio showcasing projects in AI/ML, web development, and real-time systems.",
    creator: "@munimx",
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
