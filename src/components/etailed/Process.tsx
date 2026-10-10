import { Reveal } from "./Reveal";
const steps = [
  { n: "01", t: "Discover", d: "Find the opportunity." },
  { n: "02", t: "Define", d: "Set the direction." },
  { n: "03", t: "Create", d: "Design and build." },
  { n: "04", t: "Evolve", d: "Learn and improve." },
];
export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-shell bg-surface">
      <Reveal className="section-intro">
        <p className="eyebrow">Process</p>
        <h2 id="process-title" className="section-title">
          Four clear
          <br />
          <em>stages.</em>
        </h2>
        <p className="section-copy">Focused from start to finish.</p>
      </Reveal>
      <div className="mt-16 grid border-y border-border sm:mt-24 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 90}
            className="process-cell border-b border-border p-6 md:odd:border-r xl:border-b-0 xl:border-r xl:last:border-r-0"
          >
            <span className="text-xs text-primary">{step.n}</span>
            <h3 className="mt-16 font-serif text-4xl italic">{step.t}</h3>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">{step.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
