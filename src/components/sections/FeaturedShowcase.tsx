import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts, getCategories } from "@/lib/products";
import { formatBRL, getDisplayPrice } from "@/lib/utils";

export async function FeaturedShowcase() {
  const [products, categories] = await Promise.all([
    getFeaturedProducts(3),
    getCategories(),
  ]);

  return (
    <section className="py-12 bg-[#ffffff]" aria-labelledby="showcase-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#ba816d] mb-1">
              Disponível nos nossos parceiros oficiais
            </p>
            <h2
              id="showcase-heading"
              className="font-sans text-3xl lg:text-4xl font-bold text-[#2B2B2B] shrink-0"
            >
              Peças em destaque
            </h2>
          </div>

          {categories.length > 0 && (
            <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/produtos?categoria=${cat.slug}`}
                  className="text-sm text-[#2B2B2B]/60 hover:text-[#2B2B2B] transition-colors whitespace-nowrap"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:h-[640px]">
            {/* Card grande — esquerda */}
            {products[0] && <ShowcaseCard product={products[0]} large />}

            {/* 2 cards pequenos — direita */}
            <div className="grid grid-rows-2 gap-2">
              {products[1] && <ShowcaseCard product={products[1]} />}
              {products[2] && <ShowcaseCard product={products[2]} />}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:h-[640px]">
            <div className="bg-[#E8E2D9] animate-pulse" />
            <div className="grid grid-rows-2 gap-2">
              <div className="bg-[#E8E2D9] animate-pulse" />
              <div className="bg-[#E8E2D9] animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ShowcaseCard({
  product,
  large = false,
}: {
  product: import("@/types").OctaverseProduct;
  large?: boolean;
}) {
  const price = getDisplayPrice(product);
  const photo = product.photos?.[0];
  const href = `/produtos/${product.sku}`;

  return (
    <Link
      href={href}
      className="group relative overflow-hidden block w-full h-64 lg:h-full"
    >
      {/* Imagem de fundo */}
      {photo ? (
        <Image
          src={photo}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-[#E8E2D9]" />
      )}

      {/* Gradiente inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/70 via-[#2B2B2B]/20 to-transparent" />

      {/* Texto */}
      <div className="absolute bottom-0 left-0 p-5 lg:p-6">
        {product.category && (
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1">
            {product.category}
          </p>
        )}
        <h3 className={`font-sans font-bold text-white leading-snug ${large ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"}`}>
          {product.name}
        </h3>
        {price !== null && (
          <p className="text-sm text-white/80 mt-1">{formatBRL(price)}</p>
        )}
        <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-white border border-white/40 rounded-full px-4 py-1.5 group-hover:bg-white group-hover:text-[#2B2B2B] transition-colors duration-300">
          Ver oferta
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
