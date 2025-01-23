import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InsuranceServices } from "@/components/insurance/InsuranceServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Insurance = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Insurance Agency Financial Management | AI Bookkeeping</title>
        <meta name="description" content="Specialized financial services for insurance agencies. Track commissions, manage policy renewals, and optimize agency operations with AI-powered bookkeeping solutions." />
        <meta name="keywords" content="insurance agency bookkeeping, commission tracking, policy management, insurance financial services, agency compliance" />
        <meta property="og:title" content="Insurance Agency Financial Management | AI Bookkeeping" />
        <meta property="og:description" content="Specialized financial services for insurance agencies. Optimize operations with AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insurance Agency Financial Management" />
        <meta name="twitter:description" content="Specialized financial services for insurance agencies." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/insurance" />
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