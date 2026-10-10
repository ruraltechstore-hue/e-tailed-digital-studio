import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { services, type Service } from "./servicesData";
import { useNavigate } from "@tanstack/react-router";

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    let animationFrameId: number;
    const scroll = () => {
      if (!isHovered.current && !isDown && scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        // Simple seamless loop by resetting when reaching end
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDown]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    isHovered.current = false;
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const navigate = useNavigate();

  const handleCardClick = (service: Service) => {
    if (!isDragging) {
      navigate({ 
        to: '/services', 
        hash: service.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() 
      });
    }
  };

  // Duplicate services to ensure smooth auto-scrolling
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section 
      id="services" 
      aria-labelledby="services-title" 
      className="relative w-full bg-background py-16 md:py-24 overflow-hidden"
    >
      {/* Intro */}
      <div className="px-6 md:px-12 lg:px-16 mb-16 mx-auto max-w-screen-2xl">
        <motion.h2 
          id="services-title" 
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          Our digital and
          <br />
          <em className="font-serif font-normal italic text-muted-foreground">professional ecosystem</em>
        </motion.h2>
      </div>

      {/* Horizontal Scroll Track */}
      <div 
        ref={scrollRef}
        className="flex gap-8 md:gap-10 overflow-x-auto px-6 md:px-12 lg:px-16 pb-12 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <style dangerouslySetInnerHTML={{__html: `
          #services .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}} />

        {duplicatedServices.map((service, index) => (
          <div 
            key={`${service.number}-${index}`} 
            className="w-[75vw] max-w-[320px] md:w-[300px] lg:w-[320px] h-[350px] md:h-[380px] shrink-0 group relative overflow-hidden rounded-3xl bg-muted snap-start transition-transform duration-300 border border-border/50"
            onClick={() => handleCardClick(service)}
          >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 bg-[#111329]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111329]/80 via-[#111329]/20 to-transparent z-10 pointer-events-none" />
            <img 
              src={service.image} 
              alt={service.alt} 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            
            {/* Card Content */}
            <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end text-white select-none pointer-events-none">
              <div className="mb-auto flex justify-between items-start pointer-events-auto">
                 <span className="text-xl font-medium text-white/90">{service.number}</span>
                 <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300 border border-white/20">
                   <ArrowUpRight className="size-5" />
                 </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl italic mb-4">{service.name}</h3>
              <p className="text-white/80 text-base md:text-lg max-w-sm line-clamp-2 md:line-clamp-none">
                {service.short}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
