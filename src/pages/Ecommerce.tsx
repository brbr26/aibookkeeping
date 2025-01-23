import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EcommerceServices } from "@/components/ecommerce/EcommerceServices";
import { Helmet } from "react-helmet-async";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>AI Bookkeeping for E-commerce | Automated Financial Management</title>
        <meta name="description" content="Streamline your e-commerce bookkeeping with AI-powered automation. Get real-time financial insights, inventory tracking, and automated reconciliation for your online store." />
        <meta name="keywords" content="e-commerce bookkeeping, online store accounting, automated reconciliation, inventory tracking, AI financial management" />
        <link rel="canonical" href="https://aibookkeeping.com/ecommerce" />
        <meta property="og:title" content="AI Bookkeeping for E-commerce Businesses" />
        <meta property="og:description" content="Transform your e-commerce financial management with AI-powered bookkeeping solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/ecommerce" />
        <meta name="twitter:title" content="AI Bookkeeping for E-commerce" />
        <meta name="twitter:description" content="Automated financial management for online stores." />
      </Helmet>
      <Header />
      <main className="pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center py-12 font-oxanium">
          E-commerce Bookkeeping Solutions
        </h1>
        <EcommerceServices />
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;