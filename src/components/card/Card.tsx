import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <Link href="/cursos/dsdlaa" className="hover:no-underline ">
      <article className="flex gap-2 flex-col p-2 rounded hover:bg-primary">
        <Image
          height="0"
          width="1000"
          draggable="false"
          alt="Curso de API Rest"
          className="aspect-video object-cover rounded-2xl"
          src="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
        />

        <h4 className="font-extrabold text-lg">
          Curso de API Rest, Node e Typescript
        </h4>

        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam perferendis, libero
          voluptas porro sed numquam id delectus iste? Praesentium reiciendis nihil dicta earum laudantium
          enim quis voluptas aliquam adipisci? Vero quasi accusantium voluptas optio sunt culpa rerum
          dicta impedit, eligendi in aspernatur minima neque facere magnam sapiente est ullam architecto
          tempora odit iusto harum excepturi ratione, sed recusandae. Et nulla fuga debitis ex ipsum
          molestiae quas sequi iusto? Quae provident reiciendis suscipit ducimus praesentium voluptas
          harum odit, quas ex eos perspiciatis cum itaque officiis pariatur quos? Aliquam, aut perspiciatis!
        </p>
      </article>
    </Link>
  );
};