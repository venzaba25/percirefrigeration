import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  service: z.string().trim().min(2, "Select a service").max(60),
  message: z.string().trim().max(500).optional(),
});

const services = ["AC Repair", "AC Installation", "Refrigeration", "Cleaning & Tune-up", "Emergency Service", "Other"];

const ContactForm = () => {
  const [data, setData] = useState({ name: "", phone: "", service: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      toast({ title: "Please check your details", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    const text = `Hi CoolFix! I'd like a quote.%0AName: ${data.name}%0APhone: ${data.phone}%0AService: ${data.service}%0AMessage: ${data.message || "-"}`;
    window.open(`https://wa.me/639455916515?text=${text}`, "_blank");
    toast({ title: "Request sent!", description: "We'll respond within minutes." });
    setData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container grid lg:grid-cols-2 gap-10">
        {/* Info */}
        <div className="bg-navy text-navy-foreground rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <span className="section-eyebrow"><span className="h-1 w-6 bg-primary rounded-full" /> Get In Touch</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">Get a Free Quote in Minutes</h2>
            <p className="mt-3 text-white/70">Tell us what you need — we respond within minutes during business hours.</p>

            <div className="mt-8 space-y-5">
              {[
                { Icon: MapPin, label: "Visit Us", value: "District 2 Pulpogan, Consolacion (near TARIAN), Cebu City, Philippines" },
                { Icon: Phone, label: "Call Us", value: "0945 591 6515", href: "tel:09455916515" },
                { Icon: Mail, label: "Email Us", value: "percivalaldava305@gmail.com", href: "mailto:percivalaldava305@gmail.com" },
                { Icon: Clock, label: "Hours", value: "Always Open · 24/7 Service" },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center shrink-0"><Icon className="h-4 w-4 text-primary" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
                    {href ? (
                      <a href={href} className="font-semibold hover:text-primary-glow">{value}</a>
                    ) : (
                      <div className="font-semibold">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 bg-primary/15 text-primary-glow px-4 py-2 rounded-full text-sm font-semibold">
              ⚡ Online booking · Reservations available
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="bg-white rounded-3xl shadow-card p-8 md:p-10 border border-border">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-navy">Request a Free Quote</h3>
          <p className="text-sm text-muted-foreground mt-2">We respond within minutes — no obligation.</p>

          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Juan Dela Cruz" maxLength={80} />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="0945 000 0000" maxLength={20} />
            </div>
            <div>
              <Label htmlFor="service">Service Needed</Label>
              <select
                id="service"
                value={data.service}
                onChange={(e) => setData({ ...data, service: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a service</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea id="message" value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="Tell us about your AC issue..." maxLength={500} rows={4} />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Get Free Quote <Send className="h-4 w-4" />
            </Button>
            <p className="text-xs text-center text-muted-foreground">⚡ We respond within minutes</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
