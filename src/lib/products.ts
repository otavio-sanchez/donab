import { sdkReady } from "@/lib/sdk";
import {
  getVisibleProducts as sdkGetVisibleProducts,
  getProductBySku as sdkGetProductBySku,
  getCategories as sdkGetCategories,
} from "@octaverse-sdk/node";
import type { OctaverseProduct } from "@/types";

export async function getVisibleProducts(): Promise<OctaverseProduct[]> {
  try {
    await sdkReady;
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
    await sdkReady;
    const [productResult, categoriesResult] = await Promise.allSettled([
      sdkGetProductBySku(sku),
      sdkGetCategories(),
    ]);

    if (productResult.status === "rejected" || !productResult.value) return null;

    const product = productResult.value;
    const sdkCategories = categoriesResult.status === "fulfilled" ? categoriesResult.value : [];

    const categoryMatch = sdkCategories.find(
      (c) => c.id === product.category || c.name === product.category
    );
    const resolved = {
      ...product,
      category: categoryMatch?.name ?? product.category,
    };

    return resolved as unknown as OctaverseProduct;
  } catch {
    return null;
  }
}
