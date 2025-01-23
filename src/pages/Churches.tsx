import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChurchServices } from "@/components/churches/ChurchServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Helmet } from "react-helmet-async";

const Churches = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Church & Religious Organization Financial Services | AI Bookkeeping</title>
        <meta name="description" content="Specialized financial management for churches and religious organizations. Track donations, manage ministry budgets, and ensure compliance with AI-powered solutions." />
        <meta name="keywords" content="church bookkeeping, religious organization accounting, donation tracking, ministry budgeting, church financial compliance" />
        <meta property="og:title" content="Church & Religious Organization Financial Services | AI Bookkeeping" />
        <meta property="og:description" content="Specialized financial management for churches and religious organizations." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Church & Religious Organization Financial Services" />
        <meta name="twitter:description" content="Specialized financial management for religious organizations." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/churches" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Church{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Financial Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Specialized bookkeeping and financial management services designed for churches and religious organizations. 
            From donation tracking to ministry budgeting, we help you maintain financial clarity and compliance.
          </p>
        </section>

        <ChurchServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Churches;