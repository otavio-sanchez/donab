import Link from "next/link";

export function CTA() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#2B2B2B] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-[#ba816d]/10 blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[400px] rounded-full bg-[#ba816d]/5 blur-2xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#ba816d] mb-5">
          Comece agora
        </p>
        <h2
          id="cta-heading"
          className="font-serif text-5xl lg:text-7xl font-bold text-[#F7F5F2] leading-tight mb-6"
        >
          Seu espaço,{" "}
          <em className="not-italic text-[#ba816d]">do seu jeito</em>
        </h2>
        <p className="text-lg text-[#F7F5F2]/60 leading-relaxed mb-10 max-w-lg mx-auto">
          Descubra produtos que transformam qualquer cantinho em um espaço que
          reflete quem você é.
        </p>
        <Link
          href="/produtos"
          className="inline-flex items-center gap-3 bg-[#ba816d] text-[#2B2B2B] px-10 py-4 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-300"
        >
          Ver produtos
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
