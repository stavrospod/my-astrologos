import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['greek', 'latin'] })

export const metadata: Metadata = {
  title: 'MyAstrologos.gr - Ο προσωπικός σας αστρολογικός οδηγός',
  description: 'Ανακαλύψτε τα μυστικά των άστρων και το μέλλον σας στο MyAstrologos.gr. Ημερήσιες προβλέψεις, αναλύσεις ζωδίων, και προσωπικές αστρολογικές συμβουλές.',
  keywords: 'αστρολογία, ζώδια, προβλέψεις, ωροσκόπιο, συμβατότητα, όνειρα',
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: 'https://www.myastrologos.gr',
    siteName: 'MyAstrologos.gr',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-purple-700 text-white p-4 mt-8">
          <div className="container mx-auto">
            <p>&copy; 2024 MyAstrologos.gr. Όλα τα δικαιώματα διατηρούνται.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}