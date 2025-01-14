import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <SEO 
        title="Industries We Serve | AI Bookkeeping"
        description="AI Bookkeeping serves various industries including E-commerce, Law Firms, Healthcare, and more with tailored financial management solutions."
        keywords="AI bookkeeping industries, financial management, business accounting, industry-specific solutions"
      />
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-oxanium">Industries We Serve</h1>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Our AI-powered bookkeeping solutions are tailored to meet the unique financial management needs of various industries.
          </p>
          <IndustriesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;