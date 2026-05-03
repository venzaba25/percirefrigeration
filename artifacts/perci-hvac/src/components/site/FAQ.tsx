import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much do your services cost?", a: "Our pricing is transparent and upfront. Standard diagnostics start at ₱500, with repairs quoted before any work begins. Free estimates are available for installations." },
  { q: "How fast can you respond to a service call?", a: "For emergencies in Cebu City and Consolacion, we typically dispatch a technician within 60 minutes. Standard appointments are usually same-day or next-day." },
  { q: "Are you available on weekends and holidays?", a: "Yes! We're always open — 24/7, including weekends and holidays. Emergency service is available anytime you need us." },
  { q: "Do you offer a warranty on your work?", a: "Absolutely. All repairs come with a 90-day workmanship warranty, and installations include a 1-year labor warranty plus full manufacturer warranty on parts." },
  { q: "Which areas do you serve?", a: "We serve all of Metro Cebu including Cebu City, Consolacion, Mandaue, Lapu-Lapu, Talisay and surrounding areas." },
];

const FAQ = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-4xl">
      <div className="text-center">
        <span className="section-eyebrow justify-center"><span className="h-1 w-6 bg-primary rounded-full" /> FAQ</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy">
          Frequently Asked <span className="text-primary">Questions.</span>
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-border rounded-2xl px-6 shadow-card">
            <AccordionTrigger className="text-left font-display font-bold text-navy hover:no-underline py-5">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
