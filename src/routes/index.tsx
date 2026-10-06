import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Hero } from "@/components/etailed/Hero";
import { Marquee } from "@/components/etailed/Marquee";
import { Services } from "@/components/etailed/Services";
import { About } from "@/components/etailed/About";
import { Process } from "@/components/etailed/Process";
import { Contact } from "@/components/etailed/Contact";
import { Footer } from "@/components/etailed/Footer";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "E-TAILED DIGITAL INDIA — Independent Digital Studio" },
    { name: "description", content: "Brand, digital products and growth for ambitious businesses in India." },
    { property: "og:title", content: "E-TAILED DIGITAL INDIA — Independent Digital Studio" },
    { property: "og:description", content: "Brand, digital products and growth for ambitious businesses." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});
function Index() { return <><Nav /><main><Hero /><Marquee /><Services /><About /><Process /><Contact /></main><Footer /></>; }
