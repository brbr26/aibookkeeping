import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HomeServices } from "@/components/HomeServices";
import { HomeIndustries } from "@/components/HomeIndustries";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Bookkeeping: Automated Finances for SMBs</title>
        <meta name="description" content="Discover AI Bookkeeping, the smart solution for business owners. Automate bookkeeping, streamline accounting, and gain real-time financial insights. From tax planning to advanced analytics, our AI-powered platform helps you save time, reduce errors, and grow your business with confidence." />
        <meta name="keywords" content="AI bookkeeping, automated bookkeeping, smart accounting solutions, bookkeeping software, AI-powered accounting, real-time financial insights, tax planning, business automation, financial analytics, bookkeeping for small businesses, accounting automation, error-free bookkeeping, bookkeeping and tax compliance, scalable bookkeeping solutions, bookkeeping for entrepreneurs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Bookkeeping: Automated Finances for SMBs" />
        <meta property="og:description" content="Discover AI Bookkeeping, the smart solution for business owners. Automate bookkeeping, streamline accounting, and gain real-time financial insights." />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Bookkeeping: Automated Finances for SMBs" />
        <meta name="twitter:description" content="Discover AI Bookkeeping, the smart solution for business owners. Automate bookkeeping, streamline accounting, and gain real-time financial insights." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      <Header />
      <main>
        <h1 className="sr-only">AI Bookkeeping - Automated Financial Solutions</h1>
        <Hero />
        <Features />
        <HomeServices />
        <HomeIndustries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;