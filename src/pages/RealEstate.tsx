import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RealEstateServices } from "@/components/real-estate/RealEstateServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Real Estate Investment & Property Management Financial Services | AI Bookkeeping</title>
        <meta name="description" content="Comprehensive financial management for real estate investors and property managers. Track rental income, manage expenses, and optimize ROI with AI-powered solutions." />
        <meta name="keywords" content="real estate bookkeeping, property management accounting, rental property finances, real estate investment tracking, property portfolio management" />
        <meta property="og:title" content="Real Estate Investment & Property Management Financial Services | AI Bookkeeping" />
        <meta property="og:description" content="Comprehensive financial management for real estate investors and property managers." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Investment & Property Management Services" />
        <meta name="twitter:description" content="Comprehensive financial management for real estate." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/real-estate" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Real Estate{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for real estate investors and property managers. 
            From property expense tracking to tenant management, we help you maximize your real estate portfolio's performance.
          </p>
        </section>

        <RealEstateServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default RealEstate;