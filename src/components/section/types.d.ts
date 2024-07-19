import { CardProps } from "../card/types";

export interface SectionProps {
  title: string;
  items: CardProps[];
  variant: "grid" | "h-list";
}