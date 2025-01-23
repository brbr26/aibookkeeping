import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EcommerceServices } from "@/components/ecommerce/EcommerceServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>E-commerce Bookkeeping Solutions | AI-Powered Financial Management</title>
        <meta name="description" content="Streamline your e-commerce bookkeeping with AI automation. Get real-time financial insights, inventory tracking, and automated reconciliation for your online store." />
        <meta name="keywords" content="e-commerce bookkeeping, online store accounting, inventory management, financial automation, AI bookkeeping" />
        <link rel="canonical" href="https://aibookkeeping.com/ecommerce" />
        <meta property="og:title" content="E-commerce Bookkeeping Solutions | AI-Powered Management" />
        <meta property="og:description" content="Transform your e-commerce finances with AI-powered bookkeeping solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/ecommerce" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-commerce Bookkeeping Solutions" />
        <meta name="twitter:description" content="AI-powered financial management for online stores." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      <Header />
      <main className="pt-20">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            E-commerce{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Solutions
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for e-commerce businesses.
            From inventory tracking to multi-channel sales reconciliation, we help you manage your online store's finances.
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