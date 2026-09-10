import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://thegenzaihub.com'),
  title: 'TheGenZ AI Hub | Turning AI Talent and Ideas Into Companies',
  description:
    'TheGenZ AI Hub is an African AI venture-building platform connecting AI talent, real-world problems, builders and opportunities to develop AI-powered products and companies.',
  keywords: [
    'AI venture building',
    'AI builders',
    'AI startups',
    'AI community',
    'AI talent',
    'AI innovation',
    'AI entrepreneurship',
    'AI education',
    'AI product development',
    'African AI ecosystem',
    'AI startups Africa'
  ],
  authors: [{ name: 'TheGenZ AI Hub' }],
  openGraph: {
    title: 'TheGenZ AI Hub | Turning AI Talent and Ideas Into Companies',
    description:
      'TheGenZ AI Hub is an African AI venture-building platform connecting AI talent, real-world problems, builders and opportunities to develop AI-powered products and companies.',
    url: 'https://thegenzaihub.com',
    siteName: 'TheGenZ AI Hub',
    images: [
      {
        url: '/thegenzlogo.png',
        width: 800,
        height: 600,
        alt: 'TheGenZ AI Hub Logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheGenZ AI Hub | Turning AI Talent and Ideas Into Companies',
    description:
      'TheGenZ AI Hub is an African AI venture-building platform connecting AI talent, real-world problems, builders and opportunities to develop AI-powered products and companies.',
    images: ['/thegenzlogo.png']
  },
  icons: {
    icon: '/thegenzlogo.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/thegenzlogo.png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
