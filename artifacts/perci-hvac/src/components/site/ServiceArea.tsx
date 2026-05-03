import { MapPin } from "lucide-react";

const areas = ["Cebu City", "Consolacion", "Mandaue", "Lapu-Lapu", "Talisay", "Liloan", "Minglanilla", "Compostela"];

const ServiceArea = () => (
  <section className="py-16 bg-navy text-navy-foreground">
    <div className="container text-center">
      <span className="section-eyebrow justify-center"><span className="h-1 w-6 bg-primary rounded-full" /> Service Area</span>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">Proudly serving Metro Cebu</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {areas.map((a) => (
          <span key={a} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-smooth">
            <MapPin className="h-3.5 w-3.5 text-primary" /> {a}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceArea;
