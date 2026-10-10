import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/etailed-hero.jpg";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative w-full pt-28 pb-8 px-4 md:px-8 bg-background"
    >
      <div className="relative flex min-h-[85svh] w-full flex-col justify-end overflow-hidden rounded-[2rem] md:rounded-[3rem] text-primary-foreground bg-[#111329] shadow-lg">
        <img
          src={heroImage}
          alt=""
          width={1600}
          height={1008}
          className="hero-image absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 flex flex-col">
          
          <div className="flex flex-col items-center text-center w-full mb-16 md:mb-24">
            <h1
              id="hero-title"
              className="max-w-6xl text-[clamp(2.8rem,7vw,7.5rem)] font-medium leading-[1.05]"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white"
              >
                Your Business
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-white"
              >
                Has the Idea.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <em className="font-serif font-normal text-primary">We Build the Rest.</em>
              </motion.div>
            </h1>
          </div>

          <div className="hero-enter flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <Button asChild size="lg" className="rounded-none uppercase tracking-[.14em] bg-white text-[#111329] hover:bg-white/90">
              <Link to="/services">
                Explore Us <ArrowDown className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none uppercase tracking-[.14em] bg-transparent text-white border-white hover:bg-white hover:text-[#111329]"
            >
              <Link to="/contact">
                Contact us <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
