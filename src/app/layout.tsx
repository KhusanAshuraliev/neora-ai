import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Neora AI — Your mind. Beyond time.',
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
  authors: [{ name: 'Neora AI Team', url: 'mailto:haapai.team@gmail.com' }],
  creator: 'Neora AI Team',
  openGraph: {
    title: 'Neora AI — Your mind. Beyond time.',
    description:
      'Preserve who you are forever. Neora AI creates a living digital twin of your mind.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Neora AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neora AI — Your mind. Beyond time.',
    description: 'Preserve who you are forever with Neora AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}
