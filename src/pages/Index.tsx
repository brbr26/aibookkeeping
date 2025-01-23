import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HomeServices } from "@/components/HomeServices";
import { HomeIndustries } from "@/components/HomeIndustries";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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