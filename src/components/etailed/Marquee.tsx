const words = ["Strategy", "Identity", "Experience", "Commerce", "Content", "Growth"];
export function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-border py-5" aria-label="Our disciplines">
      <div className="marquee-track flex w-max items-center">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center font-serif text-3xl italic text-muted-foreground sm:text-5xl"
          >
            <span className="mx-7 size-1.5 rounded-full bg-primary sm:mx-12" aria-hidden="true" />
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
