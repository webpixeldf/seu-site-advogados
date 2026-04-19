'use client'
import { useState, useRef, type FormEvent, type ChangeEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5561992784283'

interface FormData {
  nome: string
  email: string
  telefone: string
  assunto: string
  tipoSite: string[]
  mensagem: string
}

const tipoSiteOptions = [
  'Site institucional',
  'Landing page',
  'Blog',
  'Outro',
]

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function buildWhatsAppMessage(data: FormData): string {
  const lines = [
    `*Nova mensagem do site*`,
    ``,
    `*Nome:* ${data.nome}`,
    `*E-mail:* ${data.email}`,
    `*Telefone:* ${data.telefone}`,
    `*Assunto:* ${data.assunto}`,
  ]

  if (data.tipoSite.length > 0) {
    lines.push(`*Tipo de site:* ${data.tipoSite.join(', ')}`)
  }

  lines.push(``, `*Mensagem:*`, data.mensagem)

  return lines.join('\n')
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    tipoSite: [],
    mensagem: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const honeypotRef = useRef<HTMLInputElement>(null)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData((prev) => ({ ...prev, telefone: formatted }))
  }

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      tipoSite: checked
        ? [...prev.tipoSite, value]
        : prev.tipoSite.filter((t) => t !== value),
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Honeypot: if filled, silently "succeed" (it's a bot)
    if (honeypotRef.current?.value) {
      setLoading(false)
      setSubmitted(true)
      return
    }

    try {
      const message = buildWhatsAppMessage(formData)
      const encoded = encodeURIComponent(message)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
      setSubmitted(true)
    } catch {
      setError('Não foi possível abrir o WhatsApp. Use o botão abaixo.')
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#162a2a] font-lexend mb-3">
          Mensagem enviada!
        </h3>
        <p className="text-gray-600 font-lexend mb-6">
          Sua mensagem foi registrada e direcionada para nosso WhatsApp.
          Se a janela não abriu, clique no botão abaixo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(formData))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-6 py-3 rounded-lg font-lexend font-semibold text-sm transition-all"
          >
            Abrir WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                nome: '',
                email: '',
                telefone: '',
                assunto: '',
                tipoSite: [],
                mensagem: '',
              })
            }}
            className="text-[#de7322] hover:text-[#ba5918] font-lexend font-semibold transition-colors"
          >
            Enviar outra mensagem
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6"
    >
      {/* Honeypot — invisible to users, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Deixe em branco</label>
        <input
          type="text"
          id="website"
          name="website"
          ref={honeypotRef}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome */}
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-700 font-lexend mb-2"
          >
            Nome completo *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            maxLength={100}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b58c61] focus:ring-2 focus:ring-[#b58c61]/20 outline-none transition-all font-lexend text-sm text-gray-800"
            placeholder="Seu nome"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 font-lexend mb-2"
          >
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={100}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b58c61] focus:ring-2 focus:ring-[#b58c61]/20 outline-none transition-all font-lexend text-sm text-gray-800"
            placeholder="seu@email.com"
          />
        </div>

        {/* Telefone com máscara */}
        <div>
          <label
            htmlFor="telefone"
            className="block text-sm font-medium text-gray-700 font-lexend mb-2"
          >
            Telefone *
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handlePhoneChange}
            required
            maxLength={16}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b58c61] focus:ring-2 focus:ring-[#b58c61]/20 outline-none transition-all font-lexend text-sm text-gray-800"
            placeholder="(00) 00000-0000"
          />
        </div>

        {/* Assunto */}
        <div>
          <label
            htmlFor="assunto"
            className="block text-sm font-medium text-gray-700 font-lexend mb-2"
          >
            Assunto *
          </label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
            maxLength={200}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b58c61] focus:ring-2 focus:ring-[#b58c61]/20 outline-none transition-all font-lexend text-sm text-gray-800"
            placeholder="Assunto da mensagem"
          />
        </div>
      </div>

      {/* Tipo de site */}
      <div>
        <label className="block text-sm font-medium text-gray-700 font-lexend mb-3">
          Tipo de site desejado
        </label>
        <div className="flex flex-wrap gap-4">
          {tipoSiteOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                value={option}
                checked={formData.tipoSite.includes(option)}
                onChange={handleCheckbox}
                className="w-4 h-4 rounded border-gray-300 text-[#b58c61] focus:ring-[#b58c61]/20 accent-[#b58c61]"
              />
              <span className="text-sm text-gray-600 font-lexend group-hover:text-gray-800 transition-colors">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label
          htmlFor="mensagem"
          className="block text-sm font-medium text-gray-700 font-lexend mb-2"
        >
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          rows={5}
          maxLength={2000}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b58c61] focus:ring-2 focus:ring-[#b58c61]/20 outline-none transition-all font-lexend text-sm resize-none text-gray-800"
          placeholder="Descreva o que você precisa..."
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg font-lexend text-sm">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#de7322] hover:bg-[#ba5918] disabled:bg-[#de7322]/60 text-white px-8 py-3.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
      >
        {loading ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar pelo WhatsApp
          </>
        )}
      </button>
    </form>
  )
}
