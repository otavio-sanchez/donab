import Link from "next/link";
import { getCategories } from "@/lib/products";

const CATEGORY_META: Record<string, React.ReactNode> = {
  "Decoração": (
     <img src="/slides/vaso_1.png" alt="Ícone de decoração" className="w-10 h-10" />
  ),
  "Peça de Design": (
    <img src="/slides/vaso_2.png" alt="Ícone de decoração" className="w-10 h-10" />
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
    <section className="py-16 bg-[#ffffff] border-t border-[#2B2B2B]/8" aria-labelledby="categories-heading">
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

          {/* Categorias em linha */}
          <div className="flex items-center gap-8 lg:gap-12 overflow-x-auto no-scrollbar flex-1">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/produtos?categoria=${cat.slug}`}
                className="group flex flex-col items-center gap-3 shrink-0"
              >
                <div className="w-16 h-16 flex items-center justify-center text-[#2B2B2B]/60 group-hover:border-[#ba816d] group-hover:text-[#ba816d] transition-colors duration-300">
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
