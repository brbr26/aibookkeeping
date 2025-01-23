import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeServicesServices } from "@/components/home-services/HomeServicesServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const HomeServices = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Home Services Business Financial Management | AI Bookkeeping</title>
        <meta name="description" content="Streamline your home services business finances with AI-powered bookkeeping. From job costing to scheduling and invoice management, optimize your operations." />
        <meta name="keywords" content="home services bookkeeping, contractor accounting, service business financial management, job costing, scheduling software" />
        <meta property="og:title" content="Home Services Business Financial Management | AI Bookkeeping" />
        <meta property="og:description" content="Streamline your home services business finances with AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Services Business Financial Management" />
        <meta name="twitter:description" content="Streamline your home services business finances." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/home-services" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Home Services{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for home service providers. 
            From job costing to seasonal planning, we help you manage your finances efficiently.
          </p>
        </section>

        <HomeServicesServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default HomeServices;