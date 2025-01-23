import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RestaurantServices } from "@/components/restaurants/RestaurantServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Restaurants = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Restaurant Financial Management & Cost Control | AI Bookkeeping</title>
        <meta name="description" content="Optimize your restaurant's finances with AI-powered bookkeeping. Control food costs, manage inventory, and maximize profitability with automated financial solutions." />
        <meta name="keywords" content="restaurant bookkeeping, food cost management, inventory control, restaurant accounting, POS integration" />
        <meta property="og:title" content="Restaurant Financial Management & Cost Control | AI Bookkeeping" />
        <meta property="og:description" content="Optimize your restaurant's finances with AI-powered bookkeeping solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Restaurant Financial Management & Cost Control" />
        <meta name="twitter:description" content="Optimize your restaurant's finances with AI solutions." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/restaurants" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Restaurant{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping, financial management, and analytics services designed for 
            restaurants. From inventory control to menu costing, we help you optimize your 
            operations and maximize profitability.
          </p>
        </section>

        <RestaurantServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Restaurants;