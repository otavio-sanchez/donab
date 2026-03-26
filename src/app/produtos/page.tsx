import type { Metadata } from "next";
import { getVisibleProducts, getCategories } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const revalidate = 3600;

interface Props {
  searchParams: Promise<{ categoria?: string; q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { categoria } = await searchParams;
  const title = categoria ?? "Todos os Produtos";
  return {
    title,
    description: `Explore nossa coleção de ${title.toLowerCase()} — design minimalista e funcional.`,
    alternates: { canonical: "/produtos" },
  };
}

export default async function ProdutosPage({ searchParams }: Props) {
  const { categoria, q: query } = await searchParams;

  const [allProducts, categories] = await Promise.all([
    getVisibleProducts(),
    getCategories(),
  ]);

  let products = allProducts;

  if (categoria) {
    products = products.filter((p) =>
      p.category?.toLowerCase() === decodeURIComponent(categoria).toLowerCase()
    );
  }
  if (query) {
    const q = query.toLowerCase();
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }

  const title = categoria ? decodeURIComponent(categoria) : "Todos os Produtos";

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Page header */}
      <div className="bg-[#E8E2D9] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-10 lg:px-16">
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#ba816d] mb-3">
            Coleção
          </p>
          <h1 className="font-sans text-5xl lg:text-6xl font-bold text-[#2B2B2B]">
            {title}
          </h1>
          <p className="font-sans mt-4 text-sm text-[#2B2B2B]/50">
            {products.length} {products.length === 1 ? "produto" : "produtos"}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 lg:top-20 z-30 bg-[#F7F5F2]/95 backdrop-blur-sm border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-10 lg:px-16">
          <div className="flex gap-2 py-4 overflow-x-auto no-scrollbar">
            {[{ label: "Todos", slug: null }, ...categories.map((c) => ({ label: c.name, slug: c.slug }))].map((filter) => {
              const isActive = filter.slug === null ? !categoria : decodeURIComponent(categoria ?? "") === filter.label;
              return (
                <a
                  key={filter.label}
                  href={filter.slug ? `/produtos?categoria=${filter.slug}` : "/produtos"}
                  className={`font-sans shrink-0 px-4 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-[#2B2B2B] text-[#F7F5F2]"
                      : "text-[#2B2B2B]/60 hover:text-[#2B2B2B] border border-[#2B2B2B]/15 hover:border-[#2B2B2B]/40"
                  }`}
                >
                  {filter.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-10 lg:px-16 py-16">
        {products.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <li key={product.id ?? product.sku}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-[#E8E2D9] mx-auto mb-4 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#2B2B2B]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <p className="font-sans text-xl text-[#2B2B2B]/50">Nenhum produto encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
