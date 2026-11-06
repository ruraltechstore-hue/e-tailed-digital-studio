import { useEffect } from "react";
import { Nav } from "@/components/etailed/Nav";
import { Hero } from "@/components/etailed/Hero";
import { Marquee } from "@/components/etailed/Marquee";
import { Services } from "@/components/etailed/Services";
import { About } from "@/components/etailed/About";
import { Footer } from "@/components/etailed/Footer";

export default function HomePage() {
  useEffect(() => {
    document.title = "E-TAILED DIGITAL INDIA — Independent Digital Studio";
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}
