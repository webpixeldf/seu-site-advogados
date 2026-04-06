import type { CollectionConfig } from 'payload'
import { isAdmin, isPublicRead } from '../access'

export const Servicos: CollectionConfig = {
  slug: 'servicos',
  labels: {
    singular: 'Servico',
    plural: 'Servicos',
  },
  admin: {
    useAsTitle: 'titulo',
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
      name: 'descricaoCurta',
      type: 'text',
      required: true,
    },
    {
      name: 'descricaoCompleta',
      type: 'richText',
    },
    {
      name: 'icone',
      type: 'text',
    },
    {
      name: 'imagem',
      type: 'upload',
      relationTo: 'media',
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
