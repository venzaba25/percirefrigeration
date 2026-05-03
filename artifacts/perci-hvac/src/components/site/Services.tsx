import { Flame, Wind, Droplets, Snowflake, ArrowRight } from "lucide-react";
import heating from "@/assets/service-heating.jpg";
import ventilation from "@/assets/service-ventilation.jpg";
import installation from "@/assets/service-installation.jpg";
import cooling from "@/assets/service-cooling.jpg";

const services = [
  { title: "AC Repair Services", desc: "Fast diagnosis and repair for all AC brands. Same-day service available.", img: heating, Icon: Flame },
  { title: "Refrigeration", desc: "Commercial freezer and cold storage repair, maintenance and installation.", img: ventilation, Icon: Wind },
  { title: "Installation Service", desc: "Expert split-type and central AC installation by licensed technicians.", img: installation, Icon: Droplets },
  { title: "Cooling & Cleaning", desc: "Deep cleaning, gas refill and tune-ups to keep your system efficient.", img: cooling, Icon: Snowflake },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-gradient-warm">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="section-eyebrow justify-center"><span className="h-1 w-6 bg-primary rounded-full" /> Our Services</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy">
          Our Expert HVAC <span className="text-primary">Services.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Complete air-conditioning and refrigeration solutions for homes, offices and businesses across Cebu — backed by warranty and 24/7 emergency support.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, desc, img, Icon }) => (
          <article key={title} className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-orange transition-smooth hover:-translate-y-1">
            <div className="relative">
              <img src={img} alt={title} loading="lazy" width={640} height={512} className="w-full h-48 object-cover" />
              <span className="absolute top-3 right-3 h-11 w-11 rounded-full bg-gradient-orange grid place-items-center shadow-orange">
                <Icon className="h-5 w-5 text-white" />
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Read More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
