import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Service } from "./servicesData";

export function ServiceModal({
  service,
  open,
  onOpenChange,
}: {
  service: Service | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!service) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto border-border bg-background p-0 sm:rounded-none">
        <div className="grid md:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-72 md:min-h-[620px]">
            <img
              src={service.image}
              alt={service.alt}
              loading="lazy"
              width={1200}
              height={1504}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-overlay" />
            <span className="absolute bottom-7 left-7 font-serif text-6xl italic text-foreground/80">
              {service.number}
            </span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12">
            <p className="mb-5 text-xs uppercase tracking-[.22em] text-primary">
              Service / {service.number}
            </p>
            <DialogTitle className="font-serif text-4xl font-normal italic leading-none sm:text-6xl">
              {service.name}
            </DialogTitle>
            <DialogDescription className="mt-7 text-base leading-7 text-muted-foreground">
              {service.description}
            </DialogDescription>
            <ul className="my-9 space-y-4 border-y border-border py-6">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-sm">
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="default"
              size="lg"
              className="w-fit rounded-none px-6 uppercase tracking-[.16em]"
            >
              <Link to="/contact" onClick={() => onOpenChange(false)}>
                Start a project <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
