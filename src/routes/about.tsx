import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import heroImage from "@/assets/etailed-hero.jpg";
import { Target, Rocket, Heart, CheckCircle2, Globe2, Sparkles, GraduationCap, ShoppingCart, Megaphone, Zap, Handshake, Headset } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — E-TAILED DIGITAL INDIA" },
      { name: "description", content: "A leading digital marketing and SaaS company helping businesses grow online." },
    ],
  }),
  component: Page,
});

function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    const scroll = () => {
      if (!isHovered.current && scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        
        // Seamless loop resetting
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const specialties = [
    "Digital Marketing (SEO, Social Media, Paid Ads)",
    "Custom SaaS Development (CRM, ERP, LMS, HRMS)",
    "Website & E-Commerce Solutions",
    "Marketing Automation & CRM Setup",
    "Branding, Content & Creative Services",
    "White-Label Delivery for Agencies"
  ];

  const coreValues = [
    {
      title: "Our Mission",
      desc: "To deliver high-impact digital marketing and SaaS solutions that help businesses generate leads, increase revenue, and scale efficiently.",
      icon: Target,
      isList: false
    },
    {
      title: "Our Vision",
      desc: "To become India's most trusted digital marketing and SaaS partner, empowering thousands of businesses with technology-driven growth.",
      icon: Rocket,
      isList: false
    },
    {
      title: "Our Values",
      desc: ["Transparency", "Quality", "Innovation", "Affordability", "Real-world outcomes"],
      icon: Heart,
      isList: true
    }
  ];

  const offers = [
    {
      title: "Digital Marketing Training",
      desc: "Comprehensive courses in SEO, social media marketing, content marketing, and more.",
      icon: GraduationCap
    },
    {
      title: "E-Commerce Solutions",
      desc: "Complete store setup, marketplace integration, and automation services.",
      icon: ShoppingCart
    },
    {
      title: "Digital Marketing & SaaS",
      desc: "SEO, paid ads, social media campaigns, and custom SaaS deployment.",
      icon: Megaphone
    },
    {
      title: "Business Automation",
      desc: "WhatsApp marketing, CRM tools, and workflow automation solutions.",
      icon: Zap
    },
    {
      title: "Agency Partnerships",
      desc: "White-label our marketing and SaaS services to grow your agency revenue.",
      icon: Handshake
    },
    {
      title: "Mentorship & Support",
      desc: "One-on-one guidance and 24/7 support for your business growth.",
      icon: Headset
    }
  ];

  // Duplicate massively to ensure continuous scrolling
  const duplicatedValues = [...coreValues, ...coreValues, ...coreValues, ...coreValues, ...coreValues, ...coreValues];

  return (
    <>
      <Nav />
      <main className="bg-background min-h-screen">
        
        {/* Hero Section */}
        <section className="relative w-full min-h-screen pt-32 pb-20 px-4 sm:px-8 lg:px-12 flex flex-col justify-center items-center overflow-hidden">
          {/* Faded Background */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
            <img
              src={heroImage}
              alt="About Us Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full flex flex-col items-center text-center">
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              About <em className="font-serif font-normal italic text-primary">Us</em>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-16 font-medium max-w-2xl"
            >
              <strong className="text-foreground">E-Tailed Digital India</strong> is a leading digital marketing and SaaS company helping businesses grow online with data-driven campaigns, custom software products, and automation solutions.
            </motion.p>

            <div className="mb-20 w-full max-w-screen-xl">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-10"
              >
                We specialize in:
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 w-full text-left">
                {specialties.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-sm md:text-base tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="bg-[#1B1D38] text-white border border-white/5 py-8 px-6 md:px-12 rounded-2xl w-[95%] max-w-screen-xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left"
            >
              {/* Abstract decorative elements */}
              <Sparkles className="absolute top-4 right-8 w-24 h-24 text-white/5 -rotate-12 pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[3rem] pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#080699]/20 rounded-full blur-[3rem] pointer-events-none" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] border-[1px] border-white/5 rounded-[40%] pointer-events-none" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[240%] border-[1px] border-white/[0.02] rounded-[40%] pointer-events-none rotate-6" />
              
              <div className="flex flex-col items-center md:items-start shrink-0 relative z-10">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">
                  Our Goal
                </span>
                <span className="text-xs md:text-sm font-medium text-white/50 tracking-widest uppercase">
                  Is Simple
                </span>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-white/10 shrink-0 relative z-10" />

              <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed relative z-10 max-w-3xl text-white/90">
                To help businesses accelerate growth through powerful digital marketing strategies and scalable SaaS technology.
              </p>
            </motion.div>
            
          </div>
        </section>

        {/* Auto-Scrolling Section */}
        <section className="py-16 border-y border-white/5 bg-[#111329] text-white overflow-hidden relative">
          
          {/* Gradient Fades for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#111329] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#111329] to-transparent z-10 pointer-events-none" />

          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-hidden px-4 py-4"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedValues.map((item, index) => {
               const Icon = item.icon;
               return (
                <div 
                  key={index} 
                  className="w-[85vw] max-w-[400px] shrink-0 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-colors shadow-sm flex flex-col group cursor-default backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  
                  {item.isList ? (
                    <ul className="flex flex-col gap-3">
                      {(item.desc as string[]).map((val, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/70 font-medium text-lg">
                          <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                          {val}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white/70 leading-relaxed text-lg font-medium">
                      {item.desc}
                    </p>
                  )}
                </div>
               );
            })}
          </div>
        </section>

        {/* Ready to Grow CTA Section */}
        <section className="py-16 px-5 sm:px-8 lg:px-12 bg-background text-foreground border-t border-border/40">
          <div className="mx-auto max-w-screen-xl flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl leading-tight">
              Ready to Grow Your <br className="hidden md:block" />
              <em className="font-serif font-normal italic text-primary">Business?</em>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Partner with us for digital marketing campaigns, custom SaaS products, and automation that delivers measurable results
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
