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
      required: true,
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
