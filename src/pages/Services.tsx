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
      
      <main>
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
              Our{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
                Services
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
              Discover how our AI-powered bookkeeping solutions can transform your business finances.
            </p>
          </div>
        </section>

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