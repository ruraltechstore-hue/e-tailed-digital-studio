import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import { Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — E-TAILED DIGITAL INDIA" },
      { name: "description", content: "Frequently Asked Questions" },
    ],
  }),
  component: Page,
});

const faqs = [
  {
    q: "What digital marketing services do you offer?",
    a: "SEO, Google Ads, Meta/Instagram Ads, social media management, content marketing, email campaigns, WhatsApp marketing, and lead generation funnels."
  },
  {
    q: "Do you build custom SaaS products?",
    a: "Yes. We design, develop, and deploy CRM, ERP, HRMS, booking systems, and industry-specific SaaS platforms with hosting and maintenance."
  },
  {
    q: "Do you offer monthly marketing retainers?",
    a: "Yes. Flexible monthly retainers are available for SEO, social media, paid ads, and ongoing SaaS support."
  },
  {
    q: "Can you manage both marketing and SaaS for us?",
    a: "Yes. We offer bundled digital marketing, CRM, automation, and SaaS solutions."
  },
  {
    q: "Do you offer agency partnership programs?",
    a: "Yes. Agencies can white-label our digital marketing and SaaS services. Visit Partner With Us for details."
  },
  {
    q: "How do I get a quote for my project?",
    a: "Contact us through the contact form, call +91 93928 98733 / +91 9390168733, or WhatsApp us for a free consultation and custom proposal."
  },
  {
    q: "What support do you provide after launch?",
    a: "Campaign optimization, SaaS maintenance, monthly reports, and 24/7 WhatsApp support based on your plan."
  },
  {
    q: "How long does a typical project take?",
    a: "Marketing launches within days; custom SaaS takes 4–12 weeks; CRM and automation setups take 1–3 weeks."
  }
];

function Page() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 pb-24 bg-background min-h-[85vh]">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-8 lg:px-12">
          
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Frequently Asked
              <br />
              <em className="font-serif font-normal italic text-primary">Questions</em>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Assistance Box */}
            <div className="w-full lg:w-1/3 shrink-0">
              <div className="bg-muted/30 border border-border/80 rounded-2xl p-8 sticky top-32">
                <h3 className="text-xl font-bold mb-2">Need Assistance?</h3>
                <p className="text-sm text-muted-foreground mb-6">Reach out to us directly.</p>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 py-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+919392898733" className="text-base font-medium hover:text-primary transition-colors">
                      +91 93928 98733
                    </a>
                  </div>
                  
                  <div className="h-[1px] w-full bg-border/60" />
                  
                  <div className="flex items-center gap-3 py-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+919390168733" className="text-base font-medium hover:text-primary transition-colors">
                      +91 9390168733
                    </a>
                  </div>
                  
                  <div className="h-[1px] w-full bg-border/60" />
                  
                  <div className="flex items-center gap-3 py-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:support@e-tailedindia.com" className="text-base font-medium hover:text-primary transition-colors break-all">
                      support@e-tailedindia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: FAQs */}
            <div className="w-full lg:w-2/3">
              <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/60 mb-2">
                    <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:no-underline py-6 data-[state=open]:text-primary transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pr-8">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
