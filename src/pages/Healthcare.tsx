import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HealthcareServices } from "@/components/healthcare/HealthcareServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <SEO 
        title="Healthcare Financial Services | AI Bookkeeping"
        description="Specialized AI-powered bookkeeping, accounting, and financial management services tailored for healthcare practices. From medical billing to HIPAA compliance."
        keywords="healthcare bookkeeping, medical practice accounting, healthcare financial services, medical billing, HIPAA compliant bookkeeping"
        ogImage="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png"
      />
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Healthcare Practice{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping, accounting, and financial management services designed for healthcare practices. 
            From medical billing integration to HIPAA compliance, we ensure your practice's finances are handled with precision and care.
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