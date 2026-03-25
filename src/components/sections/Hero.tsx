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
    imageUrl: "/slides/vaso_1.png",
    backgroundOtherColor: "#E6DED4", // leve contraste quente
  },
  {
    id: 2,
    title: "Transforme seu Espaço",
    description: "Vasos, itens de decoração e organização para cada ambiente",
    ctaText: "Veja nossos produtos",
    ctaLink: "/produtos",
    backgroundColor: "#E4E8E1",
    imageUrl: "/slides/vaso_2.png",
    backgroundOtherColor: "#D2D8CD", // verde levemente mais fechado
  },
  {
    id: 3,
    title: "Design Minimalista e Funcional",
    description: "Peças que unem beleza e praticidade para o dia a dia",
    ctaText: "Conheça nossa marca",
    ctaLink: "/sobre",
    backgroundColor: "#DCE6E8",
    imageUrl: "/slides/vaso_3.png",
    backgroundOtherColor: "#C9D6DA", // azul suave mais escuro
  },
]}
    />
  );
}
