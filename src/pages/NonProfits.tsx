import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NonProfitsServices } from "@/components/non-profits/NonProfitsServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const NonProfits = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Non-Profit Financial Management | AI-Powered Bookkeeping Solutions</title>
        <meta name="description" content="Specialized financial services for non-profits. Manage grants, track donations, and ensure compliance with AI-powered bookkeeping solutions designed for non-profit organizations." />
        <meta name="keywords" content="non-profit bookkeeping, grant management, donation tracking, non-profit accounting, financial compliance" />
        <meta property="og:title" content="Non-Profit Financial Management | AI Bookkeeping" />
        <meta property="og:description" content="Transform your non-profit's financial management with AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/non-profits" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Non-Profit Financial Management" />
        <meta name="twitter:description" content="AI-powered bookkeeping for non-profit organizations." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/non-profits" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Non-Profit{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for non-profit organizations. 
            From grant management to donor tracking, we help you optimize your organization's finances.
          </p>
        </section>

        <NonProfitsServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default NonProfits;