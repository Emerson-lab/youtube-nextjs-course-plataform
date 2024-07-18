import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página inicial"
};

export default function PageHome() {
  return (
    <main className="bg-background">
      <Section />
    </main>
  );
}
