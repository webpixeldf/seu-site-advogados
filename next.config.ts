import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import { blogPosts } from './src/app/(frontend)/data/blogPosts'

const cidadesSlugs = [
  'alto-alegre', 'araraquara', 'belem-do-para', 'belo-horizonte', 'blumenau',
  'boa-vista', 'campinas', 'campo-grande', 'caracarai', 'cascavel',
  'caxias-do-sul', 'chapeco', 'curitiba', 'florianopolis', 'fortaleza',
  'goiania', 'guarulhos', 'itajai', 'joao-pessoa', 'joinville',
  'londrina', 'maceio', 'manaus', 'maringa', 'mogi-das-cruzes',
  'porto-alegre', 'portugal', 'recife', 'ribeirao-preto', 'rio-de-janeiro',
  'rorainopolis', 'salvador', 'santa-catarina', 'sao-jose-dos-campos',
  'sao-luis', 'sao-paulo', 'uberlandia',
]

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    qualities: [75, 80, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  compress: true,
  poweredByHeader: false,
  redirects: async () => [
    ...blogPosts.map((post) => ({
      source: `/${post.slug}`,
      destination: `/blog/${post.slug}`,
      permanent: true,
    })),
    ...cidadesSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/site-para-advogados/${slug}`,
      permanent: true,
    })),
    { source: '/blog/page/:n', destination: '/blog', permanent: true },
    { source: '/faq/page/:n', destination: '/faq', permanent: true },
    { source: '/site/page/:n', destination: '/blog', permanent: true },
    { source: '/redes-sociais/page/:n', destination: '/blog', permanent: true },
    { source: '/marketing/page/:n', destination: '/blog', permanent: true },
    { source: '/seo/page/:n', destination: '/blog', permanent: true },
    { source: '/advocacia/page/:n', destination: '/blog', permanent: true },
    { source: '/google/page/:n', destination: '/blog', permanent: true },
    { source: '/feed', destination: '/', permanent: true },
    { source: '/feed/:path*', destination: '/', permanent: true },
    { source: '/comments/feed', destination: '/', permanent: true },
    { source: '/:slug/feed', destination: '/', permanent: true },
    { source: '/quem-somos/webpixel', destination: '/quem-somos', permanent: true },
    { source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})', destination: '/blog', permanent: true },
    { source: '/:year(\\d{4})/:month(\\d{2})', destination: '/blog', permanent: true },
    { source: '/:year(\\d{4})', destination: '/blog', permanent: true },
    { source: '/wp-json/:path*', destination: '/', permanent: true },
    { source: '/wp-admin/:path*', destination: '/', permanent: true },
    { source: '/wp-content/:path*', destination: '/', permanent: true },
    { source: '/index.php', destination: '/', permanent: true },
    { source: '/home.php', destination: '/', permanent: true },
    { source: '/contato.php', destination: '/contatos', permanent: true },
    { source: '/contatos.php', destination: '/contatos', permanent: true },
    { source: '/portfolio.php', destination: '/portfolio', permanent: true },
    { source: '/quem-somos.php', destination: '/quem-somos', permanent: true },
    { source: '/blog.php', destination: '/blog', permanent: true },
    { source: '/faq.php', destination: '/faq', permanent: true },
  ],
  headers: async () => [
    {
      source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|css|js)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    {
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://wa.me https://fonts.googleapis.com https://cloudflareinsights.com; frame-ancestors 'none'" },
        { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
      ],
    },
  ],
}

export default withPayload(nextConfig)
