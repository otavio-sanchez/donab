import { NextRequest, NextResponse } from 'next/server'
import { MAINTENANCE_PASSWORD, MAINTENANCE_SECRET } from '@/config'

const COOKIE_NAME = 'donab_access'

async function generateToken(secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode('donab_maintenance_access_v1'))
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function POST(request: NextRequest) {
  const { password } = (await request.json()) as { password: string }

  await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 200))

  if (password !== MAINTENANCE_PASSWORD) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 })
  }

  const token = await generateToken(MAINTENANCE_SECRET)

  const response = NextResponse.json({ success: true })
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return response
}
