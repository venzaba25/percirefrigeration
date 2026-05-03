import { ArrowRight, Phone, Play, Users, Award, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/image_1777778845683_1777822578871.png";

const Hero = () => (
  <section id="home" className="relative bg-gradient-hero text-navy-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(var(--primary)/.4), transparent 40%)'
    }} />
    <div className="container relative pt-12 pb-24 lg:pb-32">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="section-eyebrow"><span className="h-1 w-6 bg-primary rounded-full" /> Welcome to CoolFix</span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Expert Air Conditioning & Refrigeration Services You Can Trust
          </h1>
        </div>
        <div className="lg:pt-14 space-y-6">
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            Fast, reliable HVAC repair, installation and 24/7 emergency service across Cebu. Licensed technicians, transparent pricing, work guaranteed.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#contact">Get Free Quote <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-navy">
              <a href="tel:09455916515"><Phone className="h-4 w-4" /> 0945 591 6515</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative mt-10 rounded-3xl overflow-hidden shadow-soft">
        <img src={heroImg} alt="Expert HVAC technicians servicing industrial air conditioning" width={1280} height={720} className="w-full h-[280px] md:h-[460px] object-cover object-[25%_top]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />

        {/* Stat badge */}
        <div className="absolute bottom-6 left-6 bg-navy/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
          <div className="text-3xl md:text-4xl font-extrabold">15K+</div>
          <div className="text-xs text-white/70 uppercase tracking-wider">Completed Projects</div>
        </div>

        {/* Play button */}
        <button className="absolute top-6 right-6 h-14 w-14 rounded-full bg-primary grid place-items-center shadow-orange hover:scale-110 transition-smooth animate-float" aria-label="Play video">
          <Play className="h-5 w-5 text-white fill-white" />
        </button>

        {/* Social rail */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
          {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
            <a key={i} href="#" className="h-10 w-10 rounded-full bg-primary grid place-items-center text-white hover:scale-110 transition-smooth">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-8 grid md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/50 text-sm font-semibold tracking-widest">
          <span>★ LICENSED</span>
          <span>★ INSURED</span>
          <span>★ 24/7</span>
          <span>★ WARRANTY</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 flex items-center gap-3 text-navy">
            <div className="h-12 w-12 rounded-full bg-accent grid place-items-center"><Users className="h-5 w-5 text-primary" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Customer</div>
              <div className="font-bold">Satisfaction</div>
            </div>
          </div>
          <div className="bg-gradient-orange rounded-2xl p-4 flex items-center gap-3 text-white shadow-orange">
            <div className="h-12 w-12 rounded-full bg-white/20 grid place-items-center"><Award className="h-5 w-5" /></div>
            <div>
              <div className="text-xl font-extrabold leading-none">15+</div>
              <div className="text-xs">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
