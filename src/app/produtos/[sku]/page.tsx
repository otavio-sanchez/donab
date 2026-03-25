import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySku, getVisibleProducts } from "@/lib/products";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema, breadcrumbSchema } from "@/lib/jsonld";
import { formatBRL, getDisplayPrice, getPlatformUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ sku: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const products = await getVisibleProducts();
  return products.map((p) => ({ sku: p.sku }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sku } = await params;
  const product = await getProductBySku(sku);
  if (!product) return { title: "Produto não encontrado" };

  const price = getDisplayPrice(product);
  const description = product.description
    ? product.description.slice(0, 155)
    : `${product.name} — design funcional e minimalista da Dona B.`;

  return {
    title: product.name,
    description,
    openGraph: {
      title: product.name,
      description,
      images: product.photos?.[0]
        ? [{ url: product.photos[0], alt: product.name }]
        : [],
    },
    ...(price !== null && {
      other: {
        "product:price:amount": price.toFixed(2),
        "product:price:currency": "BRL",
      },
    }),
  };
}

export default async function ProductPage({ params }: Props) {
  const { sku } = await params;
  const product = await getProductBySku(sku);
  if (!product) notFound();

  const price = getDisplayPrice(product);
  const externalUrl = getPlatformUrl(product);
  const photos = product.photos ?? [];

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://donab.com.br";

  return (
    <>
      <JsonLd schema={productSchema(product)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", url: BASE_URL },
          { name: "Produtos", url: `${BASE_URL}/produtos` },
          { name: product.name, url: `${BASE_URL}/produtos/${product.sku}` },
        ])}
      />

      <div className="min-h-screen bg-[#F7F5F2] pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-[#2B2B2B]/50">
              <li><Link href="/" className="hover:text-[#2B2B2B] transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/produtos" className="hover:text-[#2B2B2B] transition-colors">Produtos</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#2B2B2B] font-medium truncate max-w-[200px]">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Images */}
            <div className="space-y-4">
              {photos.length > 0 ? (
                <>
                  <div className="aspect-square rounded-3xl overflow-hidden bg-[#E8E2D9] relative">
                    <Image
                      src={photos[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  {photos.length > 1 && (
                    <div className="grid grid-cols-4 gap-3">
                      {photos.slice(1, 5).map((photo, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-xl overflow-hidden bg-[#E8E2D9] relative"
                        >
                          <Image
                            src={photo}
                            alt={`${product.name} — foto ${i + 2}`}
                            fill
                            sizes="25vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-square rounded-3xl bg-[#E8E2D9] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#C8B6E2]/30" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lg:pt-4">
              {product.category && (
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8B6E2] mb-3">
                  {product.category}
                </p>
              )}

              <h1 className="font-sans text-4xl lg:text-5xl font-bold text-[#2B2B2B] leading-tight mb-4">
                {product.name}
              </h1>

              {price !== null && (
                <p className="text-3xl font-semibold text-[#2B2B2B] mb-6">
                  {formatBRL(price)}
                </p>
              )}

              {product.description && (
                <p className="text-[#2B2B2B]/65 leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {/* Specs */}
              {(product.dimensionsMm || product.weightGrams > 0) && (
                <dl className="grid grid-cols-2 gap-4 mb-8 p-5 rounded-2xl bg-[#E8E2D9]">
                  {product.dimensionsMm && (
                    <>
                      <div>
                        <dt className="text-xs text-[#2B2B2B]/50 mb-1">Dimensões</dt>
                        <dd className="text-sm font-medium text-[#2B2B2B]">
                          {product.dimensionsMm.widthMm} ×{" "}
                          {product.dimensionsMm.depthMm} ×{" "}
                          {product.dimensionsMm.heightMm} mm
                        </dd>
                      </div>
                    </>
                  )}
                  {product.weightGrams > 0 && (
                    <div>
                      <dt className="text-xs text-[#2B2B2B]/50 mb-1">Peso</dt>
                      <dd className="text-sm font-medium text-[#2B2B2B]">
                        {product.weightGrams}g
                      </dd>
                    </div>
                  )}
                  {product.sku && (
                    <div>
                      <dt className="text-xs text-[#2B2B2B]/50 mb-1">SKU</dt>
                      <dd className="text-sm font-mono font-medium text-[#2B2B2B]">
                        {product.sku}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-[#E8E2D9] text-[#2B2B2B]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              {externalUrl ? (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#2B2B2B] text-[#F7F5F2] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#C8B6E2] transition-colors duration-300"
                >
                  Comprar agora
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ) : (
                <p className="text-sm text-[#2B2B2B]/50 text-center py-4">
                  Entre em contato para mais informações.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
