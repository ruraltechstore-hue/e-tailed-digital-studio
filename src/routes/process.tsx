import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import { Process } from "@/components/etailed/Process";

export const Route = createFileRoute("/process")({
  head: () => ({ meta: [
    { title: "Process — E-TAILED DIGITAL INDIA" },
    { name: "description", content: "Discover, define, create, evolve — how E-TAILED DIGITAL INDIA works with ambitious brands." },
    { property: "og:title", content: "Process — E-TAILED DIGITAL INDIA" },
    { property: "og:description", content: "Discover, define, create, evolve — how E-TAILED DIGITAL INDIA works with ambitious brands." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});
function Page() { return <><Nav /><main className="pt-20"><Process /></main><Footer /></>; }
