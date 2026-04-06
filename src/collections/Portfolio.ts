import type { CollectionConfig } from 'payload'
import { isAdmin, isPublicRead } from '../access'

export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  labels: {
    singular: 'Portfolio',
    plural: 'Portfolios',
  },
  admin: {
    useAsTitle: 'nomeCliente',
  },
  access: {
    read: isPublicRead,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'nomeCliente',
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
      name: 'descricao',
      type: 'textarea',
    },
    {
      name: 'urlSite',
      type: 'text',
      required: true,
    },
    {
      name: 'imagem',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'depoimento',
      type: 'textarea',
    },
    {
      name: 'destaque',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'ordem',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'ativo',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
