import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import React from 'react'
import './(frontend)/globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    default: 'Site para Advogados | Seu Site Advogados',
    template: '%s | Seu Site Advogados',
  },
  description: 'Especialistas em criação de site para advogados e escritórios de advocacia. Design profissional, SEO otimizado e presença digital que atrai e converte clientes.',
  metadataBase: new URL('https://seusiteadvogados.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Site para Advogados | Seu Site Advogados',
    description: 'Especialistas em criação de site para advogados e escritórios de advocacia. Design profissional, SEO otimizado e presença digital que atrai e converte clientes.',
    images: [
      {
        url: '/images/site-para-advogado.jpg',
        width: 800,
        height: 800,
        alt: 'Site para Advogados - Seu Site Advogados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seusiteadvogados',
    creator: '@seusiteadvogados',
    title: 'Site para Advogados | Seu Site Advogados',
    description: 'Especialistas em criação de site para advogados e escritórios de advocacia.',
    images: ['/images/site-para-advogado.jpg'],
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
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'theme-color': '#162a2a',
  },
  verification: {
    google: 'JdDWbq63pVCP9QhL0YzjAptwb1QoPRGabYzTEWz9dl0',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={lexend.variable}>
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
