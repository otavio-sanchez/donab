export type Slide = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  backgroundOtherColor?: string;
};

export type SliderProps = {
  slides: Slide[];
};