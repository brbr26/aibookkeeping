import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LawFirmServices } from "@/components/law-firms/LawFirmServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Law Firm Bookkeeping & Accounting Services | AI Bookkeeping</title>
        <meta name="description" content="Specialized AI-powered bookkeeping, accounting, and tax services tailored for law firms. Trust account management, case cost accounting, and regulatory compliance solutions." />
        <meta name="keywords" content="law firm bookkeeping, legal accounting services, trust account management, IOLTA compliance, law firm tax services, legal practice accounting" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Law Firm Bookkeeping & Accounting Services | AI Bookkeeping" />
        <meta property="og:description" content="Specialized AI-powered bookkeeping, accounting, and tax services tailored for law firms." />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Law Firm Bookkeeping & Accounting Services | AI Bookkeeping" />
        <meta name="twitter:description" content="Specialized AI-powered bookkeeping, accounting, and tax services tailored for law firms." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
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