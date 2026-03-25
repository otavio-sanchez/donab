import { Slider } from "@/app/components/slider";
import Link from "next/link";

export function Hero() {
  return (
   <Slider

      slides={[
        {
          id: 1,
          title: "Bem-vindo à Dona B",
          description: "Decoração e Organização para sua Casa",
          ctaText: "Explore nossa coleção",
          ctaLink: "/produtos",
          backgroundColor: "#F7F5F2",
          imageUrl: "/vaso.png",
        },
        {
          id: 2,
          title: "Transforme seu Espaço",
          description: "Vasos, itens de decoração e organização para cada ambiente",
          ctaText: "Veja nossos produtos",
          ctaLink: "/produtos",
          backgroundColor: "red",
             imageUrl: "/vaso.png",
        },
        {
          id: 3,
          title: "Design Minimalista e Funcional",
          description: "Peças que unem beleza e praticidade para o dia a dia",
          ctaText: "Conheça nossa marca",
          ctaLink: "/sobre",
          backgroundColor: "blue",   imageUrl: "/vaso.png",
        },
      ]}
    />
  );
}
