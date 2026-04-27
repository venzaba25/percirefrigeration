import { Clock, ShieldCheck, Wallet, BadgeCheck } from "lucide-react";

const items = [
  { Icon: Clock, title: "Fast Response", desc: "Technicians dispatched within the hour for urgent repairs." },
  { Icon: Wallet, title: "Transparent Pricing", desc: "Upfront quotes — no hidden fees, ever." },
  { Icon: BadgeCheck, title: "Skilled Professionals", desc: "Licensed, insured and continuously trained team." },
  { Icon: ShieldCheck, title: "Work Warranty", desc: "Every repair and installation backed by our guarantee." },
];

const WhyUs = () => (
  <section id="why" className="py-20 md:py-28 bg-navy text-navy-foreground">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-10 items-end mb-12">
        <div>
          <span className="section-eyebrow"><span className="h-1 w-6 bg-primary rounded-full" /> Why Choose Us</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold">Cool comfort. <span className="text-primary">Trusted service.</span></h2>
        </div>
        <p className="text-white/70">Cebu families and businesses choose CoolFix for honest pricing, fast response, and work that lasts. Here's what sets us apart.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-smooth">
            <span className="h-12 w-12 rounded-xl bg-gradient-orange grid place-items-center shadow-orange">
              <Icon className="h-5 w-5 text-white" />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-white/65">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
