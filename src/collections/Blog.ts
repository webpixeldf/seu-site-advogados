import type { CollectionConfig } from 'payload'
import { isAdmin, isPublicRead } from '../access'

export const Blog: CollectionConfig = {
  slug: 'blog',
  labels: {
    singular: 'Artigo',
    plural: 'Artigos',
  },
  admin: {
    useAsTitle: 'titulo',
    defaultColumns: ['titulo', 'status', 'publishedAt'],
  },
  access: {
    read: isPublicRead,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'resumo',
      type: 'textarea',
      maxLength: 160,
    },
    {
      name: 'conteudo',
      type: 'richText',
    },
    {
      name: 'conteudoHtml',
      type: 'textarea',
      label: 'Conteúdo HTML',
      admin: {
        description: 'Conteúdo em HTML gerado automaticamente. Se preenchido, tem prioridade sobre o campo richText.',
      },
    },
    {
      name: 'imagemUrl',
      type: 'text',
      label: 'URL da Imagem',
      admin: {
        description: 'Caminho da imagem de destaque (ex: /images/blog/slug.webp)',
      },
    },
    {
      name: 'imagemDestaque',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'autor',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'rascunho',
      options: [
        { label: 'Rascunho', value: 'rascunho' },
        { label: 'Publicado', value: 'publicado' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'destaque',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          maxLength: 70,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          maxLength: 160,
        },
        {
          name: 'canonicalURL',
          type: 'text',
        },
      ],
    },
  ],
}
