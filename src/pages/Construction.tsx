import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConstructionServices } from "@/components/construction/ConstructionServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Construction = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Construction Industry Financial Services | AI Bookkeeping</title>
        <meta name="description" content="Specialized bookkeeping services for construction companies. Track project costs, manage payroll, and optimize cash flow with AI-powered financial solutions." />
        <meta name="keywords" content="construction bookkeeping, contractor accounting, project cost tracking, construction payroll, job costing" />
        <meta property="og:title" content="Construction Industry Financial Services | AI Bookkeeping" />
        <meta property="og:description" content="Specialized bookkeeping services for construction companies. Optimize operations with AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Construction Industry Financial Services" />
        <meta name="twitter:description" content="Specialized bookkeeping services for construction companies." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/construction" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Construction{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping, accounting, and financial management services designed for construction companies. 
            From project cost tracking to payroll management, we ensure your finances are managed with precision.
          </p>
        </section>

        <ConstructionServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Construction;