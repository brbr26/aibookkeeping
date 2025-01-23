import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LawFirmServices } from "@/components/law-firms/LawFirmServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Law Firm Bookkeeping & Trust Account Management | AI Bookkeeping</title>
        <meta name="description" content="Expert bookkeeping services for law firms. Manage trust accounts, track billable hours, and ensure compliance with automated AI-powered financial solutions." />
        <meta name="keywords" content="law firm bookkeeping, legal accounting, trust account management, IOLTA compliance, law firm financial services" />
        <meta property="og:title" content="Law Firm Bookkeeping & Trust Account Management | AI Bookkeeping" />
        <meta property="og:description" content="Expert bookkeeping services for law firms. Manage trust accounts and ensure compliance with AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Law Firm Bookkeeping & Trust Account Management" />
        <meta name="twitter:description" content="Expert bookkeeping services for law firms with AI-powered solutions." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/law-firms" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Legal Practice{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping, accounting, and tax services designed for law firms. 
            From trust account management to partner compensation, we ensure your practice's 
            financial operations meet the highest standards of accuracy and compliance.
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