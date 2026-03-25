import Link from "next/link";
import type { OctaverseProduct } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";

interface FeaturedProductsProps {
  products: OctaverseProduct[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#ba816d] mb-3">
              Em destaque
            </p>
            <h2
              id="featured-heading"
              className="font-sans text-4xl lg:text-5xl font-bold text-[#2B2B2B]"
            >
              Nossos favoritos
            </h2>
          </div>
          <Link
            href="/produtos"
            className="text-sm text-[#2B2B2B]/60 hover:text-[#2B2B2B] transition-colors flex items-center gap-2 shrink-0"
          >
            Ver coleção completa
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Products grid */}
        {products.length > 0 ? (
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            aria-label="Produtos em destaque"
          >
            {products.map((product) => (
              <li key={product.id ?? product.sku}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          /* Placeholder grid when no products yet */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="aspect-square bg-[#E8E2D9] animate-pulse" />
                <div className="space-y-2">
                  <div className="h-5 rounded bg-[#E8E2D9] animate-pulse w-3/4" />
                  <div className="h-4 rounded bg-[#E8E2D9] animate-pulse w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
