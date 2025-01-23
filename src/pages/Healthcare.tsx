import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HealthcareServices } from "@/components/healthcare/HealthcareServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Healthcare Financial Management | AI-Powered Medical Bookkeeping</title>
        <meta name="description" content="Specialized AI bookkeeping solutions for healthcare providers. Streamline medical billing, insurance claims, and financial compliance with automated accuracy." />
        <meta name="keywords" content="healthcare bookkeeping, medical practice accounting, insurance billing, HIPAA compliance, medical financial management" />
        <link rel="canonical" href="https://aibookkeeping.com/healthcare" />
        <meta property="og:title" content="Healthcare Financial Management | AI Bookkeeping" />
        <meta property="og:description" content="Streamline your healthcare practice finances with AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/healthcare" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Financial Management" />
        <meta name="twitter:description" content="AI-powered bookkeeping for medical practices." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
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