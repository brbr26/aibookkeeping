import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { LawFirmServices } from "@/components/law-firms/LawFirmServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <SEO 
        title="Law Firm Bookkeeping & Accounting Services | AI Bookkeeping"
        description="Specialized AI-powered bookkeeping, accounting, and tax services tailored for law firms. Trust account management, case cost accounting, and regulatory compliance solutions."
        keywords="law firm bookkeeping, legal accounting services, trust account management, IOLTA compliance, law firm tax services, legal practice accounting"
        ogImage="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png"
      />
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Legal Practice{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping, accounting, and tax services designed for law firms. 
            From trust account management to partner compensation, we ensure your practice's 
            financial operations meet the highest standards of accuracy and compliance.
          </p>
        </section>

        <LawFirmServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default LawFirms;