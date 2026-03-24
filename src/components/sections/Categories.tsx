import Link from "next/link";

const categories = [
  {
    slug: "casa",
    name: "Casa & Decor",
    description: "Vasos, objetos e peças que transformam qualquer ambiente em algo especial.",
    href: "/produtos?niche=casa",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    slug: "organizacao",
    name: "Organização",
    description: "Soluções elegantes que mantêm sua casa em ordem sem abrir mão do estilo.",
    href: "/produtos?categoria=organizacao",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    slug: "iluminacao",
    name: "Iluminação",
    description: "Luminárias que definem a atmosfera certa para cada momento do dia.",
    href: "/produtos?categoria=iluminacao",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    slug: "gamer",
    name: "Setup & Gamer",
    description: "Acessórios minimalistas e estéticos para transformar seu setup em obra de arte.",
    href: "/produtos?niche=gamer",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
];

export function Categories() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F5F2]" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#ba816d] mb-3">
              Categorias
            </p>
            <h2
              id="categories-heading"
              className="font-serif text-4xl lg:text-5xl font-bold text-[#2B2B2B]"
            >
              O que você procura?
            </h2>
          </div>
          <Link
            href="/produtos"
            className="text-sm text-[#2B2B2B]/60 hover:text-[#2B2B2B] transition-colors flex items-center gap-2 shrink-0"
          >
            Ver todos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className="group flex flex-col p-7 bg-[#E8E2D9] hover:bg-[#ba816d]/20 border border-transparent hover:border-[#ba816d]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#F7F5F2] flex items-center justify-center text-[#2B2B2B] mb-5 group-hover:bg-[#ba816d] group-hover:text-white transition-colors duration-300">
                {cat.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2B2B2B] mb-2">
                {cat.name}
              </h3>
              <p className="text-sm text-[#2B2B2B]/60 leading-relaxed flex-1">
                {cat.description}
              </p>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-[#2B2B2B]/40 group-hover:text-[#ba816d] transition-colors">
                Explorar
                <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
