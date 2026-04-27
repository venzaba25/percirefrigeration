import { Snowflake, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-deep text-navy-foreground pt-16 pb-8">
    <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <span className="h-10 w-10 rounded-xl bg-gradient-orange grid place-items-center"><Snowflake className="h-5 w-5 text-white" /></span>
          <span className="font-display text-2xl font-extrabold">CoolFix<span className="text-primary">.</span></span>
        </a>
        <p className="mt-4 text-sm text-white/60 leading-relaxed">Cebu's trusted air conditioning and refrigeration specialists. Licensed, insured and available 24/7.</p>
        <div className="mt-5 flex gap-3">
          {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
            <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 grid place-items-center hover:bg-primary transition-smooth"><Icon className="h-4 w-4" /></a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-white/60">
          {["About", "Services", "Why Us", "Reviews", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase().replace(' ', '')}`} className="hover:text-primary">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold mb-4">Services</h4>
        <ul className="space-y-2 text-sm text-white/60">
          {["AC Repair", "AC Installation", "Refrigeration", "Cleaning & Tune-up", "24/7 Emergency"].map((l) => (
            <li key={l}><a href="#services" className="hover:text-primary">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold mb-4">Contact</h4>
        <ul className="space-y-3 text-sm text-white/70">
          <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> District 2 Pulpogan, Consolacion (near TARIAN), Cebu City</li>
          <li className="flex gap-3"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /> <a href="tel:09455916515" className="hover:text-primary">0945 591 6515</a></li>
          <li className="flex gap-3"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /> <a href="mailto:percivalaldava305@gmail.com" className="hover:text-primary break-all">percivalaldava305@gmail.com</a></li>
        </ul>
      </div>
    </div>

    <div className="container mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/50">
      © {new Date().getFullYear()} CoolFix HVAC. All rights reserved.
    </div>
  </footer>
);

export default Footer;
