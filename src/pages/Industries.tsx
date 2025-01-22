import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { Helmet } from "react-helmet-async";

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <Helmet>
        <title>Industries We Serve | AI Bookkeeping</title>
        <meta name="description" content="AI Bookkeeping serves various industries including E-commerce, Law Firms, Healthcare, and more with tailored financial management solutions." />
        <meta name="keywords" content="AI bookkeeping industries, financial management, business accounting, industry-specific solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industries We Serve | AI Bookkeeping" />
        <meta property="og:description" content="AI Bookkeeping serves various industries including E-commerce, Law Firms, Healthcare, and more with tailored financial management solutions." />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve | AI Bookkeeping" />
        <meta name="twitter:description" content="AI Bookkeeping serves various industries including E-commerce, Law Firms, Healthcare, and more with tailored financial management solutions." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      <Header />
      <main className="flex-grow relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#4A2384]/30 via-[#2A1364]/20 to-transparent opacity-70" />
        
        <div className="md:pt-[160px] pt-[120px] pb-20 px-4 relative z-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-oxanium text-[#D6BCFA]">
              Industries We Serve
            </h1>
            <p className="text-xl text-[#E9D8FD] mb-12 text-center max-w-3xl mx-auto">
              Our AI-powered bookkeeping solutions are tailored to meet the unique financial management needs of these industries:
            </p>
            <IndustriesGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;