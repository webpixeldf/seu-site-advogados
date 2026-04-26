const originalSlugs = [
  'hospedagem-de-site-para-advogados','notion-para-advogados','e-mail-marketing-para-advogados',
  'video-institucional-para-escritorio-de-advocacia','criar-conteudo-para-o-youtube-da-resultados-na-advocacia',
  'como-aparecer-no-google-como-advogado','como-ser-advogado-do-google','como-monetizar-um-canal-de-advocacia-no-youtube',
  'como-montar-um-escritorio-de-advocacia-digital','trello-para-advogados','como-gerenciar-sua-advocacia-com-o-trello',
  'google-agenda-para-advogados','notebooklm-inteligencia-artificial-para-advogados','ferramentas-do-google-para-advogados',
  'beneficios-do-google-docs-para-advogados','marketing-digital-para-advogados-iniciantes',
  '3-coisas-que-os-advogados-nao-podem-fazer-nas-redes-sociais','5-melhores-redes-sociais-para-advogados',
  'listas-de-transmissao-whatsapp-e-telegram-na-advocacia','advogado-pode-usar-o-tik-tok',
  'whatsapp-business-para-advogados','whatsapp-para-advogados','como-colocar-um-site-de-advocacia-no-google',
  'como-criar-logo-para-advogado-gratis','como-criar-post-para-advogados-com-o-canva',
  'como-gravar-videos-da-advocacia-para-o-youtube','landing-page-de-alta-conversao-para-advogados',
  'como-criar-assistentes-juridicos-com-inteligencia-artificial','pagina-de-vendas-para-advogados',
  'por-que-um-advogado-deve-ter-um-site-profissional','a-importancia-de-ter-um-site-profissional-para-advogados',
  'como-criar-campanha-no-meta-ads-para-advogados','facebook-ads-para-advogados','instagram-para-advogado',
  'bio-para-instagram-de-advocacia','como-atrair-clientes-para-advogados-no-youtube',
  'para-o-advogado-e-melhor-ter-blog-ou-site','como-prospectar-clientes-na-advocacia-pelo-facebook',
  'como-instalar-as-tags-do-google-no-seu-site-de-advocacia','google-meu-negocio-para-advogados',
  'como-criar-um-site-para-advogados','linkedin-para-advogados','youtube-para-advogados',
  'como-atrair-clientes-de-advocacia-pelo-instagram','advogado-pode-anunciar-no-google','cartao-digital-para-advogado',
  'como-escrever-um-artigo-cientifico-no-direito','landing-page-e-site-institucional','melhor-cor-para-advogado',
  'posts-para-advogados','landing-page-para-advogado','nome-para-escritorio-de-advocacia',
  'cores-para-escritorio-de-advocacia','e-mail-para-advogado','sites-para-captar-clientes-para-advocacia',
  'numeros-de-advogados','simbolo-da-advocacia','advocacia-digital','perfil-de-advogado','legal-design-e-visual-law',
  'logomarca-para-advogados','identidade-visual-para-advogados','frases-para-bio-no-instagram-de-advogado',
  'advogados-criminalistas-famosos','trafego-pago-para-advogados','escritorio-de-advocacia-moderno',
  'o-que-um-advogado-faz-no-dia-a-dia','quais-sao-os-tipos-de-advogados','frases-para-elogiar-advogado',
  'captacao-de-clientes-na-advocacia','melhores-perguntas-para-fazer-a-um-advogado','marketing-juridico-digital',
  'advogado-pode-ser-mei','inteligencia-artificial-para-advogados','google-ads-para-advogados',
  'marketing-para-advogados','dominio-adv','seo-para-advogados','como-saber-se-o-advogado-e-bom',
  'como-achar-um-advogado-pelo-nome',
]

const ourSlugs = [
  'hospedagem-de-site-para-advogados','notion-para-advogados','e-mail-marketing-para-advogados',
  'video-institucional-para-escritorio-de-advocacia','criar-conteudo-para-o-youtube-da-resultados-na-advocacia',
  'como-aparecer-no-google-como-advogado','como-ser-advogado-do-google','como-monetizar-um-canal-de-advocacia-no-youtube',
  'como-montar-um-escritorio-de-advocacia-digital','trello-para-advogados','como-gerenciar-sua-advocacia-com-o-trello',
  'google-agenda-para-advogados','como-criar-assistentes-juridicos-com-inteligencia-artificial','cartao-digital-para-advogado',
  'como-escrever-um-artigo-cientifico-no-direito','diferenca-entre-landing-page-e-site-institucional-para-advogados',
  'qual-a-melhor-cor-para-advogado','posts-para-advogados-guia-completo','landing-page-para-advogado-guia-completo',
  'nome-para-escritorio-de-advocacia','cores-para-escritorio-de-advocacia','e-mail-para-advogado',
  'sites-para-captar-clientes-para-advocacia','numeros-de-advogados-panorama-completo','como-criar-post-para-advogados-com-o-canva',
  'whatsapp-business-para-advogados','whatsapp-para-advogados','youtube-para-advogados','marketing-digital-para-advogados-iniciantes',
  'linkedin-para-advogados','google-meu-negocio-para-advogados','landing-page-de-alta-conversao-para-advogados',
  'instagram-para-advogado-previdenciario','facebook-ads-para-advogados','ferramentas-do-google-para-advogados',
  'como-gravar-videos-para-o-youtube','como-instalar-as-tags-do-google-no-seu-site','como-prospectar-clientes-pelo-facebook',
  'como-atrair-clientes-pelo-instagram','como-criar-um-site-para-advogados','como-utilizar-listas-de-transmissao-whatsapp',
  'seo-para-advogados','marketing-juridico-digital','marketing-para-advogados','trafego-pago-para-advogados',
  'google-ads-para-advogados','identidade-visual-para-advogados','logomarca-para-advogados','advocacia-digital',
  'bio-para-instagram-de-advocacia','advogado-pode-anunciar-no-google','advogado-pode-usar-o-tik-tok',
  'beneficios-do-google-docs-para-advogados','como-atrair-clientes-para-advogados-no-youtube',
  'como-colocar-um-site-de-advocacia-no-google','como-criar-campanha-no-meta-ads-para-advogados',
  'como-criar-um-logo-para-advogado-gratis','notebooklm-ia-para-advogados','pagina-de-vendas-para-advogados',
  'para-o-advogado-e-melhor-ter-blog-ou-site','por-que-um-advogado-deve-ter-um-site-profissional',
  'a-importancia-de-ter-um-site-profissional-para-advogados','3-coisas-que-os-advogados-nao-podem-fazer-nas-redes-sociais',
  '5-melhores-redes-sociais-para-advogados','inteligencia-artificial-para-advogados','legal-design-e-visual-law',
  'perfil-de-advogado','dominio-adv-para-advogados','escritorio-de-advocacia-moderno','criacao-de-site-para-advogados'
]

// Find completely missing
console.log('=== ARTIGOS FALTANDO (existem no original, nao existem no nosso) ===')
const missing = originalSlugs.filter(os => !ourSlugs.some(s => os === s || os.includes(s) || s.includes(os)))
missing.forEach(s => console.log('  + ' + s))
console.log('Total faltando:', missing.length)

// Find slug mismatches
console.log('\n=== SLUGS DIVERGENTES (mesma pagina, URL diferente) ===')
const matched = []
for (const os of originalSlugs) {
  if (ourSlugs.includes(os)) continue // exact match
  const partial = ourSlugs.find(s => (os.includes(s) || s.includes(os)) && s !== os)
  if (partial) matched.push([partial, os])
}
matched.forEach(([ours, orig]) => console.log('  NOSSO: ' + ours + '\n  ORIG:  ' + orig + '\n'))
console.log('Total divergentes:', matched.length)
