import type { OctaverseProduct, Platform, PlatformEntry } from "@/types";

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function getDisplayPrice(product: OctaverseProduct): number | null {
  const entries = Object.values(product.platforms) as (PlatformEntry | undefined)[];
  const prices = entries
    .filter((p): p is PlatformEntry => !!p && p.active && p.price > 0)
    .map((p) => p.price);
  if (prices.length === 0) return null;
  return Math.min(...prices);
}

export function getPlatformUrl(product: OctaverseProduct): string | null {
  const priority: Platform[] = ["shopee", "mercadolivre", "amazon", "magalu"];
  for (const platform of priority) {
    const entry = product.platforms[platform];
    if (entry?.active && entry.url) return entry.url;
  }
  return null;
}

const PLATFORM_LABELS: Record<Platform, string> = {
  shopee: "Shopee",
  mercadolivre: "Mercado Livre",
  amazon: "Amazon",
  magalu: "Magazine Luiza",
};

export function getPlatformInfo(product: OctaverseProduct): { url: string; label: string } | null {
  const priority: Platform[] = ["shopee", "mercadolivre", "amazon", "magalu"];
  for (const platform of priority) {
    const entry = product.platforms[platform];
    if (entry?.active && entry.url) return { url: entry.url, label: PLATFORM_LABELS[platform] };
  }
  return null;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
