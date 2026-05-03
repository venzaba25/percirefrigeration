import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const TopBar = () => (
  <div className="hidden md:block bg-navy-deep text-navy-foreground text-sm">
    <div className="container flex items-center justify-between py-2.5">
      <div className="flex items-center gap-6">
        <a href="tel:09455916515" className="flex items-center gap-2 hover:text-primary-glow transition-smooth">
          <Phone className="h-3.5 w-3.5 text-primary" /> 0945 591 6515
        </a>
        <a href="mailto:percivalaldava305@gmail.com" className="flex items-center gap-2 hover:text-primary-glow transition-smooth">
          <Mail className="h-3.5 w-3.5 text-primary" /> percivalaldava305@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-white/70">Always Open · 24/7 Service</span>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-primary-glow"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary-glow"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
