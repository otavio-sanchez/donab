import Link from "next/link";

const serviceLinks = [
  {
    label: "Atendimento",
    href: "/atendimento",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    label: "Trocas e devoluções",
    href: "/trocas",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    label: "Acompanhe seus pedidos",
    href: "/pedidos",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    label: "Fale pelo chat",
    href: "/chat",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Chat Online",
    href: "/chat",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    label: "Nossas redes",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const paymentMethods = [
  { label: "Pix", bg: "#32BCAD" },
  { label: "Visa", bg: "#1A1F71" },
  { label: "Master", bg: "#EB001B" },
  { label: "Boleto", bg: "#555" },
];

const navCol1 = [
  { label: "Sobre a Dona B", href: "/sobre" },
  { label: "Privacidade", href: "/privacidade" },
  { label: "Frete e entrega", href: "/frete" },
  { label: "Promoções", href: "/produtos?ordem=promocao" },
];

const navCol2 = [
  { label: "Todos os produtos", href: "/produtos" },
  { label: "Casa & Decor", href: "/produtos?niche=casa" },
  { label: "Setup & Gamer", href: "/produtos?niche=gamer" },
  { label: "Parcerias", href: "/parcerias" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-[#F7F5F2]" aria-label="Rodapé">
      {/* Main footer body */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-10 lg:gap-8">

          {/* Col 1 — Service links */}
          <div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#F7F5F2]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ba816d]/30 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-xs text-[#F7F5F2]/70 group-hover:text-[#F7F5F2] transition-colors leading-snug">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Payment methods */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F7F5F2]/40 mb-4">
              Formas de pagamento
            </p>
            <div className="flex flex-wrap gap-2">
              {/* PIX */}
              <div className="bg-[#F7F5F2]/10 rounded-lg px-3 py-2 flex items-center gap-1.5 border border-[#F7F5F2]/10">
                <svg className="w-4 h-4 text-[#32BCAD]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.644 2.007A5.956 5.956 0 008.22 3.24L5.14 6.32a.512.512 0 01-.356.144H3.248a3.25 3.25 0 00-3.25 3.25v4.773a3.25 3.25 0 003.25 3.25h1.535c.134 0 .262.053.357.147l3.08 3.08a5.956 5.956 0 008.155 0l3.08-3.08a.505.505 0 01.357-.147h1.535a3.25 3.25 0 003.25-3.25V9.714a3.25 3.25 0 00-3.25-3.25h-1.535a.505.505 0 01-.357-.147l-3.08-3.08a5.956 5.956 0 00-3.531-1.23z"/>
                </svg>
                <span className="text-xs font-bold text-[#32BCAD]">PIX</span>
              </div>
              {/* Visa */}
              <div className="bg-[#F7F5F2]/10 rounded-lg px-3 py-2 border border-[#F7F5F2]/10">
                <span className="text-xs font-bold italic text-blue-400 tracking-wider">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="bg-[#F7F5F2]/10 rounded-lg px-3 py-2 border border-[#F7F5F2]/10 flex items-center gap-0.5">
                <span className="w-4 h-4 rounded-full bg-[#EB001B] opacity-90 block" />
                <span className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90 block -ml-2" />
              </div>
              {/* Amex */}
              <div className="bg-[#F7F5F2]/10 rounded-lg px-3 py-2 border border-[#F7F5F2]/10">
                <span className="text-[10px] font-bold text-[#F7F5F2]/70">AMEX</span>
              </div>
              {/* Elo */}
              <div className="bg-[#F7F5F2]/10 rounded-lg px-3 py-2 border border-[#F7F5F2]/10">
                <span className="text-[10px] font-bold text-[#FFD100]">elo</span>
              </div>
              {/* Boleto */}
              <div className="bg-[#F7F5F2]/10 rounded-lg px-3 py-2 border border-[#F7F5F2]/10 flex items-center gap-1">
                <svg className="w-4 h-4 text-[#F7F5F2]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75z" />
                </svg>
                <span className="text-[10px] font-medium text-[#F7F5F2]/60">Boleto</span>
              </div>
            </div>
          </div>

          {/* Col 3 — Nav links (2 sub-columns) */}
          <nav aria-label="Links institucionais" className="grid grid-cols-2 gap-x-8 gap-y-0">
            <ul className="space-y-3">
              {navCol1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F7F5F2]/65 hover:text-[#F7F5F2] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {navCol2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F7F5F2]/65 hover:text-[#F7F5F2] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4 — Social */}
          <div className="min-w-[140px]">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F7F5F2]/40 mb-5">
              Siga a Dona B
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#F7F5F2]/10 flex items-center justify-center text-[#F7F5F2]/60 hover:bg-[#ba816d]/30 hover:text-[#F7F5F2] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F7F5F2]/10 bg-[#1E1E1E]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <nav aria-label="Links legais">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "Privacidade e segurança", href: "/privacidade" },
                { label: "Termos de uso", href: "/termos" },
                { label: "Regulamentos", href: "/regulamentos" },
                { label: "Trabalhe conosco", href: "/trabalhe" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#F7F5F2]/40 hover:text-[#F7F5F2]/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-[#F7F5F2]/30 shrink-0">
            © {new Date().getFullYear()} Dona B
          </p>
        </div>
      </div>
    </footer>
  );
}
