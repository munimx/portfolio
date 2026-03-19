import type { Metadata } from 'next';
import { DM_Serif_Display, IBM_Plex_Sans, JetBrains_Mono, Newsreader } from 'next/font/google';
import './globals.css';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const ibmPlex = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const newsreader = Newsreader({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Munim Ahmad — Full-Stack AI Engineer',
  description: 'Portfolio showcasing AI engineering work, including Recallm semantic cache and DocuChat PDF assistant.',
  openGraph: {
    title: 'Munim Ahmad — Full-Stack AI Engineer',
    description: 'Portfolio showcasing AI engineering work',
    url: 'https://munimx.github.io/portfolio',
    siteName: 'Munim Ahmad Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${ibmPlex.variable} ${jetbrains.variable} ${newsreader.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
