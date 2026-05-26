import type { Metadata } from 'next'
import './globals.css'
import BackgroundAurora from '@/components/ui/BackgroundAurora'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CursorDot from '@/components/ui/CursorDot'
import { LanguageProvider } from '@/lib/LanguageProvider'

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
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
