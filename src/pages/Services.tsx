import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesBenefits } from "@/components/services/ServicesBenefits";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>AI-Powered Bookkeeping Services | Automated Financial Solutions</title>
        <meta name="description" content="Discover our comprehensive AI bookkeeping services. From automated transaction categorization to real-time financial reporting, we streamline your business finances." />
        <meta name="keywords" content="AI bookkeeping services, automated accounting, financial automation, business finance solutions, real-time reporting" />
        <link rel="canonical" href="https://aibookkeeping.com/services" />
        <meta property="og:title" content="AI Bookkeeping Services & Solutions" />
        <meta property="og:description" content="Comprehensive AI-powered bookkeeping services for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/services" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Bookkeeping Services" />
        <meta name="twitter:description" content="Transform your business finances with AI automation." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      <Header />
      <main className="pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center py-12 font-oxanium">
          Our AI Bookkeeping Services
        </h1>
        <ServicesGrid />
        <ServicesBenefits />
        <ServicesProcess />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;