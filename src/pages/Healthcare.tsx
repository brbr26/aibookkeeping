import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HealthcareServices } from "@/components/healthcare/HealthcareServices";
import { Helmet } from "react-helmet-async";

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Healthcare Financial Management | AI Bookkeeping Solutions</title>
        <meta name="description" content="Specialized AI bookkeeping solutions for healthcare providers. Streamline medical billing, insurance claims, and financial compliance with automated accuracy." />
        <meta name="keywords" content="healthcare bookkeeping, medical practice accounting, insurance billing, HIPAA compliance, medical financial management" />
        <link rel="canonical" href="https://aibookkeeping.com/healthcare" />
        <meta property="og:title" content="AI Bookkeeping for Healthcare Providers" />
        <meta property="og:description" content="Automated financial management solutions for healthcare practices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/healthcare" />
        <meta name="twitter:title" content="Healthcare Financial Management" />
        <meta name="twitter:description" content="AI-powered bookkeeping for medical practices." />
      </Helmet>
      <Header />
      <main className="pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center py-12 font-oxanium">
          Healthcare Financial Management
        </h1>
        <HealthcareServices />
      </main>
      <Footer />
    </div>
  );
};

export default Healthcare;