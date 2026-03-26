import { getVisibleProducts } from "@/lib/products";
import { AllProductsGrid } from "@/components/ui/AllProductsGrid";

export async function AllProducts() {
  const products = await getVisibleProducts();

  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-[red]" aria-labelledby="all-products-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          id="all-products-heading"
          className="font-sans text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-8"
        >
          Todos os produtos
        </h2>

        <AllProductsGrid products={products} pageSize={6} />
      </div>
    </section>
  );
}
