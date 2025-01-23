import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LawFirmServices } from "@/components/law-firms/LawFirmServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Law Firm{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for legal practices. 
            From trust accounting to case cost tracking.
          </p>
        </section>

        <LawFirmServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default LawFirms;