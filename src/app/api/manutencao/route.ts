import { NextRequest, NextResponse } from 'next/server'
import { generateMaintenanceToken } from '@/lib/maintenance-token'

const COOKIE_NAME = 'donab_access'

export async function POST(request: NextRequest) {
  const { password } = (await request.json()) as { password: string }

  const correctPassword = process.env.MAINTENANCE_PASSWORD
  const secret = process.env.MAINTENANCE_SECRET

  if (!correctPassword || !secret) {
    return NextResponse.json({ error: 'Configuração inválida' }, { status: 500 })
  }

  // Delay fixo para dificultar brute-force por tempo de resposta
  await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 200))

  if (password !== correctPassword) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 })
  }

  const token = await generateMaintenanceToken(secret)

  const response = NextResponse.json({ success: true })
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: '/',
  })

  return response
}
