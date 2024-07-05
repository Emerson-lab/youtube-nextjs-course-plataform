import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página inicial"
};

export default function PageHome() {
  return (
    <main className="bg-background">
      Home
    </main>
  );
}
