import { getVisibleProducts } from "@/lib/products";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";

export const revalidate = 3600;

export default async function HomePage() {
  const featuredProducts = await getVisibleProducts();
  
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts products={featuredProducts} />
      <About />
      <Benefits />
      <CTA />
    </>
  );
}
