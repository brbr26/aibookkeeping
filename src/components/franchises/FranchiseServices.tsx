import { 
  Building2,
  HandHeart,
  Users,
  FileSpreadsheet,
  Calculator,
  MapPin,
  Shield,
  BookOpen,
  BarChart3
} from "lucide-react";
import { ServiceCard } from "../services/ServiceCard";

export const FranchiseServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Multi-Location Management",
      description: "Centralized bookkeeping and financial management across all franchise locations.",
    },
    {
      icon: HandHeart,
      title: "Franchise Compliance",
      description: "Ensure financial compliance with franchise agreements and regulatory requirements.",
    },
    {
      icon: FileSpreadsheet,
      title: "Royalty Tracking",
      description: "Accurate tracking and reporting of franchise royalty payments and related fees.",
    },
    {
      icon: Calculator,
      title: "Performance Analytics",
      description: "Compare and analyze performance metrics across different franchise locations.",
    },
    {
      icon: Users,
      title: "Multi-Entity Accounting",
      description: "Manage separate books for each franchise location while maintaining consolidated reporting.",
    },
    {
      icon: MapPin,
      title: "Location-Based Reporting",
      description: "Generate location-specific financial reports and performance analytics.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Monitor financial risks and compliance across all franchise operations.",
    },
    {
      icon: BarChart3,
      title: "Growth Planning",
      description: "Financial planning and analysis tools for franchise expansion.",
    },
    {
      icon: BookOpen,
      title: "Training Support",
      description: "Financial management training and support for franchise owners.",
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