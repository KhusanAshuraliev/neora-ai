import type { Metadata } from 'next'
import './globals.css'
import BackgroundAurora from '@/components/ui/BackgroundAurora'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CursorDot from '@/components/ui/CursorDot'
import { LanguageProvider } from '@/lib/LanguageProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.neora.page'),
  title: {
    default: 'Neora AI — Your mind. Beyond time.',
    template: '%s — Neora AI',
  },
  description:
    'Neora AI preserves your identity, memories, and personality — creating a digital twin that thinks, responds, and communicates just like you. Forever.',
  keywords: [
    'digital twin',
    'AI',
    'digital immortality',
    'personality preservation',
    'Neora AI',
    'legacy',
    'identity',
  ],
  authors: [
    { name: 'Khusan Ashuraliev' },
    { name: 'Amirshokh Khakimov' },
    { name: 'Neora AI Team', url: 'mailto:haapai.team@gmail.com' },
  ],
  creator: 'Khusan Ashuraliev, Amirshokh Khakimov',
  publisher: 'Neora AI',
  openGraph: {
    title: 'Neora AI — Your mind. Beyond time.',
    description:
      'Preserve who you are forever. A living digital twin of your mind — your memories, personality, and voice.',
    url: 'https://www.neora.page',
    type: 'website',
    locale: 'en_US',
    siteName: 'Neora AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neora AI — Your mind. Beyond time.',
    description: 'Preserve who you are forever with Neora AI.',
    creator: '@neoraai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.neora.page/#organization',
      name: 'Neora AI',
      alternateName: 'Neora',
      url: 'https://www.neora.page',
      logo: 'https://www.neora.page/icon',
      image: 'https://www.neora.page/opengraph-image',
      email: 'haapai.team@gmail.com',
      description:
        'Neora AI preserves your identity, memories, personality, and voice — creating a living digital twin that thinks, responds, and communicates just like you, so loved ones can always reach you.',
      slogan: 'Preserve who you are. Forever.',
      foundingDate: '2024',
      founders: [
        { '@id': 'https://www.neora.page/#khusan-ashuraliev' },
        { '@id': 'https://www.neora.page/#amirshokh-khakimov' },
      ],
      sameAs: ['https://twitter.com/neoraai', 'https://x.com/neoraai'],
      knowsAbout: [
        'digital twin',
        'artificial intelligence',
        'digital immortality',
        'personality preservation',
        'voice cloning',
        'digital legacy',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.neora.page/#khusan-ashuraliev',
      name: 'Khusan Ashuraliev',
      jobTitle: 'Co-founder',
      worksFor: { '@id': 'https://www.neora.page/#organization' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tashkent',
        addressCountry: 'UZ',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.neora.page/#amirshokh-khakimov',
      name: 'Amirshokh Khakimov',
      jobTitle: 'Founder',
      worksFor: { '@id': 'https://www.neora.page/#organization' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tashkent',
        addressCountry: 'UZ',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.neora.page/#website',
      url: 'https://www.neora.page',
      name: 'Neora AI',
      description:
        'A living digital twin of your mind — your memories, personality, and voice. Forever.',
      publisher: { '@id': 'https://www.neora.page/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'WebApplication',
      name: 'Neora AI',
      url: 'https://www.neora.page',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Web',
      description:
        'Neora AI creates a living digital twin of your mind — capturing your memories, personality, and voice so loved ones can always reach you.',
      publisher: { '@id': 'https://www.neora.page/#organization' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise">
        <LanguageProvider>
          <BackgroundAurora />
          <ScrollProgress />
          <CursorDot />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
