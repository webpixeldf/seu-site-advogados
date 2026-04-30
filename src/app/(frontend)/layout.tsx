import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
export const metadata: Metadata = {
  title: {
    default: 'Site para Advogados | Seu Site Advogados',
    template: '%s | Seu Site Advogados',
  },
  description: 'Especialistas em criação de site para advogados. Transforme sua experiência jurídica em uma presença digital que atrai e converte clientes. A partir de 3x de R$ 260,00.',
}

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seusiteadvogados.com.br/#business',
      name: 'Seu Site Advogados',
      image: 'https://seusiteadvogados.com.br/images/site-para-advogado.jpg',
      logo: 'https://seusiteadvogados.com.br/images/seu-site-advogados-logo.webp',
      url: 'https://seusiteadvogados.com.br',
      telephone: '+5561992784283',
      taxID: '34.644.883/0001-94',
      description: 'Especialistas em criação de site para advogados e escritórios de advocacia.',
      priceRange: 'R$ 260 - R$ 2000',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-61-99278-4283',
        contactType: 'sales',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
      sameAs: [
        'https://www.facebook.com/seusiteadvogados',
        'https://www.instagram.com/seusiteadvogados',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'SHIS, Quadra 06, Complexo Brasil 21',
        addressLocality: 'Brasília',
        addressRegion: 'DF',
        postalCode: '70316-000',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -15.7975,
        longitude: -47.8919,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
      },
      founder: { '@id': 'https://seusiteadvogados.com.br/#founder' },
    },
    {
      '@type': 'Person',
      '@id': 'https://seusiteadvogados.com.br/#founder',
      name: 'Web Pixel',
      jobTitle: 'Fundador e Desenvolvedor Web',
      worksFor: { '@id': 'https://seusiteadvogados.com.br/#business' },
      url: 'https://seusiteadvogados.com.br/quem-somos',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://seusiteadvogados.com.br/#website',
      name: 'Seu Site Advogados',
      url: 'https://seusiteadvogados.com.br',
      description: 'Especialistas em criação de site para advogados e escritórios de advocacia.',
      publisher: { '@id': 'https://seusiteadvogados.com.br/#business' },
    },
    {
      '@type': 'Service',
      '@id': 'https://seusiteadvogados.com.br/#service',
      name: 'Criação de Site para Advogados',
      description: 'Desenvolvimento de sites profissionais para advogados e escritórios de advocacia',
      provider: { '@id': 'https://seusiteadvogados.com.br/#business' },
      serviceType: 'Web Design',
      areaServed: { '@type': 'Country', name: 'BR' },
      offers: {
        '@type': 'Offer',
        price: '260.00',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://seusiteadvogados.com.br/#webpage',
      name: 'Site para Advogado | Seu Site Advogados',
      description: 'Criamos sites profissionais para advogados com design exclusivo, otimização para o Google e foco em captação de clientes.',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.speakable-answer', 'h1'],
      },
      isPartOf: { '@id': 'https://seusiteadvogados.com.br/#website' },
    },
  ],
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
