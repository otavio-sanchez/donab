import { NextRequest, NextResponse } from 'next/server'
import { generateMaintenanceToken } from '@/lib/maintenance-token'

export const MAINTENANCE_COOKIE = 'donab_access'

// 👇 Altere aqui para ativar ou desativar o modo de manutenção
const MAINTENANCE_MODE = true

export async function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/manutencao') ||
    pathname.startsWith('/api/manutencao')
  ) {
    return NextResponse.next()
  }

  const secret = process.env.MAINTENANCE_SECRET
  const cookie = request.cookies.get(MAINTENANCE_COOKIE)

  if (secret && cookie?.value) {
    const expected = await generateMaintenanceToken(secret)
    if (cookie.value === expected) {
      return NextResponse.next()
    }
  }

  const url = request.nextUrl.clone()
  url.pathname = '/manutencao'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ttf|otf|woff|woff2)).*)',
  ],
}
