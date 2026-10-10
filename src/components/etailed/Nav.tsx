import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About" },
  { to: "/partner" as const, label: "Partner with us" },
  { to: "/careers" as const, label: "Careers" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/contact" as const, label: "Contact" },
];
export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header className="fixed inset-x-4 md:inset-x-8 top-4 z-40 rounded-full border border-border/60 bg-background/80 backdrop-blur-xl max-w-6xl mx-auto shadow-sm">
      <div className="mx-auto flex h-14 md:h-16 items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          onClick={close}
          className="z-50 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mr-auto"
        >
          <img src={logo} alt="E-Tailed Digital India Logo" className="w-8 h-8 rounded-md object-contain shrink-0 shadow-md" />
          <span className="text-sm font-semibold uppercase tracking-[.18em] whitespace-nowrap drop-shadow-md">
            E-TAILED Digital India
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:gap-9 md:flex mr-6 lg:mr-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-foreground" }}
              className="nav-link text-[12px] lg:text-[13px] font-medium tracking-wide text-muted-foreground whitespace-nowrap transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4 z-50">
          <a
            href="https://wa.me/919392898733"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-[#1B1D38]/80 backdrop-blur-md border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:bg-[#111329]/95 text-white hover:text-white rounded-full px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[.15em] transition-all hover:scale-105 active:scale-95 group"
          >
            Let's Talk
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex min-h-dvh flex-col justify-center bg-background px-6 transition-transform duration-500 md:hidden ${open ? "translate-y-0" : "-translate-y-full"}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation" className="space-y-3">
          {links.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={close}
              tabIndex={open ? 0 : -1}
              className="block border-b border-border py-4 font-serif text-5xl italic"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a href="mailto:hello@etailed.in" className="mt-12 text-sm text-primary">
          hello@etailed.in
        </a>
      </div>
    </header>
  );
}
