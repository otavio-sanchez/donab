import { NextRequest, NextResponse } from 'next/server'
import { MAINTENANCE_MODE, MAINTENANCE_SECRET } from '@/config'

export const MAINTENANCE_COOKIE = 'donab_access'

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

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Sempre libera assets e rotas internas
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/manutencao') ||
    pathname.startsWith('/manutencao')
  ) {
    return NextResponse.next()
  }

  // Se manutenção desativada, libera tudo
  if (!MAINTENANCE_MODE) {
    return NextResponse.next()
  }

  // Verifica cookie de bypass
  const cookie = request.cookies.get(MAINTENANCE_COOKIE)
  if (cookie?.value) {
    const expected = await generateToken(MAINTENANCE_SECRET)
    if (cookie.value === expected) {
      return NextResponse.next()
    }
  }

  // Redireciona para manutenção
  const url = request.nextUrl.clone()
  url.pathname = '/manutencao'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ttf|otf|woff|woff2)).*)'],
}
