import type { CollectionConfig } from 'payload'
import { isAdmin, isPublicRead } from '../access'

export const Cidades: CollectionConfig = {
  slug: 'cidades',
  labels: {
    singular: 'Cidade',
    plural: 'Cidades',
  },
  admin: {
    useAsTitle: 'nome',
  },
  access: {
    read: isPublicRead,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'nome',
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
      name: 'estado',
      type: 'text',
    },
    {
      name: 'titulo',
      type: 'text',
    },
    {
      name: 'descricao',
      type: 'richText',
    },
    {
      name: 'metaTitle',
      type: 'text',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
    },
    {
      name: 'ativo',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
