export interface CardProps {
  id: string;
  title: string;
  value: string;
  image: string;
}

export interface SectionProps {
  titleSection: string;
  cards: CardProps[];
}
