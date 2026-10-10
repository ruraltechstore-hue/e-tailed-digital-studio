import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import { Contact } from "@/components/etailed/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — E-TAILED DIGITAL INDIA" },
      {
        name: "description",
        content: "Start a project with E-TAILED DIGITAL INDIA by email or WhatsApp.",
      },
      { property: "og:title", content: "Contact — E-TAILED DIGITAL INDIA" },
      {
        property: "og:description",
        content: "Start a project with E-TAILED DIGITAL INDIA by email or WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
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
