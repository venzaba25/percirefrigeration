import { Check, Phone, ArrowRight, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const features = [
  "Air conditioner installing",
  "Cooler dust cleaning",
  "24/7 support technician",
  "Test compressor heat",
  "Thermostat replacement",
  "Refrigeration repair",
];

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      {/* Image collage */}
      <div className="grid grid-cols-2 gap-4 relative">
        <div className="space-y-4">
          <div className="bg-muted rounded-2xl p-6 shadow-card">
            <h3 className="font-display font-bold text-lg text-navy">Fast & Reliable Service</h3>
            <p className="text-sm text-muted-foreground mt-2">Same-day response for repairs and emergency calls in Cebu.</p>
            <div className="mt-4 h-12 w-12 rounded-full bg-gradient-orange grid place-items-center shadow-orange">
              <Wind className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card relative">
            <img src={about2} alt="HVAC ductwork installation" loading="lazy" width={640} height={640} className="w-full h-56 object-cover" />
            <div className="absolute bottom-3 left-3 h-20 w-20 rounded-full bg-white grid place-items-center shadow-orange">
              <span className="text-[10px] text-navy font-bold leading-tight text-center">BUILD A<br/>SUCCESS<br/>BRAND</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 pt-10">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={about1} alt="HVAC technicians at work" loading="lazy" width={640} height={640} className="w-full h-72 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={about3} alt="Outdoor AC condenser service" loading="lazy" width={640} height={640} className="w-full h-44 object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <span className="section-eyebrow"><span className="h-1 w-6 bg-primary rounded-full" /> About Us</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
          Professional AC Installation <br/><span className="text-primary">You Can Trust</span>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          With 15+ years serving Cebu City and Consolacion, our certified technicians deliver expert installation, maintenance and repair for residential and commercial air conditioning and refrigeration systems.
        </p>

        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-navy">
              <span className="h-6 w-6 rounded-full bg-primary grid place-items-center shrink-0">
                <Check className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-sm font-medium">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 bg-muted rounded-2xl p-6">
          <h4 className="font-display text-lg font-bold text-navy">Innovating For Your Comfort</h4>
          <p className="text-sm text-muted-foreground mt-2">From single split units to full commercial refrigeration — we design, install, and maintain systems built to last.</p>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <Button asChild variant="hero">
              <a href="#contact">Learn More <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <a href="tel:09455916515" className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-full bg-navy grid place-items-center text-white"><Phone className="h-4 w-4" /></span>
              <span>
                <span className="block text-xs text-muted-foreground">Call for Free:</span>
                <span className="block font-bold text-navy">0945 591 6515</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
