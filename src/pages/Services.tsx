import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { ServicesBenefits } from "@/components/services/ServicesBenefits";
import { ServicesProcess } from "@/components/services/ServicesProcess";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Bookkeeping Services | Smart Financial Solutions</title>
        <meta name="description" content="Explore our comprehensive AI-powered bookkeeping services. From automated transaction categorization to real-time financial insights, we help businesses streamline their finances." />
        <meta name="keywords" content="AI bookkeeping services, automated accounting, financial automation, business bookkeeping, tax preparation, financial reporting, cloud accounting, small business accounting" />
        <meta property="og:title" content="AI Bookkeeping Services | Smart Financial Solutions" />
        <meta property="og:description" content="Explore our comprehensive AI-powered bookkeeping services. From automated transaction categorization to real-time financial insights, we help businesses streamline their finances." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Bookkeeping Services | Smart Financial Solutions" />
        <meta name="twitter:description" content="Explore our comprehensive AI-powered bookkeeping services. From automated transaction categorization to real-time financial insights, we help businesses streamline their finances." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-white font-oxanium">
            Our Services
          </h1>
          <ServicesGrid />
          <ServicesBenefits />
          <ServicesProcess />
          <ServicesCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;