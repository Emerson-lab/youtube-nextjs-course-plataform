import Image from "next/image";
import Link from "next/link";
import { CardProps } from "./types";

export const Card = (props: CardProps) => {
  return (
    <Link href={props.href} className="hover:no-underline ">
      <article className="flex gap-2 flex-col p-2 rounded hover:bg-primary">
        <Image
          height="0"
          width="1000"
          draggable="false"
          src={props.image}
          alt={props.title}
          className="aspect-video object-cover rounded-2xl"
        />

        <h4 className="font-extrabold text-lg">
          {props.title}
        </h4>

        <p className="line-clamp-3">
          {props.description}
        </p>
      </article>
    </Link>
  );
};