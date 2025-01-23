import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { Helmet } from "react-helmet-async";

const Industries = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Industry-Specific AI Bookkeeping Solutions | AI Bookkeeping</title>
        <meta name="description" content="Discover tailored AI-powered bookkeeping solutions for your industry. From healthcare to construction, e-commerce to non-profits, we provide specialized financial management services." />
        <meta name="keywords" content="industry specific bookkeeping, specialized accounting services, vertical-specific financial solutions, AI bookkeeping by industry, custom financial management" />
        <meta property="og:title" content="Industry-Specific AI Bookkeeping Solutions" />
        <meta property="og:description" content="Tailored AI-powered bookkeeping solutions for every industry. Find your specialized financial management solution." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industry-Specific AI Bookkeeping Solutions" />
        <meta name="twitter:description" content="Tailored AI-powered bookkeeping solutions for every industry." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/industries" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-12 font-oxanium">Specialized Financial Solutions for Every Industry</h1>
          <IndustriesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;