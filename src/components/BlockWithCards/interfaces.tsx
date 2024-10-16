export interface CardProps {
  id: number;
  title: string;
  value: string;
  image: string;
}

export interface SectionProps {
  titleSection: string;
  cards: CardProps[];
}
