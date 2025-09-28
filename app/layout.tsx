import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PredictaChat - Turn your group chats into dynamic prediction markets',
  description: 'A MiniApp for Base Wallet users to create and participate in YES/NO prediction markets directly within chat.',
  keywords: ['prediction markets', 'base', 'miniapp', 'chat', 'crypto', 'web3'],
  authors: [{ name: 'PredictaChat Team' }],
  openGraph: {
    title: 'PredictaChat',
    description: 'Turn your group chats into dynamic prediction markets',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            <div className="min-h-screen bg-bg text-fg">
              {children}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
