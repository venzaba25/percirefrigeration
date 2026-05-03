import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Maria Santos", role: "Homeowner, Consolacion", text: "Booked online at 9pm — they arrived the next morning, fixed our AC quickly and cleaned up after. Honest pricing and very professional team!" },
  { name: "John Reyes", role: "Restaurant Owner, Cebu City", text: "Our walk-in freezer broke down during peak hours. CoolFix was on-site within 45 minutes and saved our inventory. Highly recommended!" },
  { name: "Anna Dela Cruz", role: "Office Manager, Mandaue", text: "We hired them for full office AC installation — clean work, on schedule, and the units run quietly. Best HVAC team in Cebu, hands down." },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-gradient-warm">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="section-eyebrow justify-center"><span className="h-1 w-6 bg-primary rounded-full" /> Testimonials</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy">
          What Our Customers <span className="text-primary">Say.</span>
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <article key={r.name} className="bg-white rounded-3xl p-7 shadow-card relative">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/15" />
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="mt-4 text-navy/80 leading-relaxed">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
              <span className="h-11 w-11 rounded-full bg-gradient-orange grid place-items-center text-white font-bold">{r.name[0]}</span>
              <div>
                <div className="font-bold text-navy">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
