'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export function LockScreen() {
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    <div className="fixed inset-0 bg-[#F7F5F2] overflow-hidden">

      {/* Círculo decorativo — canto superior direito */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '80vmax',
          height: '80vmax',
          top: '-40vmax',
          right: '-30vmax',
          background: 'radial-gradient(circle, #E8E2D9 0%, #F7F5F2 70%)',
        }}
      />

      {/* Linha vertical decorativa — esquerda */}
      <motion.div
        className="absolute left-8 lg:left-16 top-0 bottom-0 w-px bg-[#2B2B2B]/8 pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col min-h-screen px-10 lg:px-24">

        {/* Header */}
        <motion.header className="pt-10 lg:pt-14" {...fade(0.1)}>
          <span className="font-olive-citrus text-3xl lg:text-4xl text-[#ba816d] tracking-wide select-none">
            Dona B.
          </span>
        </motion.header>

        {/* Corpo central */}
        <div className="flex-1 flex flex-col justify-center max-w-lg">

          {/* Tag */}
          <motion.p
            className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#2B2B2B]/40 mb-8"
            {...fade(0.3)}
          >
            Em breve
          </motion.p>

          {/* Título */}
          <motion.h1
            className="font-olive-citrus text-5xl lg:text-7xl text-[#2B2B2B] leading-[1.0] mb-6"
            {...fade(0.45)}
          >
            Algo bonito<br />
            <span className="text-[#ba816d]">está chegando.</span>
          </motion.h1>

          {/* Descrição */}
          <motion.p
            className="font-sans text-sm text-[#2B2B2B]/50 leading-relaxed max-w-xs mb-12"
            {...fade(0.6)}
          >
            Estamos preparando uma nova experiência para você. Volte em breve.
          </motion.p>

          {/* Divisor */}
          <motion.div
            className="h-px bg-[#2B2B2B]/10 mb-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Formulário de acesso */}
          <motion.div {...fade(0.85)}>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B2B2B]/35 mb-4">
              Acesso restrito
            </p>

            <form onSubmit={handleSubmit} className="flex gap-3 items-start">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Senha"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                  className="w-full font-sans text-sm bg-white/70 border border-[#2B2B2B]/12 px-4 py-3 pr-11 text-[#2B2B2B] placeholder:text-[#2B2B2B]/25 outline-none focus:border-[#ba816d] focus:bg-white transition-all duration-200 disabled:opacity-50"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShow(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2B2B2B]/30 hover:text-[#2B2B2B]/60 transition-colors"
                  aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {show ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading || !password}
                className="font-sans text-xs font-semibold tracking-wider uppercase bg-[#2B2B2B] text-[#F7F5F2] px-6 py-3 hover:bg-[#ba816d] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? '...' : 'Entrar'}
              </button>
            </form>

            {error && (
              <motion.p
                role="alert"
                className="font-sans text-xs text-red-400 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="py-8 flex items-center justify-between"
          {...fade(1.0)}
        >
          <p className="font-sans text-[10px] tracking-widest uppercase text-[#2B2B2B]/25">
            © {new Date().getFullYear()} Dona B
          </p>
          <p className="font-sans text-[10px] tracking-widest uppercase text-[#2B2B2B]/25">
            Decoração & Organização
          </p>
        </motion.footer>
      </div>
    </div>
  )
}
