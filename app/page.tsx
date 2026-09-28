import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { QmetaCase } from "@/components/QmetaCase";
import { Cases } from "@/components/Cases";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <QmetaCase />
        <Cases />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
