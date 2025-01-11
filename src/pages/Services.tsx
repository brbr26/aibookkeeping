import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, BookOpen, Calculator, Clock, FileSpreadsheet, Shield } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-oxanium text-white mb-6">
            Our Comprehensive AI-Powered Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Leverage cutting-edge AI technology to streamline your bookkeeping processes and gain valuable business insights.
          </p>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automated Bookkeeping */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] hover:border-[#4E94F4] transition-all">
              <Calculator className="w-12 h-12 text-[#4E94F4] mb-4" />
              <h3 className="text-xl font-oxanium text-white mb-3">Automated Bookkeeping</h3>
              <p className="text-gray-300 font-lato mb-4">
                Automate your financial data entry and reconciliation with AI-powered accuracy and efficiency.
              </p>
            </div>

            {/* Financial Reporting */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] hover:border-[#4E94F4] transition-all">
              <BarChart3 className="w-12 h-12 text-[#4E94F4] mb-4" />
              <h3 className="text-xl font-oxanium text-white mb-3">Financial Reporting</h3>
              <p className="text-gray-300 font-lato mb-4">
                Generate comprehensive financial reports with real-time insights and visualizations.
              </p>
            </div>

            {/* Tax Preparation */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] hover:border-[#4E94F4] transition-all">
              <FileSpreadsheet className="w-12 h-12 text-[#4E94F4] mb-4" />
              <h3 className="text-xl font-oxanium text-white mb-3">Tax Preparation</h3>
              <p className="text-gray-300 font-lato mb-4">
                Streamline your tax preparation process with AI-assisted documentation and compliance checks.
              </p>
            </div>

            {/* Real-time Monitoring */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] hover:border-[#4E94F4] transition-all">
              <Clock className="w-12 h-12 text-[#4E94F4] mb-4" />
              <h3 className="text-xl font-oxanium text-white mb-3">Real-time Monitoring</h3>
              <p className="text-gray-300 font-lato mb-4">
                Track your financial health in real-time with automated alerts and insights.
              </p>
            </div>

            {/* Compliance Management */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] hover:border-[#4E94F4] transition-all">
              <Shield className="w-12 h-12 text-[#4E94F4] mb-4" />
              <h3 className="text-xl font-oxanium text-white mb-3">Compliance Management</h3>
              <p className="text-gray-300 font-lato mb-4">
                Stay compliant with automated regulatory checks and updates.
              </p>
            </div>

            {/* Financial Advisory */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] hover:border-[#4E94F4] transition-all">
              <BookOpen className="w-12 h-12 text-[#4E94F4] mb-4" />
              <h3 className="text-xl font-oxanium text-white mb-3">Financial Advisory</h3>
              <p className="text-gray-300 font-lato mb-4">
                Get AI-powered insights and recommendations for business growth.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-16 text-center">
          <div className="bg-[#4E94F4] rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-oxanium text-white mb-6">
              Ready to Modernize Your Bookkeeping?
            </h2>
            <Button 
              className="bg-white text-[#4E94F4] hover:bg-gray-100 font-lato px-8 py-6 h-auto text-lg group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
