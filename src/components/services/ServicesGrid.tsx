import { BarChart3, BookOpen, Calculator, Clock, FileSpreadsheet, Shield } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

export const ServicesGrid = () => {
  const services = [
    {
      icon: Calculator,
      title: "Automated Bookkeeping",
      description: "Automate your financial data entry and reconciliation with AI-powered accuracy and efficiency.",
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Generate comprehensive financial reports with real-time insights and visualizations.",
    },
    {
      icon: FileSpreadsheet,
      title: "Tax Preparation",
      description: "Streamline your tax preparation process with AI-assisted documentation and compliance checks.",
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Track your financial health in real-time with automated alerts and insights.",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Stay compliant with automated regulatory checks and updates.",
    },
    {
      icon: BookOpen,
      title: "Financial Advisory",
      description: "Get AI-powered insights and recommendations for business growth.",
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};