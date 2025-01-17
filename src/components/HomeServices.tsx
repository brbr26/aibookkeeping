import { Bot, BookOpen, Calculator, Clock, FileSpreadsheet, Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Calculator,
    title: "Automated Bookkeeping",
    description: "Automate your financial data entry and reconciliation with AI-powered accuracy."
  },
  {
    icon: FileSpreadsheet,
    title: "Tax Preparation",
    description: "Streamline your tax preparation process with AI-assisted documentation."
  },
  {
    icon: Clock,
    title: "Real-time Monitoring",
    description: "Track your financial health in real-time with automated alerts and insights."
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Stay compliant with automated regulatory checks and updates."
  }
];

export const HomeServices = () => {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-oxanium">
          <span className="text-white font-oxanium">Services</span>{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text font-oxanium">
            Offered
          </span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Leverage our AI-powered solutions to streamline your bookkeeping processes and gain valuable insights.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
                          bg-gradient-to-br from-[#220F50] via-[#220F50]/80 to-[#1A1A1A]
                          border border-primary/20 hover:border-primary/40
                          transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-[#4E94F4]" />
                </div>
                <h3 className="text-xl font-semibold text-[#4E94F4] mb-4 font-oxanium">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9] transition-colors font-semibold"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};