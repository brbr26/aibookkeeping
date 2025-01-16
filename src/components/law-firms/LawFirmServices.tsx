import { ServiceCard } from "../services/ServiceCard";
import { 
  Briefcase, 
  DollarSign, 
  FileText, 
  BookOpen, 
  ChartBar, 
  Calendar, 
  Shield,
  Scale,
  Gavel
} from "lucide-react";

export const LawFirmServices = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Trust Account Management",
      description: "Specialized bookkeeping for IOLTA and trust accounts, ensuring compliance with bar association requirements.",
    },
    {
      icon: DollarSign,
      title: "Time & Billing Integration",
      description: "Seamless integration with popular legal billing software for accurate revenue tracking and reporting.",
    },
    {
      icon: FileText,
      title: "Case Cost Accounting",
      description: "Track and allocate expenses by case or matter, maintaining detailed records for client billing.",
    },
    {
      icon: Scale,
      title: "Compliance Monitoring",
      description: "Regular monitoring and reporting to ensure compliance with state bar financial regulations.",
    },
    {
      icon: ChartBar,
      title: "Financial Analytics",
      description: "Custom financial reports and KPIs specific to law firm operations and performance.",
    },
    {
      icon: Calendar,
      title: "Tax Planning",
      description: "Strategic tax planning and preparation services tailored for legal practices.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Financial controls and procedures to protect your firm and client assets.",
    },
    {
      icon: Gavel,
      title: "Partner Compensation",
      description: "Complex partner compensation calculations and distributions management.",
    },
    {
      icon: BookOpen,
      title: "Regulatory Reporting",
      description: "Assistance with financial reporting requirements for legal industry regulators.",
    }
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