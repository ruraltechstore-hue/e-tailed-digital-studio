import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [{ href: "#services", label: "Services" }, { href: "#about", label: "About" }, { href: "#process", label: "Process" }, { href: "#contact", label: "Contact" }];
export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const close = () => setOpen(false);
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 sm:px-8 lg:px-12">
      <a href="#home" onClick={close} className="z-50 text-sm font-semibold uppercase tracking-[.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">E—TAILED <span className="text-primary">Digital India</span></a>
      <nav aria-label="Primary navigation" className="hidden items-center gap-9 md:flex">
        {links.map((link) => <a key={link.href} href={link.href} className="nav-link text-xs uppercase tracking-[.18em] text-muted-foreground">{link.label}</a>)}
      </nav>
      <Button asChild className="hidden rounded-none uppercase tracking-[.14em] md:inline-flex"><a href="#contact">Start a project <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="z-50 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    <div id="mobile-menu" className={`fixed inset-0 z-40 flex min-h-dvh flex-col justify-center bg-background px-6 transition-transform duration-500 md:hidden ${open ? "translate-y-0" : "-translate-y-full"}`} aria-hidden={!open}>
      <nav aria-label="Mobile navigation" className="space-y-3">{links.map((link, index) => <a key={link.href} href={link.href} onClick={close} tabIndex={open ? 0 : -1} className="block border-b border-border py-4 font-serif text-5xl italic" style={{ transitionDelay: `${index * 50}ms` }}>{link.label}</a>)}</nav>
      <a href="mailto:hello@etailed.in" className="mt-12 text-sm text-primary">hello@etailed.in</a>
    </div>
  </header>;
}
