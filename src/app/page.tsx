import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { FeaturedShowcase } from "@/components/sections/FeaturedShowcase";
import { AllProducts } from "@/components/sections/AllProducts";
import { Benefits } from "@/components/sections/Benefits";

export const revalidate = 3600;

export default async function HomePage() {

  const mainst = true
  
  if (mainst) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Estamos em manutenção. Voltamos em breve!</h1>
      </div>
    );
  }

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
