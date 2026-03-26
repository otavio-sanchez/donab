import { Slider } from "@/app/components/slider";
import Link from "next/link";

export function Hero() {
  return (
   <Slider

slides={[
  {
    id: 1,
    title: "Casa & Decor",
    description: "Objetos que transformam ambientes comuns em lugares especiais",
    ctaText: "Ver produtos",
    ctaLink: "/produtos",
    backgroundColor: "#F7F5F2",
    imageUrl: "/slides/vaso_1.png",
    backgroundOtherColor: "#E6DED4",
  },
  {
    id: 2,
    title: "Design com propósito",
    description: "Cada peça pensada para ser bonita e funcional ao mesmo tempo",
    ctaText: "Explorar coleção",
    ctaLink: "/produtos",
    backgroundColor: "#E4E8E1",
    imageUrl: "/slides/vaso_2.png",
    backgroundOtherColor: "#D2D8CD",
  },
  {
    id: 3,
    title: "Minimal. Elegante. Seu.",
    description: "Estética atemporal para quem valoriza os detalhes do dia a dia",
    ctaText: "Conhecer a marca",
    ctaLink: "/sobre",
    backgroundColor: "#DCE6E8",
    imageUrl: "/slides/vaso_3.png",
    backgroundOtherColor: "#C9D6DA",
  },
]}
    />
  );
}
