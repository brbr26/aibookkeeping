import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ConstructionServices } from "@/components/construction/ConstructionServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const Construction = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <SEO 
        title="Construction Financial Services | AI Bookkeeping"
        description="Specialized AI-powered bookkeeping, accounting, and financial management services tailored for construction companies. From project cost tracking to payroll management."
        keywords="construction bookkeeping, contractor accounting, construction financial services, project cost tracking, construction payroll management"
        ogImage="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png"
      />
      
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