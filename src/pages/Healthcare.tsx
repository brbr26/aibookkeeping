import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HealthcareServices } from "@/components/healthcare/HealthcareServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      <main className="pt-20">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Healthcare{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for healthcare providers.
            From medical billing to insurance claims management, we help you optimize your practice's finances.
          </p>
        </section>
        <HealthcareServices />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Healthcare;