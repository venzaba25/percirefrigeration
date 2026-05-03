import Header from "@/components/site/Header";
import TopBar from "@/components/site/TopBar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Emergency from "@/components/site/Emergency";
import Testimonials from "@/components/site/Testimonials";
import ContactForm from "@/components/site/ContactForm";
import FAQ from "@/components/site/FAQ";
import ServiceArea from "@/components/site/ServiceArea";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Emergency />
        <Testimonials />
        <ContactForm />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
