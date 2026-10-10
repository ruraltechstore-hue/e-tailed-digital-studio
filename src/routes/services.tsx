import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import heroImage from "@/assets/etailed-hero.jpg";
import { services } from "@/components/etailed/servicesData";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — E-TAILED DIGITAL INDIA" },
      { name: "description", content: "Our Digital & Professional Ecosystem" },
    ],
  }),
  component: Page,
});

function Page() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "5c828f7d-5e23-44e1-8c1e-14cc57e9c183");
    formData.append("subject", `Service Inquiry - ${selectedService}`);

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
          setSelectedService(null);
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

  const customServices = [
    { 
      title: "Web & Branding", 
      image: services[2].image, 
      description: "We help you establish a powerful digital identity. From conceptualizing your brand logo to launching a fully functional professional website, we provide end-to-end solutions that make your business stand out in the digital landscape." 
    },
    { 
      title: "Website & E-Commerce Solutions", 
      image: services[3].image, 
      description: "Launch your online store with our comprehensive e-commerce solutions. We build secure, scalable, and user-friendly platforms that streamline your sales process, manage inventory, and provide a seamless shopping experience for your customers." 
    },
    { 
      title: "Social Media & Marketing", 
      image: services[5].image, 
      description: "Engage your audience and grow your brand with our targeted social media strategies. We manage your presence across platforms, create compelling content, run ad campaigns, and leverage influencer partnerships to maximize your reach." 
    },
    { 
      title: "Automation & CRM", 
      image: services[6].image, 
      description: "Streamline your business operations by automating repetitive tasks. Our CRM and automation solutions help you nurture leads, provide instant customer support, and convert prospects into loyal customers effortlessly." 
    },
    { 
      title: "Ready-Made Business Systems", 
      image: services[4].image, 
      description: "Fast-track your business launch with our ready-to-use software solutions. Whether you need a dropshipping store, a booking system, or a learning management platform, our robust pre-built systems save you time and money." 
    },
    { 
      title: "Digital Marketing & SaaS", 
      image: services[7].image, 
      description: "Drive traffic, generate leads, and boost your revenue with our data-driven digital marketing campaigns. We combine SEO, paid advertising, and software solutions to deliver measurable growth for your business." 
    },
    { 
      title: "Branding & Printing", 
      image: services[1].image, 
      description: "Make a lasting impression in the physical world with our premium branding and printing services. We design and deliver high-quality promotional materials that accurately reflect your brand values and aesthetics." 
    },
    { 
      title: "SaaS Software Suite", 
      image: services[7].image, 
      description: "Empower your enterprise with our comprehensive SaaS applications. From managing human resources to handling customer tickets, our software suite provides the tools you need to operate efficiently and scale seamlessly." 
    },
  ];

  return (
    <>
      <Nav />
      <main className="bg-background min-h-screen pb-24">
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] pt-32 pb-16 px-4 md:px-8 flex flex-col justify-center items-center overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Services background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
          </div>
          
          <div className="relative z-10 mx-auto w-full max-w-screen-xl px-5 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Our Digital & 
              <br />
              <em className="font-serif font-normal italic text-primary">Professional Ecosystem</em>
            </h1>
            <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
              Comprehensive solutions spanning digital marketing, SaaS, logistics, education, and career development.
            </p>
          </div>
        </section>

        {/* 3 Compact Vertical Boxes */}
        <section className="mx-auto max-w-screen-xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 justify-items-center">
            <div className="bg-background border border-border/60 rounded-2xl flex flex-col overflow-hidden hover:border-primary/50 transition-colors shadow-sm group w-full max-w-[340px]">
              <div className="w-full h-28 sm:h-32 overflow-hidden shrink-0 border-b border-border/40">
                <img src={services[0].image} alt="Logistics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full p-5 sm:p-6 flex flex-col items-center text-center bg-muted/5 flex-grow">
                <h3 className="text-sm sm:text-base font-bold mb-2 leading-tight">Logistics – Rural Tech Services</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-5">
                  Rural logistics & tech-enabled supply chain solutions.
                </p>
                <button 
                  onClick={() => setSelectedService("Logistics – Rural Tech Services")}
                  className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-colors w-full"
                >
                  Explore Service
                </button>
              </div>
            </div>

            <div className="bg-background border border-border/60 rounded-2xl flex flex-col overflow-hidden hover:border-primary/50 transition-colors shadow-sm group w-full max-w-[340px]">
              <div className="w-full h-28 sm:h-32 overflow-hidden shrink-0 border-b border-border/40">
                <img src={services[1].image} alt="Education" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full p-5 sm:p-6 flex flex-col items-center text-center bg-muted/5 flex-grow">
                <h3 className="text-sm sm:text-base font-bold mb-2 leading-tight">Education – IIECM</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-5">
                  Quality education, specialized courses & industry certifications.
                </p>
                <button 
                  onClick={() => setSelectedService("Education – IIECM")}
                  className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-colors w-full"
                >
                  Explore Service
                </button>
              </div>
            </div>

            <div className="bg-background border border-border/60 rounded-2xl flex flex-col overflow-hidden hover:border-primary/50 transition-colors shadow-sm group w-full max-w-[340px]">
              <div className="w-full h-28 sm:h-32 overflow-hidden shrink-0 border-b border-border/40">
                <img src={services[2].image} alt="Career Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full p-5 sm:p-6 flex flex-col items-center text-center bg-muted/5 flex-grow">
                <h3 className="text-sm sm:text-base font-bold mb-2 leading-tight">Career Services – VyraPath</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-5">
                  Career counseling, placement support & skill development.
                </p>
                <button 
                  onClick={() => setSelectedService("Career Services – VyraPath")}
                  className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-colors w-full"
                >
                  Explore Service
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Medium Vertical Sections */}
        <section className="mx-auto max-w-screen-xl px-5 sm:px-8 lg:px-12 flex flex-col gap-16 lg:gap-24">
          {customServices.map((svc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                id={services[index].name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center bg-muted/5 border border-border/40 rounded-[2.5rem] overflow-hidden p-8 lg:p-12 hover:border-border/80 transition-colors scroll-mt-24`}
              >
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden shrink-0">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{svc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg md:text-xl mb-10">
                    {svc.description}
                  </p>
                  <div>
                    <button 
                      onClick={() => setSelectedService(svc.title)}
                      className="inline-flex items-center justify-center bg-primary text-[#111329] hover:bg-white hover:text-[#111329] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-colors"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

      </main>
      <Footer />

      {/* Dynamic Contact Modal */}
      <AnimatePresence>
        {selectedService && (
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
              className="bg-[#1B1D38] border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-lg relative text-white my-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mb-8 pr-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  Inquire about
                </p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {selectedService}
                </h2>
              </div>

              <form onSubmit={handleContactSubmit} className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-0.5 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl focus-within:border-white/40 focus-within:bg-white/10 transition-colors">
                  <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-widest text-white/50">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-transparent border-none outline-none text-white text-sm w-full"
                  />
                </div>

                <div className="flex flex-col gap-0.5 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl focus-within:border-white/40 focus-within:bg-white/10 transition-colors">
                  <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-widest text-white/50">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-transparent border-none outline-none text-white text-sm w-full"
                  />
                </div>

                <div className="flex flex-col gap-0.5 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl focus-within:border-white/40 focus-within:bg-white/10 transition-colors">
                  <label htmlFor="phone" className="text-[9px] font-bold uppercase tracking-widest text-white/50">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="bg-transparent border-none outline-none text-white text-sm w-full"
                  />
                </div>

                <div className="flex flex-col gap-0.5 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl focus-within:border-white/40 focus-within:bg-white/10 transition-colors">
                  <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-widest text-white/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={2}
                    className="bg-transparent border-none outline-none text-white text-sm w-full resize-none"
                  />
                </div>

                <div className="mt-1 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-400 text-xs font-semibold">
                      Inquiry sent successfully!
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-xs font-semibold">
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
