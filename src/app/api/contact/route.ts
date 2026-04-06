import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

// Simple in-memory rate limiter (per IP, max 5 submissions per 10 minutes)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// Sanitize input: trim, remove HTML tags, limit length
function sanitize(value: string, maxLength = 500): string {
  return value
    .replace(/<[^>]*>/g, '') // strip HTML
    .replace(/[<>]/g, '')    // remove remaining angle brackets
    .trim()
    .slice(0, maxLength)
}

// Validate email format
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Muitas tentativas. Aguarde alguns minutos.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot check — if the hidden field has a value, it's a bot
    if (body.website) {
      // Silently reject but return success (don't let bot know it was caught)
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    const { nome, email, telefone, assunto, mensagem, tipoSite, pagina } = body

    if (!nome || !email || !telefone || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Preencha todos os campos obrigatórios.' },
        { status: 400 }
      )
    }

    // Validate email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido.' },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const sanitizedData = {
      nome: sanitize(nome, 100),
      email: sanitize(email, 100),
      telefone: sanitize(telefone, 20),
      assunto: sanitize(assunto, 200),
      mensagem: sanitize(mensagem, 2000),
      tipoSite: sanitize(tipoSite || '', 200),
      pagina: sanitize(pagina || '', 200),
      ip,
    }

    // Spam detection: reject if message has too many URLs
    const urlCount = (sanitizedData.mensagem.match(/https?:\/\//g) || []).length
    if (urlCount > 2) {
      return NextResponse.json({ success: true }) // silent reject
    }

    // Save to Payload CMS
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'emails',
      data: sanitizedData,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Erro ao processar a mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}
