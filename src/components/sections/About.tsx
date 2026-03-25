export function About() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#F7F5F2] overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative" aria-hidden="true">
            <div className="aspect-[4/5] bg-[#E8E2D9] relative overflow-hidden">
              {/* Decorative content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                <div className="w-28 h-28 rounded-full bg-[#ba816d]/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ba816d]/50" />
                </div>
                <div className="w-full max-w-[200px] space-y-3">
                  <div className="h-2 rounded-full bg-[#ba816d]/40" />
                  <div className="h-2 rounded-full bg-[#ba816d]/25 w-4/5" />
                  <div className="h-2 rounded-full bg-[#ba816d]/40 w-3/5" />
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                <span className="font-sans text-2xl font-bold text-[#ba816d]">B</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-5">
              <p className="text-xs text-[#2B2B2B]/50 font-medium mb-1">Produtos únicos</p>
              <p className="font-sans text-3xl font-bold text-[#2B2B2B]">100%</p>
              <p className="text-xs text-[#ba816d] font-medium">Funcionais & bonitos</p>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#ba816d] mb-4">
              Nossa história
            </p>
            <h2
              id="about-heading"
              className="font-sans text-4xl lg:text-5xl font-bold text-[#2B2B2B] leading-tight mb-6"
            >
              Criada para transformar espaços comuns em lugares especiais
            </h2>
            <div className="space-y-4 text-[#2B2B2B]/65 leading-relaxed">
              <p>
                A Dona B nasceu para trazer simplicidade, beleza e funcionalidade
                para os espaços do dia a dia. Acreditamos que cada objeto que você escolhe
                para sua casa diz algo sobre quem você é.
              </p>
              <p>
                Cada peça nasce de uma ideia simples: por que não pode ser bonito
                e funcional ao mesmo tempo? Nossos produtos são pensados para
                quem valoriza a estética do dia a dia, sem abrir mão da praticidade.
              </p>
              <p>
                Do vaso minimalista ao suporte para o seu setup, a Dona B está
                nos detalhes que fazem você sorrir toda vez que olha para o seu espaço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
