import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesBenefits } from "@/components/services/ServicesBenefits";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      <main className="pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center py-12 font-oxanium">
          Our AI Bookkeeping Services
        </h1>
        <ServicesGrid />
        <ServicesBenefits />
        <ServicesProcess />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;