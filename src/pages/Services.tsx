import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesBenefits } from "@/components/services/ServicesBenefits";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>AI-Powered Bookkeeping Services & Financial Solutions</title>
        <meta name="description" content="Transform your financial operations with our comprehensive AI bookkeeping services. From automated data entry to real-time insights, we streamline your business finances." />
        <meta name="keywords" content="AI bookkeeping services, automated accounting solutions, financial automation, real-time financial insights, business finance management" />
        <meta property="og:title" content="AI-Powered Bookkeeping Services & Financial Solutions" />
        <meta property="og:description" content="Transform your financial operations with comprehensive AI bookkeeping services and real-time insights." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Bookkeeping Services & Solutions" />
        <meta name="twitter:description" content="Transform your financial operations with AI bookkeeping services." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/services" />
      </Helmet>
      <Header />
      <main>
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-white mb-12 font-oxanium">Comprehensive AI-Powered Financial Services</h1>
            <ServicesGrid />
            <ServicesBenefits />
            <ServicesProcess />
            <ServicesCTA />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;