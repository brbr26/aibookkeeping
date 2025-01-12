import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <SEO 
        title="AI-Powered Bookkeeping Services | AI Bookkeeping"
        description="Discover our comprehensive AI-powered bookkeeping services including automated bookkeeping, financial reporting, tax preparation, and real-time monitoring. Transform your business finances with cutting-edge AI technology."
        keywords="ai bookkeeping, automated bookkeeping, financial reporting, tax preparation, real-time monitoring, compliance management, financial advisory, business finance, ai technology"
        ogImage="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png"
      />
      
      <Header />
      
      <main className="md:pt-[160px] pt-[80px] pb-16">
        <section className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Comprehensive{" "}
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-[#E5DEFF] via-[#D3E4FD] to-[#F1F0FB] blur-lg opacity-30"></span>
              <span className="relative text-[#4E94F4] font-oxanium">AI-Powered</span>
            </span>{" "}
            Finance Services to Streamline Your Business
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