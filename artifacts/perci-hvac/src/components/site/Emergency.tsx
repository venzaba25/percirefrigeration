import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Emergency = () => (
  <section className="py-12">
    <div className="container">
      <div className="bg-gradient-orange rounded-3xl p-8 md:p-12 shadow-orange flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        <div className="flex items-center gap-5">
          <span className="h-16 w-16 rounded-2xl bg-white/20 grid place-items-center shrink-0">
            <AlertTriangle className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold">24/7 Emergency AC & Refrigeration Service</h3>
            <p className="text-white/90 mt-1">Cebu's fastest response — we're always open, always ready.</p>
          </div>
        </div>
        <Button asChild size="lg" className="bg-navy text-white hover:bg-navy-deep h-14 px-8 text-base">
          <a href="tel:09455916515"><Phone className="h-5 w-5" /> Call 0945 591 6515</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Emergency;
