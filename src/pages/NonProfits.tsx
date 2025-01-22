import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NonProfitsServices } from "@/components/non-profits/NonProfitsServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const NonProfits = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Non-Profit Organization Bookkeeping Services | AI Bookkeeping</title>
        <meta name="description" content="Specialized AI-powered bookkeeping and financial management services for non-profit organizations. From grant tracking to donor management and compliance reporting." />
        <meta name="keywords" content="non-profit bookkeeping, grant management, donor tracking, non-profit accounting, Form 990 preparation, non-profit financial services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Non-Profit Organization Bookkeeping Services | AI Bookkeeping" />
        <meta property="og:description" content="Specialized AI-powered bookkeeping and financial management services for non-profit organizations." />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Non-Profit Organization Bookkeeping Services | AI Bookkeeping" />
        <meta name="twitter:description" content="Specialized AI-powered bookkeeping and financial management services for non-profit organizations." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
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
            Specialized bookkeeping, financial management, and compliance services designed for 
            non-profit organizations. From grant tracking to donor management, we help you 
            focus on your mission.
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