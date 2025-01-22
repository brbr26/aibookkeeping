import { 
  Building,
  HandHeart,
  Users,
  FileSpreadsheet,
  Calculator,
  Clock,
  Shield,
  BookOpen,
  Heart
} from "lucide-react";
import { ServiceCard } from "../services/ServiceCard";

export const NonProfitsServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Grant Management",
      description: "Track and manage grant funding, expenses, and reporting requirements with automated accuracy.",
    },
    {
      icon: HandHeart,
      title: "Donor Management",
      description: "Monitor donations, generate tax receipts, and maintain detailed donor records.",
    },
    {
      icon: FileSpreadsheet,
      title: "Form 990 Preparation",
      description: "Streamline tax preparation and compliance reporting for non-profit organizations.",
    },
    {
      icon: Building,
      title: "Program Accounting",
      description: "Track expenses and outcomes by program with detailed financial reporting.",
    },
    {
      icon: Users,
      title: "Board Reporting",
      description: "Generate comprehensive financial reports for board meetings and stakeholders.",
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Track program budgets and expenses in real-time with automated alerts.",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Stay compliant with non-profit regulations and reporting requirements.",
    },
    {
      icon: Heart,
      title: "Fundraising Support",
      description: "Track fundraising campaigns, events, and donor engagement metrics.",
    },
    {
      icon: BookOpen,
      title: "Financial Advisory",
      description: "Get AI-powered insights for sustainable financial management.",
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