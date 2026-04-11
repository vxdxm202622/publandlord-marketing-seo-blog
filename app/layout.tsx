import type { Metadata } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Pub Landlord Blog | Marketing Tips for Independent UK Pubs',
    template: '%s | Pub Landlord Blog',
  },
  description: 'Practical marketing advice for independent UK pub landlords. Get more bookings, more footfall, and better local visibility for your pub.',
  generator: 'v0.app',
  metadataBase: new URL('https://publandlord.com/blog'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Pub Landlord Blog',
    title: 'Pub Landlord Blog | Marketing Tips for Independent UK Pubs',
    description: 'Practical marketing advice for independent UK pub landlords. Get more bookings, more footfall, and better local visibility for your pub.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pub Landlord Blog',
    description: 'Practical marketing advice for independent UK pub landlords.',
  },
  verification: {
    google: 'SNFajxjPfE3QudSwWjiX0hujdeFwsoAJMdClZ8-Aqmo',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
