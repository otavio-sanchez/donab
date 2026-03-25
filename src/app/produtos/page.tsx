import type { Metadata } from "next";
import { getVisibleProducts } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";
import type { ProductNiche } from "@/types";

export const revalidate = 3600;

interface Props {
  searchParams: Promise<{ niche?: string; categoria?: string; q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const niche = params.niche as ProductNiche | undefined;
  const title = niche === "gamer"
    ? "Setup & Gamer"
    : niche === "casa"
    ? "Casa & Decor"
    : "Todos os Produtos";

  return {
    title,
    description: `Explore nossa coleção de produtos de ${title.toLowerCase()} — design minimalista e funcional.`,
    alternates: { canonical: "/produtos" },
  };
}

export default async function ProdutosPage({ searchParams }: Props) {
  const params = await searchParams;
  const niche = params.niche as ProductNiche | undefined;
  const categoria = params.categoria;
  const query = params.q?.toLowerCase();

  let products = await getVisibleProducts();

  if (niche) {
    products = products.filter((p) => p.niche === niche);
  }
  if (categoria) {
    products = products.filter((p) =>
      p.category?.toLowerCase().includes(categoria.toLowerCase())
    );
  }
  if (query) {
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query) ||
        p.tags?.some((t) => t.toLowerCase().includes(query))
    );
  }

  const title = niche === "gamer"
    ? "Setup & Gamer"
    : niche === "casa"
    ? "Casa & Decor"
    : "Todos os Produtos";

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Page header */}
      <div className="bg-[#E8E2D9] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8B6E2] mb-3">
            Coleção
          </p>
          <h1 className="font-sans text-5xl lg:text-6xl font-bold text-[#2B2B2B]">
            {title}
          </h1>
          <p className="mt-4 text-[#2B2B2B]/60">
            {products.length} {products.length === 1 ? "produto" : "produtos"}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 lg:top-20 z-30 bg-[#F7F5F2]/95 backdrop-blur-sm border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {[
              { label: "Todos", href: "/produtos" },
              { label: "Casa & Decor", href: "/produtos?niche=casa" },
              { label: "Setup & Gamer", href: "/produtos?niche=gamer" },
            ].map((filter) => {
              const isActive =
                filter.href === "/produtos"
                  ? !niche
                  : filter.href.includes(niche ?? "");
              return (
                <a
                  key={filter.href}
                  href={filter.href}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-sm transition-colors ${
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {products.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <li key={product.id ?? product.sku}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-full bg-[#E8E2D9] mx-auto mb-4 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#2B2B2B]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <p className="font-sans text-xl text-[#2B2B2B]/50">
              Nenhum produto encontrado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
