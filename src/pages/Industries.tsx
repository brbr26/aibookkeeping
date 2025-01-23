import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { Helmet } from "react-helmet-async";

const Industries = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Industry-Specific AI Bookkeeping Solutions | Tailored Financial Management</title>
        <meta name="description" content="Discover AI bookkeeping solutions tailored to your industry. From e-commerce to healthcare, we provide specialized financial management for your specific needs." />
        <meta name="keywords" content="industry specific bookkeeping, specialized financial management, AI accounting solutions, business finance automation" />
        <link rel="canonical" href="https://aibookkeeping.com/industries" />
        <meta property="og:title" content="Industry-Specific AI Bookkeeping Solutions" />
        <meta property="og:description" content="Tailored financial management solutions for your industry." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/industries" />
        <meta name="twitter:title" content="Industry-Specific Bookkeeping" />
        <meta name="twitter:description" content="Specialized AI financial solutions for your sector." />
      </Helmet>
      <Header />
      <main className="pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center py-12 font-oxanium">
          Industries We Serve
        </h1>
        <IndustriesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;