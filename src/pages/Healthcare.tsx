import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HealthcareServices } from "@/components/healthcare/HealthcareServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Healthcare Financial Services | AI Bookkeeping</title>
        <meta name="description" content="Specialized AI-powered bookkeeping, accounting, and financial management services tailored for healthcare practices. From medical billing to HIPAA compliance." />
        <meta name="keywords" content="healthcare bookkeeping, medical practice accounting, healthcare financial services, medical billing, HIPAA compliant bookkeeping" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Financial Services | AI Bookkeeping" />
        <meta property="og:description" content="Specialized AI-powered bookkeeping, accounting, and financial management services tailored for healthcare practices." />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Financial Services | AI Bookkeeping" />
        <meta name="twitter:description" content="Specialized AI-powered bookkeeping, accounting, and financial management services tailored for healthcare practices." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      
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