import type { Metadata } from 'next'
import React from 'react'
import './(frontend)/globals.css'

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
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  other: {
    'theme-color': '#162a2a',
  },
  verification: {
    // google: 'seu-codigo-aqui', // Adicionar após verificar no Google Search Console
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
