export type Platform = "shopee" | "mercadolivre" | "amazon" | "magalu";
export type ProductNiche = "casa" | "gamer";

export interface PlatformEntry {
  price: number;
  active: boolean;
  url?: string;
}

export interface ProductDimensions {
  widthMm: number;
  depthMm: number;
  heightMm: number;
}

export interface OctaverseProduct {
  id?: string;
  name: string;
  sku: string;
  description: string;
  category: string;
  niche?: ProductNiche;
  tags?: string[];
  photos: string[];
  weightGrams: number;
  dimensionsMm?: ProductDimensions;
  platforms: Partial<Record<Platform, PlatformEntry>>;
  active: boolean;
  visibleOnSite: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  niche?: ProductNiche;
}
