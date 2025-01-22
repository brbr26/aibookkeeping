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
        <title>AI Bookkeeping: Automated Financial Solutions for Modern Businesses</title>
        <meta name="description" content="Transform your business finances with AI-powered bookkeeping. Automate tasks, gain real-time insights, and make data-driven decisions with our intelligent platform." />
        <meta name="keywords" content="AI bookkeeping, automated accounting, financial automation, business finance, machine learning accounting" />
        <meta property="og:title" content="AI Bookkeeping: Automated Financial Solutions" />
        <meta property="og:description" content="Transform your business finances with AI-powered bookkeeping. Automate tasks and gain real-time insights." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Bookkeeping: Automated Financial Solutions" />
        <meta name="twitter:description" content="Transform your business finances with AI-powered bookkeeping." />
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