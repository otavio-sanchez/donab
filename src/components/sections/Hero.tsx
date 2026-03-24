import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#F7F5F2] flex items-center overflow-hidden"
      aria-label="Apresentação principal"
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[#ba816d]/15 blur-3xl" />
        <div className="absolute bottom-[5%] left-[0%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-[#E8E2D9]/80 blur-2xl" />
        <div className="absolute top-[40%] right-[15%] w-[12vw] h-[12vw] max-w-[160px] max-h-[160px] rounded-full border border-[#ba816d]/40" />
        <div className="absolute top-[25%] right-[30%] w-[5vw] h-[5vw] max-w-[60px] max-h-[60px] rounded-full bg-[#ba816d]/20" />
        <div className="absolute bottom-[25%] right-[8%] w-[3vw] h-[3vw] max-w-[40px] max-h-[40px] rounded-full bg-[#ba816d]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#ba816d] mb-6">
            Design para o seu espaço
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-[#2B2B2B] leading-[1.05] tracking-tight mb-6">
            Transforme seu espaço com{" "}
            <em className="not-italic text-[#ba816d]">detalhes</em>{" "}
            que importam
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-[#2B2B2B]/60 leading-relaxed mb-10 max-w-lg">
            Design funcional para o dia a dia. Cada detalhe pensado
            para tornar sua casa mais bonita e organizada.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center gap-2 bg-[#2B2B2B] text-[#F7F5F2] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#ba816d] transition-colors duration-300"
            >
              Explorar coleção
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/produtos?niche=casa"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium text-[#2B2B2B] border border-[#2B2B2B]/20 hover:border-[#ba816d] hover:text-[#ba816d] transition-colors duration-300"
            >
              Casa & Decor
            </Link>
          </div>
        </div>

        {/* Floating label */}
        <div className="absolute bottom-12 right-8 hidden lg:flex items-center gap-3 text-[#2B2B2B]/40">
          <span className="text-xs tracking-widest uppercase">Rolar</span>
          <div className="w-px h-8 bg-[#2B2B2B]/20" />
        </div>
      </div>
    </section>
  );
}
