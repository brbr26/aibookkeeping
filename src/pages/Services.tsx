import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>AI-Powered Bookkeeping Services | AI Bookkeeping</title>
        <meta name="description" content="Discover our comprehensive AI-powered bookkeeping services including automated bookkeeping, financial reporting, tax preparation, and real-time monitoring. Transform your business finances with cutting-edge AI technology." />
        <meta name="keywords" content="ai bookkeeping, automated bookkeeping, financial reporting, tax preparation, real-time monitoring, compliance management, financial advisory, business finance, ai technology" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI-Powered Bookkeeping Services | AI Bookkeeping" />
        <meta property="og:description" content="Discover our comprehensive AI-powered bookkeeping services including automated bookkeeping, financial reporting, tax preparation, and real-time monitoring." />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Bookkeeping Services | AI Bookkeeping" />
        <meta name="twitter:description" content="Discover our comprehensive AI-powered bookkeeping services including automated bookkeeping, financial reporting, tax preparation, and real-time monitoring." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Our{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text font-oxanium">
              Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Leverage cutting-edge AI technology to streamline your bookkeeping processes and gain valuable business insights.
          </p>
        </section>

        <ServicesGrid />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Services;