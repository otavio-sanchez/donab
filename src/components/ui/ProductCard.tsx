import Image from "next/image";
import Link from "next/link";
import type { OctaverseProduct } from "@/types";
import { formatBRL, getDisplayPrice, getPlatformInfo } from "@/lib/utils";

interface ProductCardProps {
  product: OctaverseProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const price = getDisplayPrice(product);
  const platform = getPlatformInfo(product);
  const photo = product.photos?.[0];
  const href = `/produtos/${product.sku}`;

  return (
    <article className="group">
      <Link href={href} className="block overflow-hidden bg-[#E8E2D9] aspect-square relative">
        {photo ? (
          <Image
            src={photo}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#ba816d]/30" />
          </div>
        )}

        {/* Gradiente + título sobre a imagem */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/70 via-[#2B2B2B]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="font-sans text-base font-bold text-white leading-snug">
            {product.name}
          </h3>
          {price !== null ? (
            <p className="text-sm text-white/80 mt-0.5">{formatBRL(price)}</p>
          ) : (
            <p className="text-sm text-white/50 mt-0.5">Sob consulta</p>
          )}
        </div>
      </Link>

      {platform && (
        <div className="mt-3 flex items-center justify-between gap-3">
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#2B2B2B] hover:bg-[#ba816d] transition-colors px-4 py-2 rounded-full"
            aria-label={`Comprar ${product.name} na ${platform.label}`}
          >
            Ver na {platform.label}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <span className="text-[10px] text-[#2B2B2B]/40 shrink-0">Compra segura</span>
        </div>
      )}
    </article>
  );
}
