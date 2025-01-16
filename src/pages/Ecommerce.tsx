import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { EcommerceServices } from "@/components/ecommerce/EcommerceServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <SEO 
        title="E-commerce Bookkeeping Services | AI Bookkeeping"
        description="Specialized AI-powered bookkeeping, accounting, and tax services tailored for e-commerce sellers. Streamline your financial operations and maximize profitability."
        keywords="e-commerce bookkeeping, online seller accounting, marketplace tax services, inventory management, e-commerce financial reporting, amazon seller bookkeeping"
        ogImage="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png"
      />
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            E-commerce{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping, accounting, and tax services designed for online sellers. 
            From marketplace integration to inventory management, we've got you covered.
          </p>
        </section>

        <EcommerceServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Ecommerce;