import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/etailed-hero.jpg";

export function Hero() {
  return <section id="home" aria-labelledby="hero-title" className="relative flex min-h-[96svh] items-end overflow-hidden pt-28 text-primary-foreground">
    <img src={heroImage} alt="" width={1600} height={1008} className="hero-image absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative mx-auto w-full max-w-screen-2xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12">
        <p className="hero-enter mb-6 text-xs uppercase tracking-[.24em] text-primary">Digital studio</p>
      <h1 id="hero-title" className="hero-enter max-w-6xl text-[clamp(3.4rem,9.5vw,9rem)] font-medium leading-[.86]">Built to<br /><em className="font-serif font-normal text-primary">stand apart.</em></h1>
      <div className="hero-enter mt-9 flex flex-col gap-6 border-t border-primary-foreground/20 pt-7 md:flex-row md:items-end md:justify-between">
        <p className="max-w-lg text-base leading-7 text-primary-foreground/65 sm:text-lg">Brand, product and growth.</p>
        <div className="flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-none uppercase tracking-[.14em]"><Link to="/services">Explore work <ArrowDown /></Link></Button><Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-[.14em]"><Link to="/contact">Contact us <ArrowUpRight /></Link></Button></div>
      </div>
      <dl className="hero-enter mt-12 grid grid-cols-3 gap-3 border-t border-primary-foreground/20 pt-5 sm:max-w-xl">
        {[['08','Services'],['05','Markets'],['01','Studio']].map(([value,label]) => <div key={label}><dt className="font-serif text-3xl italic text-primary sm:text-4xl">{value}</dt><dd className="mt-1 text-[10px] uppercase tracking-[.14em] text-primary-foreground/55 sm:text-xs">{label}</dd></div>)}
      </dl>
    </div>
  </section>;
}
