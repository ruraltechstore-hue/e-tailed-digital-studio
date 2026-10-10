import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import { 
  X, 
  CheckCircle2, 
  ChevronDown, 
  Briefcase, 
  Layers, 
  CircleDollarSign, 
  Wrench, 
  Zap, 
  BarChart,
  PhoneCall,
  Handshake,
  BookOpen,
  Rocket,
  TrendingUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/etailed-hero.jpg";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — E-TAILED DIGITAL INDIA" },
      { name: "description", content: "Grow your agency with white-label digital marketing campaigns and SaaS solutions." },
    ],
  }),
  component: Page,
});

function ExpandableBox({ title, desc, icon: Icon }: { title: string; desc: string; icon: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background border border-border/60 rounded-2xl p-6 transition-colors hover:border-primary/50 relative overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        </div>
        <div className="text-muted-foreground transition-transform duration-300 shrink-0" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 20 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-16 pr-4">
              <div className="h-[1px] w-full bg-border/50 mb-5" />
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Page() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "5c828f7d-5e23-44e1-8c1e-14cc57e9c183");
    formData.append("subject", `New Partnership Request - ${selectedModel || "General"}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => {
          setSelectedModel(null);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { title: "No In-House Team Required", desc: "Enterprise-grade marketing & SaaS without hiring." },
    { title: "Massive Market Opportunity", desc: "Digital presence, lead generation & software for every business." },
    { title: "Trusted Delivery Partner", desc: "Registered, proven agency-scale fulfillment." },
    { title: "Scale Without Limits", desc: "Take on more clients without capacity constraints." }
  ];

  const models = [
    {
      title: "Marketing Agency Partner",
      desc: "White-label SEO, paid ads, social media & content marketing.",
      bullets: ["SEO & Google Ads", "Social media management", "Lead generation funnels", "Monthly reporting"],
      popular: false
    },
    {
      title: "SaaS Solutions Partner",
      desc: "Resell/deploy CRM, ERP, HRMS, LMS & custom SaaS.",
      bullets: ["CRM & ERP deployment", "Custom SaaS builds", "Hosting & maintenance", "Client onboarding"],
      popular: true
    },
    {
      title: "White-Label Partner",
      desc: "Full E-Tailed portfolio under your brand.",
      bullets: ["Your brand, our delivery", "Unlimited client projects", "Dedicated account manager", "Sales & demo resources"],
      popular: false
    },
    {
      title: "Enterprise Partner",
      desc: "Multi-location marketing, integrations & enterprise SaaS.",
      bullets: ["Multi-brand campaigns", "API & integrations", "SLA-backed support", "Team training"],
      popular: false
    }
  ];

  const partnerPerks = [
    {
      title: "White-Label Delivery",
      desc: "Offer digital marketing and SaaS services under your own brand with full backend fulfillment.",
      icon: Briefcase
    },
    {
      title: "Complete Service Portfolio",
      desc: "Marketing, web development, automation, SaaS products, and analytics — all in one partnership.",
      icon: Layers
    },
    {
      title: "Recurring Revenue",
      desc: "Earn from monthly retainers, SaaS subscriptions, project work, and long-term client contracts.",
      icon: CircleDollarSign
    },
    {
      title: "Full Technical Support",
      desc: "We handle development, deployment, campaign execution, and ongoing client fulfillment.",
      icon: Wrench
    },
    {
      title: "Fast Onboarding",
      desc: "Get partner resources, demos, and training within 48 hours of approval.",
      icon: Zap
    },
    {
      title: "Sales Enablement",
      desc: "Case studies, pitch decks, demo accounts, and co-selling support for your team.",
      icon: BarChart
    }
  ];

  const steps = [
    {
      title: "Discovery Call",
      desc: "Tell us about your agency, clients, and the marketing or SaaS services you want to offer.",
      icon: PhoneCall
    },
    {
      title: "Partnership Setup",
      desc: "We align on white-label terms, service scope, and onboarding for your team.",
      icon: Handshake
    },
    {
      title: "Onboarding & Training",
      desc: "Access partner portal, sales materials, demo accounts, and fulfillment workflows.",
      icon: BookOpen
    },
    {
      title: "Start Delivering",
      desc: "Pitch to clients under your brand — we execute campaigns and SaaS deployments behind the scenes.",
      icon: Rocket
    },
    {
      title: "Grow Together",
      desc: "Expand into new services, retainers, and SaaS subscriptions with ongoing partner support.",
      icon: TrendingUp
    }
  ];

  const readyPoints = [
    "Free partnership consultation",
    "No technical team required",
    "White-label under your brand",
    "Marketing + SaaS in one place"
  ];

  return (
    <>
      <Nav />
      <main className="bg-background min-h-screen">
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] pt-32 pb-16 px-5 sm:px-8 lg:px-12 flex items-center overflow-hidden bg-[#111329]">
          {/* Faded Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Partner background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-[#111329]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111329] via-[#111329]/80 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Side: Heading */}
            <div className="flex flex-col items-start text-left max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                Partner 
                <br />
                <em className="font-serif font-normal italic text-primary">With Us</em>
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                Grow your agency with white-label digital marketing campaigns and SaaS solutions — we deliver, you own the client relationship.
              </p>
              <button 
                onClick={() => setSelectedModel("Partnership Call")}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Book a Partnership Call
              </button>
            </div>

            {/* Right Side: 4 Animated Boxes */}
            <div className="flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col justify-center hover:border-primary/50 transition-colors shadow-lg"
                >
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Partnership Models Section */}
        <section className="py-24 px-5 sm:px-8 lg:px-12 bg-muted/10">
          <div className="mx-auto max-w-screen-xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Partnership <em className="font-serif font-normal italic text-primary">Models</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Flexible ways to partner — whether you focus on marketing, SaaS, or full-stack digital delivery.
            </p>
          </div>

          <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {models.map((model, index) => (
              <div key={index} className="relative bg-background border border-border/60 rounded-3xl p-8 lg:p-10 flex flex-col hover:border-primary/50 transition-colors shadow-sm">
                
                {model.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed h-12">
                  {model.desc}
                </p>
                
                <div className="flex flex-col gap-4 mb-10 flex-grow">
                  {model.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-base font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                  <button 
                    onClick={() => setSelectedModel(model.title)}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Discuss This Model
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-24 px-5 sm:px-8 lg:px-12 bg-background border-t border-border/40">
          <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
            
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                What You Get <br className="hidden lg:block"/>
                <em className="font-serif font-normal italic text-primary">as a Partner</em>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Everything required to sell and deliver digital marketing and SaaS under your brand
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {partnerPerks.map((perk, index) => (
                <ExpandableBox key={index} {...perk} />
              ))}
            </div>

          </div>
        </section>

        {/* How Partnership Works Section */}
        <section className="py-24 px-5 sm:px-8 lg:px-12 bg-[#18181b] text-white border-y border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.3)_inset]">
          <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Steps */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How Partnership <br className="hidden lg:block" />
                <em className="font-serif font-normal italic text-primary">Works</em>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl">
                A simple path from first conversation to delivering marketing and SaaS for your clients.
              </p>
              
              <div className="flex flex-col gap-6 md:gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-stretch gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-black">
                          <Icon className="w-6 h-6" />
                        </div>
                        {index !== steps.length - 1 && (
                          <div className="w-[2px] flex-grow bg-white/10 mt-6" />
                        )}
                      </div>
                      <div className="pb-8 pt-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-3">
                          <span className="text-primary mr-2">{index + 1}.</span> 
                          {step.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed text-base md:text-lg">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Ready to Partner Box */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 lg:sticky lg:top-32 shadow-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-4">Ready to Partner?</h3>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Whether you are an agency, freelancer, or business looking to expand into digital marketing and SaaS — we will tailor a partnership to your goals.
              </p>

              <div className="flex flex-col gap-4 mb-12">
                {readyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-base font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setSelectedModel("Contact Us")}
                  className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => setSelectedModel("Submit Application")}
                  className="w-full inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />

      {/* Dynamic Contact Modal */}
      <AnimatePresence>
        {selectedModel && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111329]/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-transparent backdrop-blur-2xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full max-w-lg relative text-white my-auto"
            >
              <button 
                onClick={() => setSelectedModel(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mb-8 pr-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  Inquire about
                </p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {selectedModel}
                </h2>
              </div>

              <form onSubmit={handleContactSubmit} className="flex flex-col gap-5 w-full mt-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-white/70 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-white/70 ml-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-semibold text-white/70 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-white/70 ml-1">
                    Partnership Inquiry
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Tell us about your agency and partnership goals..."
                    className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20 resize-none"
                  />
                </div>

                <div className="mt-4 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-[#111329] hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all px-8 py-4 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Partnership Request"}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-400 text-sm font-semibold">
                      Request sent successfully!
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-sm font-semibold">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
