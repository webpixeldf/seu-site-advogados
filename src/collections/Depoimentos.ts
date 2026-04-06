import type { CollectionConfig } from 'payload'
import { isAdmin, isPublicRead } from '../access'

export const Depoimentos: CollectionConfig = {
  slug: 'depoimentos',
  labels: {
    singular: 'Depoimento',
    plural: 'Depoimentos',
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
      name: 'cargo',
      type: 'text',
    },
    {
      name: 'escritorio',
      type: 'text',
    },
    {
      name: 'depoimento',
      type: 'textarea',
      required: true,
    },
    {
      name: 'foto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'avaliacao',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'destaque',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'ativo',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
