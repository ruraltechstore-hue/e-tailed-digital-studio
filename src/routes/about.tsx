import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import { About } from "@/components/etailed/About";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — E-TAILED DIGITAL INDIA" },
    { name: "description", content: "An independent studio combining local intelligence with a global creative standard." },
    { property: "og:title", content: "About — E-TAILED DIGITAL INDIA" },
    { property: "og:description", content: "An independent studio combining local intelligence with a global creative standard." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});
function Page() { return <><Nav /><main className="pt-20"><About /></main><Footer /></>; }
