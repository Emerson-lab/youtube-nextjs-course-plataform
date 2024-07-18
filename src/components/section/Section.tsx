import { Card } from "../card/Card";
import { SectionProps } from "./types";

export const Section = ({ variant = "grid", ...rest }: SectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-xl">{rest.title}</h2>

      <ul
        data-variant={variant}
        className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            href="/cursos/123"
            title=" Curso de API Rest, Node e Typescript"
            description={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam perferendis, libero
          voluptas porro sed numquam id delectus iste? Praesentium reiciendis nihil dicta earum laudantium
          enim quis voluptas aliquam adipisci? Vero quasi accusantium voluptas optio sunt culpa rerum
          dicta impedit, eligendi in aspernatur minima neque facere magnam sapiente est ullam architecto
          tempora odit iusto harum excepturi ratione, sed recusandae. Et nulla fuga debitis ex ipsum
          molestiae quas sequi iusto? Quae provident reiciendis suscipit ducimus praesentium voluptas
          harum odit, quas ex eos perspiciatis cum itaque officiis pariatur quos? Aliquam, aut perspiciatis!
        `}
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
          />
        </li>
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            href="/cursos/123"
            title=" Curso de API Rest, Node e Typescript"
            description={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam perferendis, libero
          voluptas porro sed numquam id delectus iste? Praesentium reiciendis nihil dicta earum laudantium
          enim quis voluptas aliquam adipisci? Vero quasi accusantium voluptas optio sunt culpa rerum
          dicta impedit, eligendi in aspernatur minima neque facere magnam sapiente est ullam architecto
          tempora odit iusto harum excepturi ratione, sed recusandae. Et nulla fuga debitis ex ipsum
          molestiae quas sequi iusto? Quae provident reiciendis suscipit ducimus praesentium voluptas
          harum odit, quas ex eos perspiciatis cum itaque officiis pariatur quos? Aliquam, aut perspiciatis!
        `}
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
          />
        </li>
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            href="/cursos/123"
            title=" Curso de API Rest, Node e Typescript"
            description={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam perferendis, libero
          voluptas porro sed numquam id delectus iste? Praesentium reiciendis nihil dicta earum laudantium
          enim quis voluptas aliquam adipisci? Vero quasi accusantium voluptas optio sunt culpa rerum
          dicta impedit, eligendi in aspernatur minima neque facere magnam sapiente est ullam architecto
          tempora odit iusto harum excepturi ratione, sed recusandae. Et nulla fuga debitis ex ipsum
          molestiae quas sequi iusto? Quae provident reiciendis suscipit ducimus praesentium voluptas
          harum odit, quas ex eos perspiciatis cum itaque officiis pariatur quos? Aliquam, aut perspiciatis!
        `}
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
          />
        </li>
      </ul>
    </section>
  );
};