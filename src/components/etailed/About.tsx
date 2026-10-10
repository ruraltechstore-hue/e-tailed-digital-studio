import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden py-16 md:py-24 bg-background text-foreground"
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12">
        
        {/* Transform Section - Compact */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16 mb-20">
          
          <div className="lg:w-2/5 shrink-0">
            <h2 id="about-title" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              <motion.span 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }} 
                className="inline-block"
              >
                Ready to
              </motion.span>{" "}
              <motion.span 
                initial={{ opacity: 0, y: -30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                className="inline-block"
              >
                Transform
              </motion.span>
              <br />
              <motion.em 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: 0.4 }} 
                className="font-serif font-normal italic text-muted-foreground inline-block mt-2"
              >
                Your Business?
              </motion.em>
            </h2>
          </div>

          <div className="lg:w-3/5 w-full">
            <Reveal delay={100}>
              <div className="border-t border-border/80 pt-6 md:pt-10 relative">
                {/* Vertical Divider line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-border/80 -translate-x-1/2" />
                
                <div className="grid grid-cols-2 gap-y-8 md:gap-y-12">
                  {/* Item 1 */}
                  <div className="pr-4 md:pr-10 flex flex-col">
                    <span className="text-3xl md:text-5xl font-serif italic text-primary mb-1 md:mb-2">50+</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">SaaS Products</span>
                  </div>
                  {/* Item 2 */}
                  <div className="pl-6 md:pl-10 flex flex-col">
                    <span className="text-3xl md:text-5xl font-serif italic text-primary mb-1 md:mb-2">8</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Service Categories</span>
                  </div>
                  {/* Item 3 */}
                  <div className="pr-4 md:pr-10 flex flex-col">
                    <span className="text-3xl md:text-5xl font-serif italic text-primary mb-1 md:mb-2">3&times;</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Avg Lead Growth</span>
                  </div>
                  {/* Item 4 */}
                  <div className="pl-6 md:pl-10 flex flex-col">
                    <span className="text-3xl md:text-5xl font-serif italic text-primary mb-1 md:mb-2">24/7</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Support</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Testimonials Section */}
        <div className="pt-16 border-t border-border/50">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              What Our Clients Say
            </h3>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Testimonial 1 */}
            <Reveal delay={100} className="h-full">
              <div className="bg-muted/30 border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-sm">
                <Quote className="w-6 h-6 text-primary/30 mb-4" />
                <p className="text-sm text-foreground/85 leading-relaxed mb-8 flex-grow italic">
                  “E-Tailed built our Shopify store and ran Google + Meta ads that tripled our monthly revenue in 4 months. Their SaaS inventory tool saved us hours every week.”
                </p>
                <div>
                  <p className="font-semibold text-sm">Rajesh Kumar</p>
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">E-Commerce Founder, Hyderabad, Telangana</p>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 2 */}
            <Reveal delay={200} className="h-full">
              <div className="bg-muted/30 border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-sm">
                <Quote className="w-6 h-6 text-primary/30 mb-4" />
                <p className="text-sm text-foreground/85 leading-relaxed mb-8 flex-grow italic">
                  “We outsourced our entire social media and lead generation to them. Lead volume went up 280% and our CRM automation handles follow-ups automatically.”
                </p>
                <div>
                  <p className="font-semibold text-sm">Priya Sharma</p>
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">Marketing Director, Bangalore, Karnataka</p>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 3 */}
            <Reveal delay={300} className="h-full">
              <div className="bg-muted/30 border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-sm">
                <Quote className="w-6 h-6 text-primary/30 mb-4" />
                <p className="text-sm text-foreground/85 leading-relaxed mb-8 flex-grow italic">
                  “They developed and deployed our custom CRM SaaS in 6 weeks. Clean UI, solid backend, and ongoing support. Best technology partner we have worked with.”
                </p>
                <div>
                  <p className="font-semibold text-sm">Mohammed Ismail</p>
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">SaaS Startup CEO, Vijayawada, Andhra Pradesh</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}
