import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    {
      name: 'nomeDoSite',
      type: 'text',
      defaultValue: 'Seu Site Advogados',
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'descricao',
      type: 'textarea',
    },
    {
      name: 'whatsappNumero',
      type: 'text',
      defaultValue: '5561992784283',
    },
    {
      name: 'whatsappMensagem',
      type: 'text',
    },
    {
      name: 'whatsappLink',
      type: 'text',
    },
    {
      name: 'contato',
      type: 'group',
      fields: [
        { name: 'telefone', type: 'text' },
        { name: 'email', type: 'text' },
        { name: 'endereco', type: 'textarea' },
        { name: 'googleMapsLink', type: 'text' },
      ],
    },
    {
      name: 'preco',
      type: 'group',
      fields: [
        { name: 'valor', type: 'text', defaultValue: '3x de R$ 285,00' },
        { name: 'descricao', type: 'text', defaultValue: 'A partir de' },
      ],
    },
  ],
}
