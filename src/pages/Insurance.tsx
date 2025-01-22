import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InsuranceServices } from "@/components/insurance/InsuranceServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet";

const Insurance = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Insurance Agency Financial Services | AI Bookkeeping</title>
        <meta 
          name="description" 
          content="Specialized AI-powered bookkeeping and financial management services for insurance agencies. From commission tracking to premium processing and compliance management." 
        />
        <meta 
          name="keywords" 
          content="insurance agency bookkeeping, commission tracking, premium processing, insurance financial services, agency compliance management" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Insurance Agency Financial Services | AI Bookkeeping" />
        <meta 
          property="og:description" 
          content="Specialized AI-powered bookkeeping and financial management services for insurance agencies." 
        />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insurance Agency Financial Services | AI Bookkeeping" />
        <meta 
          name="twitter:description" 
          content="Specialized AI-powered bookkeeping and financial management services for insurance agencies." 
        />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Insurance Agency{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for insurance agencies. 
            From commission tracking to premium processing, we help you manage your agency's finances with precision.
          </p>
        </section>

        <InsuranceServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Insurance;