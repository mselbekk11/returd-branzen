import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const space = Space_Grotesk({ subsets: ['latin'] });

const imageURL = `https://http://www.returdbranzen.com/og.png`;

export const metadata: Metadata = {
  title: 'Returd Branzen',
  description: 'I am Returd Branzen. I am here to find moon',
  openGraph: {
    images: imageURL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={space.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
      <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
    </html>
  );
}
