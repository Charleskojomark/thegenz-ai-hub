import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://thegenz-ai-hub.vercel.app'),
  title: {
    default: 'TheGenZ AI Hub — African AI Venture-Building Platform',
    template: '%s | TheGenZ AI Hub',
  },
  description:
    'Turning AI talent and ideas into companies. TheGenZ AI Hub connects African AI talent, real-world enterprise problems, and venture resources to launch enduring companies.',
  keywords: [
    'African AI venture platform',
    'AI venture building Africa',
    'AI builders',
    'African AI startups',
    'AI talent foundry',
    'AI innovation Africa',
    'AI entrepreneurship',
    'AI Builder Cohort',
    'AI product development',
    'African AI ecosystem',
    'African technology ventures'
  ],
  authors: [{ name: 'TheGenZ AI Hub' }],
  creator: 'TheGenZ AI Hub',
  publisher: 'TheGenZ AI Hub',
  alternates: {
    canonical: 'https://thegenz-ai-hub.vercel.app',
  },
  openGraph: {
    title: 'TheGenZ AI Hub — Turning AI Talent and Ideas Into Companies',
    description:
      'The premier African AI venture-building platform connecting builders, real-world problems, and venture resources to launch the next generation of AI companies.',
    url: 'https://thegenz-ai-hub.vercel.app',
    siteName: 'TheGenZ AI Hub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TheGenZ AI Hub — African AI Venture-Building Platform',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheGenZ AI Hub — Turning AI Talent and Ideas Into Companies',
    description:
      'African AI venture-building platform connecting AI talent, enterprise problems, and venture capital resources.',
    images: ['/og-image.png'],
    creator: '@TheGenZAIHub',
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TheGenZ AI Hub',
    url: 'https://thegenz-ai-hub.vercel.app',
    logo: 'https://thegenz-ai-hub.vercel.app/thegenzlogo-white.png',
    description:
      'African AI venture-building platform transforming AI talent and ideas into scalable companies.',
    sameAs: [
      'https://twitter.com/',
      'https://linkedin.com/',
      'https://facebook.com/'
    ],
    foundingDate: '2026',
    areaServed: 'Africa',
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
