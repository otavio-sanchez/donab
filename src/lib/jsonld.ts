import type { OctaverseProduct } from "@/types";
import { getDisplayPrice } from "./utils";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://donab.com.br";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dona B",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Loja de decoração e organização para casa com produtos minimalistas e funcionais.",
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dona B",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/produtos?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function productSchema(product: OctaverseProduct) {
  const price = getDisplayPrice(product);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.photos,
    sku: product.sku,
    brand: { "@type": "Brand", name: "Dona B" },
    ...(price !== null && {
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/produtos/${product.sku}`,
        priceCurrency: "BRL",
        price: price.toFixed(2),
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Dona B" },
      },
    }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
