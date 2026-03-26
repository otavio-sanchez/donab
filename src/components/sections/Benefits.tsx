const benefits = [
  {
    title: "Qualidade que dura",
    description: "Materiais selecionados para resistir ao uso diário sem perder a elegância.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25S3 16.556 3 12 7.03 3.75 12 3.75 21 7.444 21 12z" />
      </svg>
    ),
  },
  {
    title: "Estilo único",
    description: "Design exclusivo que combina minimalismo, função e personalidade.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Feito com propósito",
    description: "Cada peça resolve um problema real — beleza e praticidade juntos.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Estética atemporal",
    description: "Peças que não saem de moda e elevam qualquer ambiente.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export function Benefits() {
  return (
    <div className="border-t border-b border-[#2B2B2B]/10 bg-white">
      <ul className="max-w-7xl mx-auto divide-x divide-[#2B2B2B]/10 grid grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <li key={b.title} className="flex items-center gap-4 px-6 lg:px-10 py-7">
            <span className="text-[#2B2B2B]/50 shrink-0">{b.icon}</span>
            <div>
              <p className="font-sans text-sm font-semibold text-[#2B2B2B]">{b.title}</p>
              <p className="text-xs text-[#2B2B2B]/50 mt-0.5">{b.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
