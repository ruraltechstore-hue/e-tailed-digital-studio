import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services, type Service } from "./services";
import { ServiceModal } from "./ServiceModal";
import { Reveal } from "./Reveal";

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null);
  return <section id="services" aria-labelledby="services-title" className="section-shell bg-background">
    <Reveal className="section-intro"><p className="eyebrow">Services</p><h2 id="services-title" className="section-title">From idea<br /><em>to impact.</em></h2><p className="section-copy">Strategy, design and technology.</p></Reveal>
    <div className="mt-16 border-t border-border sm:mt-24">
      {services.map((service, index) => <Reveal key={service.number} delay={index * 45}><button type="button" onClick={() => setSelected(service)} className="service-row group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-border py-6 text-left sm:grid-cols-[5rem_1fr_2fr_auto] sm:items-center sm:py-8">
        <span className="text-xs text-primary">{service.number}</span><span className="font-serif text-2xl italic sm:text-4xl">{service.name}</span><span className="col-start-2 max-w-lg text-sm leading-6 text-muted-foreground sm:col-start-auto">{service.short}</span><span className="col-start-3 row-start-1 flex size-10 items-center justify-center border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:col-start-auto"><ArrowUpRight className="size-4" aria-hidden="true" /></span>
      </button></Reveal>)}
    </div>
    <ServiceModal service={selected} open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelected(null); }} />
  </section>;
}
