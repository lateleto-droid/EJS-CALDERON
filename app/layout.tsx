import type {Metadata} from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EJS Calderon Construction LLC | General Contractor Middletown NY',
  description: 'Top-tier general contracting, commercial and residential construction services in Middletown, NY.',
  openGraph: {
    title: 'EJS Calderon Construction LLC',
    description: 'Top-tier general contracting, commercial and residential construction services in Middletown, NY.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EJS Calderon Construction',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="font-sans text-steel antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
