import Link from "next/link";

const categories = [
  {
    slug: "casa",
    name: "Casa & Decor",
    href: "/produtos?niche=casa",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
      </svg>
    ),
  },
  {
    slug: "organizacao",
    name: "Organização",
    href: "/produtos?categoria=organizacao",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    slug: "iluminacao",
    name: "Iluminação",
    href: "/produtos?categoria=iluminacao",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    slug: "gamer",
    name: "Setup & Gamer",
    href: "/produtos?niche=gamer",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    slug: "texteis",
    name: "Têxteis",
    href: "/produtos?categoria=texteis",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    slug: "jardim",
    name: "Jardim",
    href: "/produtos?categoria=jardim",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-[#F7F5F2] border-t border-[#2B2B2B]/8" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-12 lg:gap-20">

          {/* Label + título */}
          <div className="shrink-0 w-40">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ba816d] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ba816d] inline-block" />
              Em destaque
            </p>
            <h2
              id="categories-heading"
              className="font-sans text-2xl font-bold text-[#2B2B2B] leading-tight"
            >
              Categorias em destaque
            </h2>
          </div>

          {/* Divisor vertical */}
          <div className="w-px h-16 bg-[#2B2B2B]/15 shrink-0" />

          {/* Categorias em linha */}
          <div className="flex items-center gap-8 lg:gap-12 overflow-x-auto no-scrollbar flex-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.href}
                className="group flex flex-col items-center gap-3 shrink-0"
              >
                <div className="w-16 h-16 border border-[#2B2B2B]/15 flex items-center justify-center text-[#2B2B2B]/60 group-hover:border-[#ba816d] group-hover:text-[#ba816d] transition-colors duration-300">
                  {cat.icon}
                </div>
                <span className="text-xs text-[#2B2B2B]/60 group-hover:text-[#2B2B2B] transition-colors duration-300 whitespace-nowrap">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
