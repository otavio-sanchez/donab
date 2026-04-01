import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { FeaturedShowcase } from "@/components/sections/FeaturedShowcase";
import { AllProducts } from "@/components/sections/AllProducts";
import { Benefits } from "@/components/sections/Benefits";

export const revalidate = 3600;

export default async function HomePage() {


  return (
    <>
      <Hero />
      <FeaturedShowcase />
      <AllProducts />
    
      <Categories />
        <Benefits />
    </>
  );
}
