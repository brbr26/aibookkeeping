import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { Helmet } from "react-helmet-async";

const Industries = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Industries We Serve - AI Bookkeeping</title>
        <meta name="description" content="Discover how AI Bookkeeping serves diverse industries with tailored financial solutions. From healthcare to e-commerce, we optimize bookkeeping for your specific needs." />
        <meta name="keywords" content="AI bookkeeping industries, industry-specific bookkeeping, specialized financial services, business accounting solutions" />
        <meta property="og:title" content="Industries We Serve - AI Bookkeeping" />
        <meta property="og:description" content="Discover how AI Bookkeeping serves diverse industries with tailored financial solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve - AI Bookkeeping" />
        <meta name="twitter:description" content="Discover how AI Bookkeeping serves your industry with tailored financial solutions." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-12 font-oxanium">Industries We Serve</h1>
          <IndustriesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;