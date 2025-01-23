import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EcommerceServices } from "@/components/ecommerce/EcommerceServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>E-commerce Bookkeeping & Financial Services | AI Bookkeeping</title>
        <meta name="description" content="Transform your e-commerce business with AI-powered bookkeeping. Automate inventory tracking, marketplace integration, and financial reporting for online sellers." />
        <meta name="keywords" content="e-commerce bookkeeping, online seller accounting, marketplace financial management, inventory tracking, e-commerce tax services" />
        <meta property="og:title" content="E-commerce Bookkeeping & Financial Services | AI Bookkeeping" />
        <meta property="og:description" content="Transform your e-commerce business with AI-powered bookkeeping. Streamline operations and maximize profitability." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-commerce Bookkeeping & Financial Services" />
        <meta name="twitter:description" content="Transform your e-commerce business with AI-powered bookkeeping." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/ecommerce" />
      </Helmet>
      
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