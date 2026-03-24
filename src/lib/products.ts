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

export async function getProductBySku(sku: string): Promise<OctaverseProduct | null> {
  try {
    const product = await sdkGetProductBySku(sku);
    return product as unknown as OctaverseProduct | null;
  } catch {
    return null;
  }
}
