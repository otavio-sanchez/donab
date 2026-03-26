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

      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#ba816d] hover:text-[#2B2B2B] transition-colors border border-[#ba816d] hover:border-[#2B2B2B] px-3 py-1.5 rounded-full"
          aria-label={`Comprar ${product.name}`}
        >
          Comprar
        </a>
      )}
    </article>
  );
}
