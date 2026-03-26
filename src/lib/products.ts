import "@/lib/sdk";
import {
  getVisibleProducts as sdkGetVisibleProducts,
  getProductBySku as sdkGetProductBySku,
} from "@octaverse-sdk/node";
import type { OctaverseProduct } from "@/types";

export async function getVisibleProducts(): Promise<OctaverseProduct[]> {
  try {
    const products = await sdkGetVisibleProducts();
    return products as unknown as OctaverseProduct[];
  } catch {
    return [];
  }
}

export async function getFeaturedProducts(limit = 6): Promise<OctaverseProduct[]> {
  const all = await getVisibleProducts();
  return all.slice(0, limit);
}

export async function getCategories(): Promise<{ slug: string; name: string; count: number }[]> {
  const products = await getVisibleProducts();
  const map = new Map<string, number>();
  for (const p of products) {
    if (p.category) map.set(p.category, (map.get(p.category) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({
      slug: encodeURIComponent(name),
      name,
      count,
    }));
}

export async function getProductBySku(sku: string): Promise<OctaverseProduct | null> {
  try {
    const product = await sdkGetProductBySku(sku);
    return product as unknown as OctaverseProduct | null;
  } catch {
    return null;
  }
}
