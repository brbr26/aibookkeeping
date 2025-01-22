import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FranchiseServices } from "@/components/franchises/FranchiseServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Franchises = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Franchise Bookkeeping Services | AI Bookkeeping</title>
        <meta 
          name="description" 
          content="Specialized AI-powered bookkeeping and financial management services for franchises. Streamline multi-location operations and ensure compliance across your franchise network." 
        />
        <meta 
          name="keywords" 
          content="franchise bookkeeping, multi-location accounting, franchise financial management, franchise compliance, royalty tracking, franchise analytics" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Franchise Bookkeeping Services | AI Bookkeeping" />
        <meta 
          property="og:description" 
          content="Specialized AI-powered bookkeeping and financial management services for franchises." 
        />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Franchise Bookkeeping Services | AI Bookkeeping" />
        <meta 
          name="twitter:description" 
          content="Specialized AI-powered bookkeeping and financial management services for franchises." 
        />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Franchise{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for franchise operations. 
            From multi-location management to royalty tracking, we help you maintain financial clarity across your network.
          </p>
        </section>

        <FranchiseServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Franchises;