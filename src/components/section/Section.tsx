import { Card } from "../card/Card";

export const Section = () => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-xl">Todos os cursos</h2>

      <ul className="flex flex-col gap-2">
        <li>
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
        <li>
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
        <li>
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