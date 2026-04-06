import type { CollectionConfig } from 'payload'

export const Emails: CollectionConfig = {
  slug: 'emails',
  labels: {
    singular: 'E-mail',
    plural: 'E-mails',
  },
  admin: {
    useAsTitle: 'assunto',
    defaultColumns: ['nome', 'email', 'assunto', 'pagina', 'createdAt'],
    description: 'Mensagens recebidas pelos formulários do site.',
  },
  access: {
    // Only admins can read/update/delete
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
    // API route can create without auth (public form submission)
    create: () => true,
  },
  fields: [
    {
      name: 'nome',
      type: 'text',
      required: true,
      label: 'Nome',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'E-mail',
    },
    {
      name: 'telefone',
      type: 'text',
      required: true,
      label: 'Telefone',
    },
    {
      name: 'assunto',
      type: 'text',
      required: true,
      label: 'Assunto',
    },
    {
      name: 'tipoSite',
      type: 'text',
      label: 'Tipo de Site',
    },
    {
      name: 'mensagem',
      type: 'textarea',
      required: true,
      label: 'Mensagem',
    },
    {
      name: 'pagina',
      type: 'text',
      label: 'Página de Origem',
      admin: {
        description: 'URL da página de onde o formulário foi enviado.',
      },
    },
    {
      name: 'ip',
      type: 'text',
      label: 'IP',
      admin: {
        position: 'sidebar',
        description: 'IP do remetente (para controle de spam).',
      },
    },
    {
      name: 'lido',
      type: 'checkbox',
      label: 'Lido',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
