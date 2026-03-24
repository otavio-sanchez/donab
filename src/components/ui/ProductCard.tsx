import Image from "next/image";
import Link from "next/link";
import type { OctaverseProduct } from "@/types";
import { formatBRL, getDisplayPrice, getPlatformUrl } from "@/lib/utils";

interface ProductCardProps {
  product: OctaverseProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const price = getDisplayPrice(product);
  const externalUrl = getPlatformUrl(product);
  const photo = product.photos?.[0];
  const href = `/produtos/${product.sku}`;

  return (
    <article className="group flex flex-col">
      <Link href={href} className="block overflow-hidden bg-[#E8E2D9] aspect-square relative mb-4">
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

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#2B2B2B]/0 group-hover:bg-[#2B2B2B]/10 transition-colors duration-300" />
      </Link>

      <div className="flex flex-col flex-1">
        <Link href={href} className="group/title">
          <h3 className="font-serif text-lg font-semibold text-[#2B2B2B] leading-snug group-hover/title:text-[#ba816d] transition-colors">
            {product.name}
          </h3>
        </Link>

        {product.description && (
          <p className="mt-1 text-sm text-[#2B2B2B]/60 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          {price !== null ? (
            <span className="text-base font-semibold text-[#2B2B2B]">
              {formatBRL(price)}
            </span>
          ) : (
            <span className="text-sm text-[#2B2B2B]/40">Sob consulta</span>
          )}

          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#ba816d] hover:text-[#2B2B2B] transition-colors border border-[#ba816d] hover:border-[#2B2B2B] px-3 py-1.5 rounded-full"
              aria-label={`Comprar ${product.name}`}
            >
              Comprar
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
