'use client'

import { useState } from "react";
import type { OctaverseProduct } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";

interface AllProductsGridProps {
  products: OctaverseProduct[];
  pageSize?: number;
}

export function AllProductsGrid({ products, pageSize = 6 }: AllProductsGridProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / pageSize);
  const start = page * pageSize;
  const visible = products.slice(start, start + pageSize);

  return (
    <div>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        aria-label="Produtos"
      >
        {visible.map((product) => (
          <li key={product.id ?? product.sku}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#2B2B2B] border border-[#2B2B2B]/20 hover:border-[#2B2B2B] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Página anterior"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Anterior
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i === page ? "bg-[#2B2B2B]" : "bg-[#2B2B2B]/20 hover:bg-[#2B2B2B]/50"
                }`}
                aria-label={`Página ${i + 1}`}
                aria-current={i === page ? "page" : undefined}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages - 1}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#2B2B2B] border border-[#2B2B2B]/20 hover:border-[#2B2B2B] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Próxima página"
          >
            Próximo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
