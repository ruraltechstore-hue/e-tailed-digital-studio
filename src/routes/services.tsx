import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import { Services } from "@/components/etailed/Services";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — E-TAILED DIGITAL INDIA" },
    { name: "description", content: "Brand strategy, identity, web, e-commerce, content and growth services from an independent Indian studio." },
    { property: "og:title", content: "Services — E-TAILED DIGITAL INDIA" },
    { property: "og:description", content: "Brand strategy, identity, web, e-commerce, content and growth services from an independent Indian studio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});
function Page() { return <><Nav /><main className="pt-20"><Services /></main><Footer /></>; }
