import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'descricao',
      type: 'textarea',
    },
    {
      name: 'menuPrincipal',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'redesSociais',
      type: 'group',
      fields: [
        { name: 'facebook', type: 'text' },
        { name: 'instagram', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'youtube', type: 'text' },
      ],
    },
    {
      name: 'contato',
      type: 'group',
      fields: [
        { name: 'telefone', type: 'text', defaultValue: '(61) 99278-4283' },
        { name: 'whatsapp', type: 'text', defaultValue: '(61) 99278-4283' },
        { name: 'email', type: 'text', defaultValue: 'webpixelbr@gmail.com' },
        {
          name: 'endereco',
          type: 'textarea',
          defaultValue: 'SHIS, Quadra 06, Complexo Brasil 21 - Asa Sul, Brasilia - DF, 70316-000',
        },
        { name: 'googleMapsLink', type: 'text' },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: 'Seu Site Advogados. Todos os direitos reservados.',
    },
  ],
}
