import { registerArticle } from './registry'

/**
 * Helper para registrar artigos auto-gerados a partir de HTML simples.
 * Usado pelo script scripts/generate-article.mjs (GitHub Actions diário).
 *
 * O wrapper aplica os estilos Tailwind do site via Group selectors,
 * para que o HTML gerado pela IA não precise carregar classes.
 */
export function registerHtmlArticle(slug: string, html: string) {
  registerArticle(slug, () => (
    <div
      className="text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#162a2a] [&_h2]:font-lexend [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#162a2a] [&_h3]:font-lexend [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-gray-700 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-4 [&_a]:text-[#de7322] [&_a]:font-semibold [&_a]:hover:text-[#ba5918] [&_strong]:text-[#162a2a] [&_em]:italic [&_blockquote]:border-l-4 [&_blockquote]:border-[#b58c61] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ))
}
