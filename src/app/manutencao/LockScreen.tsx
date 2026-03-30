'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

export function LockScreen() {
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/manutencao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/')
        router.refresh()
      } else {
        const data = await res.json() as { error?: string }
        setError(data.error ?? 'Senha incorreta')
        setPassword('')
        inputRef.current?.focus()
      }
    } catch {
      setError('Erro de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F7F5F2] flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-10 text-center">
        <span className="font-olive-citrus text-4xl text-[#ba816d] tracking-wide">
          Dona B.
        </span>
      </div>

      {/* Ícone de manutenção */}
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#ba816d]"
          aria-hidden="true"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>

      {/* Mensagem */}
      <div className="mb-10 text-center max-w-xs">
        <h1 className="font-sans text-xl font-semibold text-[#2B2B2B] mb-2 tracking-wide">
          Em manutenção
        </h1>
        <p className="font-sans text-sm text-[#2B2B2B]/60 leading-relaxed">
          Estamos preparando algo especial. Em breve voltamos com novidades.
        </p>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-3">
        <div className="relative">
          <input
            ref={inputRef}
            type={show ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha de acesso"
            autoComplete="current-password"
            required
            disabled={loading}
            className="w-full font-sans text-sm bg-white border border-[#E8E2D9] rounded-full px-5 py-3 pr-12 text-[#2B2B2B] placeholder:text-[#2B2B2B]/40 outline-none focus:border-[#ba816d] transition-colors disabled:opacity-50"
          />
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShow(v => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2B2B2B]/40 hover:text-[#2B2B2B]/70 transition-colors"
            aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {show ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        {error && (
          <p role="alert" className="font-sans text-xs text-red-500 text-center px-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="w-full font-sans text-sm font-medium bg-[#2B2B2B] text-white rounded-full py-3 hover:bg-[#ba816d] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? 'Verificando...' : 'Entrar'}
        </button>
      </form>

      {/* Rodapé */}
      <p className="mt-16 font-sans text-xs text-[#2B2B2B]/30 tracking-wide">
        © {new Date().getFullYear()} Dona B
      </p>
    </div>
  )
}
