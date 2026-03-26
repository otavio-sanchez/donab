import Link from "next/link";
import { getCategories } from "@/lib/products";

const navLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Nossa história", href: "/sobre" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
];

export async function Footer() {
  const categories = await getCategories();
  return (
    <footer className="bg-[#1E1E1E] text-[#F7F5F2]" aria-label="Rodapé">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Col 1 — Brand */}
          <div>
            <p className="font-olive-citrus text-xl font-bold tracking-tight mb-2">Dona B.</p>
            <p className="text-sm text-[#F7F5F2]/50 leading-relaxed max-w-xs">
              Objetos com design e propósito para transformar os espaços do seu dia a dia.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-[#F7F5F2]/50 hover:text-[#F7F5F2] hover:bg-[#ba816d]/40 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Categorias */}
          {categories.length > 0 && (
            <nav aria-label="Categorias">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F7F5F2]/30 mb-5">
                Categorias
              </p>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={`/produtos?categoria=${cat.slug}`}
                      className="text-sm text-[#F7F5F2]/55 hover:text-[#F7F5F2] transition-colors"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Col 3 — Nav */}
          <nav aria-label="Links do site">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F7F5F2]/30 mb-5">
              Navegação
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F7F5F2]/55 hover:text-[#F7F5F2] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Marketplaces */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F7F5F2]/30 mb-5">
              Compre nos nossos parceiros
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://shopee.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 border border-white/10 hover:border-[#ba816d]/60 hover:bg-[#ba816d]/10 transition-colors group"
              >
                <span className="text-sm font-medium text-[#F7F5F2]/80 group-hover:text-[#F7F5F2]">Shopee</span>
                <svg className="w-4 h-4 text-[#F7F5F2]/30 group-hover:text-[#ba816d] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://mercadolivre.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 border border-white/10 hover:border-[#ba816d]/60 hover:bg-[#ba816d]/10 transition-colors group"
              >
                <span className="text-sm font-medium text-[#F7F5F2]/80 group-hover:text-[#F7F5F2]">Mercado Livre</span>
                <svg className="w-4 h-4 text-[#F7F5F2]/30 group-hover:text-[#ba816d] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <p className="text-[11px] text-[#F7F5F2]/25 mt-3">
              Compra segura • Entrega garantida
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#F7F5F2]/25">
            © {new Date().getFullYear()} Dona B — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
