import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HomeServices } from "@/components/HomeServices";
import { HomeIndustries } from "@/components/HomeIndustries";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Bookkeeping: Transform Your Business Finances with Intelligent Automation</title>
        <meta name="description" content="Revolutionize your business bookkeeping with AI-powered automation. Get real-time financial insights, reduce errors, and save time with our intelligent platform." />
        <meta name="keywords" content="AI bookkeeping software, automated accounting, financial automation, business bookkeeping, machine learning accounting, real-time financial insights" />
        <link rel="canonical" href="https://aibookkeeping.com" />
        <meta property="og:title" content="AI Bookkeeping: Transform Your Business Finances" />
        <meta property="og:description" content="Revolutionize your business bookkeeping with AI-powered automation. Get real-time financial insights and save time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Bookkeeping: Transform Your Business Finances" />
        <meta name="twitter:description" content="Revolutionize your business bookkeeping with AI-powered automation." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      <Header />
      <main>
        <h1 className="sr-only">AI Bookkeeping - Transform Your Business Finances with Intelligent Automation</h1>
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