import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Bookkeeping: Automated Finances for SMBs"
        description="Discover AI Bookkeeping, the smart solution for business owners. Automate bookkeeping, streamline accounting, and gain real-time financial insights. From tax planning to advanced analytics, our AI-powered platform helps you save time, reduce errors, and grow your business with confidence."
        keywords="AI bookkeeping, automated bookkeeping, smart accounting solutions, bookkeeping software, AI-powered accounting, real-time financial insights, tax planning, business automation, financial analytics, bookkeeping for small businesses, accounting automation, error-free bookkeeping, bookkeeping and tax compliance, scalable bookkeeping solutions, bookkeeping for entrepreneurs"
        ogImage="/og-image.png"
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;