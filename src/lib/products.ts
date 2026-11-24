import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { getStoreDB } from "@/lib/store-db";
import type { OctaverseProduct } from "@/types";

const STORE_ID = "donab";

function productsCollection() {
  return collection(getStoreDB(), "stores", STORE_ID, "publicProducts");
}

export async function getVisibleProducts(): Promise<OctaverseProduct[]> {
  try {
    const products = query(
      productsCollection(),
      orderBy("name"),
    );
    const snapshot = await getDocs(products);
    return snapshot.docs.map((document) => ({ id: document.id, ...document.data() } as OctaverseProduct));
  } catch (error) {
    console.error("[Dona B] Falha ao carregar produtos:", error);
    return [];
  }
}

export async function getFeaturedProducts(limitCount = 6): Promise<OctaverseProduct[]> {
  const all = await getVisibleProducts();
  return all.slice(0, limitCount);
}

export async function getCategories(): Promise<{ slug: string; name: string; count: number }[]> {
  const products = await getVisibleProducts();
  const counts = new Map<string, number>();
  for (const product of products) {
    if (product.category) counts.set(product.category, (counts.get(product.category) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ slug: encodeURIComponent(name), name, count }));
}

export async function getProductBySku(sku: string): Promise<OctaverseProduct | null> {
  try {
    const products = query(
      productsCollection(),
      where("sku", "==", sku),
      limit(1),
    );
    const snapshot = await getDocs(products);
    if (snapshot.empty) return null;
    const document = snapshot.docs[0];
    const product = { id: document.id, ...document.data() } as OctaverseProduct;
    const categories = query(
      collection(getStoreDB(), "stores", STORE_ID, "productCategories"),
      where("active", "==", true),
    );
    const categorySnapshot = await getDocs(categories);
    const category = categorySnapshot.docs.find(
      (item) => item.id === product.category || item.data().name === product.category,
    );
    return { ...product, category: category?.data().name ?? product.category };
  } catch (error) {
    console.error("[Dona B] Falha ao carregar produto:", error);
    return null;
  }
}
