import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <>
    {/* Mobile sticky call bar */}
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white border-t border-border shadow-soft p-3 flex gap-2">
      <a href="tel:09455916515" className="flex-1 bg-gradient-orange text-white rounded-xl py-3 font-bold flex items-center justify-center gap-2 shadow-orange">
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a href="https://wa.me/639455916515" target="_blank" rel="noreferrer" className="flex-1 bg-navy text-white rounded-xl py-3 font-bold flex items-center justify-center gap-2">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>

    {/* Desktop floating WhatsApp */}
    <a
      href="https://wa.me/639455916515"
      target="_blank"
      rel="noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-30 h-14 w-14 rounded-full bg-[#25D366] text-white items-center justify-center shadow-orange hover:scale-110 transition-smooth animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  </>
);

export default FloatingCTA;
