import Link from "next/link";
import { getCategories } from "@/lib/products";

const CATEGORY_META: Record<string, React.ReactNode> = {
  "Decoração": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    </svg>
  ),
  "Peça de Design": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
};

const DEFAULT_ICON = (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

export async function Categories() {
  const categories = await getCategories();

  if (categories.length === 0) return null;

  return (
    <section className="py-16 bg-[#F7F5F2] border-t border-[#2B2B2B]/8" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-12 lg:gap-20">

          {/* Label + título */}
          <div className="shrink-0 w-40">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#ba816d] mb-3">
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
                key={cat.name}
                href={`/produtos?categoria=${cat.slug}`}
                className="group flex flex-col items-center gap-3 shrink-0"
              >
                <div className="w-16 h-16 border border-[#2B2B2B]/15 flex items-center justify-center text-[#2B2B2B]/60 group-hover:border-[#ba816d] group-hover:text-[#ba816d] transition-colors duration-300">
                  {CATEGORY_META[cat.name] ?? DEFAULT_ICON}
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
