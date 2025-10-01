import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MOGCIA - AI・デジタル技術で企業の未来を創造する',
  description: 'AI・デジタル技術で企業の未来を創造するMOGCIA。スタートアップから大企業まで、それぞれの企業文化とビジョンに寄り添い、最適なデジタルソリューションを提供するパートナーとして、技術の先にある人と企業の豊かな未来を共に創造します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}

