import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/perci-logo.jpg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Perci Refrigeration logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30 shadow-orange" />
          <span className="font-display text-lg sm:text-xl font-extrabold text-navy leading-tight">
            Perci Refrigeration<span className="block text-[10px] font-semibold text-primary tracking-widest uppercase">& Airconditioning</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-navy/80 hover:text-primary transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="hero" className="hidden sm:inline-flex">
            <a href="#contact">Book Now <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 px-2 rounded-md hover:bg-muted font-semibold text-navy">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
