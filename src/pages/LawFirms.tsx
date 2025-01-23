import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LawFirmServices } from "@/components/law-firms/LawFirmServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Law Firm Financial Management | AI-Powered Legal Bookkeeping</title>
        <meta name="description" content="Specialized financial services for law firms. Manage trust accounts, track billable hours, and ensure compliance with AI-powered bookkeeping solutions." />
        <meta name="keywords" content="law firm bookkeeping, legal accounting, trust account management, IOLTA compliance, legal billing software" />
        <meta property="og:title" content="Law Firm Financial Management | AI Bookkeeping" />
        <meta property="og:description" content="Transform your law firm's financial management with AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/law-firms" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Law Firm Financial Management" />
        <meta name="twitter:description" content="AI-powered bookkeeping for legal practices." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/law-firms" />
      </Helmet>
      
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
            Specialized bookkeeping and financial management services designed for law firms. 
            From trust accounting to billable hours tracking, we help you manage your practice's finances with precision.
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