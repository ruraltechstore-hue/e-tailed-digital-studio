import { useEffect } from "react";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import { Contact } from "@/components/etailed/Contact";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — E-TAILED DIGITAL INDIA";
  }, []);

  return (
    <>
      <Nav />
      <main className="bg-[#111329]">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
