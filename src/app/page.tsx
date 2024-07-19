import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página inicial"
};

export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="max-w-full min-[880px]:max-w-[880px]">
        <Section
          title="Veja mais cursos"
          variant="h-list"
          items={[
            {
              href: "/cursos/123",
              description: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis ipsam perferendis, libero
              voluptas porro sed numquam id delectus iste? Praesentium reiciendis nihil dicta earum laudantium
              enim quis voluptas aliquam adipisci? Vero quasi accusantium voluptas optio sunt culpa rerum
              dicta impedit, eligendi in aspernatur minima neque facere magnam sapiente est ullam architecto
              tempora odit iusto harum excepturi ratione, sed recusandae.Et nulla fuga debitis ex ipsum
              molestiae quas sequi iusto? Quae provident reiciendis suscipit ducimus praesentium voluptas
              harum odit, quas ex eos perspiciatis cum itaque officiis pariatur quos? Aliquam, aut perspiciatis!`,
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
              title: "Curso de API Rest, Node e Typescript"
            },
            {
              href: "/cursos/123",
              description: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis ipsam perferendis, libero
              voluptas porro sed numquam id delectus iste? Praesentium reiciendis nihil dicta earum laudantium
              enim quis voluptas aliquam adipisci? Vero quasi accusantium voluptas optio sunt culpa rerum
              dicta impedit, eligendi in aspernatur minima neque facere magnam sapiente est ullam architecto
              tempora odit iusto harum excepturi ratione, sed recusandae.Et nulla fuga debitis ex ipsum
              molestiae quas sequi iusto? Quae provident reiciendis suscipit ducimus praesentium voluptas
              harum odit, quas ex eos perspiciatis cum itaque officiis pariatur quos? Aliquam, aut perspiciatis!`,
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
              title: "Curso de API Rest, Node e Typescript"
            },
            {
              href: "/cursos/123",
              description: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis ipsam perferendis, libero
              voluptas porro sed numquam id delectus iste? Praesentium reiciendis nihil dicta earum laudantium
              enim quis voluptas aliquam adipisci? Vero quasi accusantium voluptas optio sunt culpa rerum
              dicta impedit, eligendi in aspernatur minima neque facere magnam sapiente est ullam architecto
              tempora odit iusto harum excepturi ratione, sed recusandae.Et nulla fuga debitis ex ipsum
              molestiae quas sequi iusto? Quae provident reiciendis suscipit ducimus praesentium voluptas
              harum odit, quas ex eos perspiciatis cum itaque officiis pariatur quos? Aliquam, aut perspiciatis!`,
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
              title: "Curso de API Rest, Node e Typescript"
            },
            {
              href: "/cursos/123",
              description: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis ipsam perferendis, libero
              voluptas porro sed numquam id delectus iste? Praesentium reiciendis nihil dicta earum laudantium
              enim quis voluptas aliquam adipisci? Vero quasi accusantium voluptas optio sunt culpa rerum
              dicta impedit, eligendi in aspernatur minima neque facere magnam sapiente est ullam architecto
              tempora odit iusto harum excepturi ratione, sed recusandae.Et nulla fuga debitis ex ipsum
              molestiae quas sequi iusto? Quae provident reiciendis suscipit ducimus praesentium voluptas
              harum odit, quas ex eos perspiciatis cum itaque officiis pariatur quos? Aliquam, aut perspiciatis!`,
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
              title: "Curso de API Rest, Node e Typescript"
            },
          ]}
        />
      </div>
    </main>
  );
}
