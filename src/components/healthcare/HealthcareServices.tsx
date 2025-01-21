import { ServiceCard } from "../services/ServiceCard";
import { 
  Stethoscope,
  Heart,
  FileText,
  ClipboardCheck,
  Calculator,
  Clock,
  Shield,
  BookOpen,
  Building
} from "lucide-react";

export const HealthcareServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Medical Billing Integration",
      description: "Seamless integration with popular medical billing systems for accurate revenue tracking and reporting.",
    },
    {
      icon: ClipboardCheck,
      title: "Insurance Claims Management",
      description: "Track and process insurance claims efficiently with automated reconciliation.",
    },
    {
      icon: FileText,
      title: "Patient Payment Processing",
      description: "Streamlined payment processing and automated patient billing management.",
    },
    {
      icon: Stethoscope,
      title: "Practice Management",
      description: "Comprehensive financial management tools designed for healthcare practices.",
    },
    {
      icon: Heart,
      title: "Revenue Cycle Analytics",
      description: "Advanced analytics and reporting for optimizing your practice's revenue cycle.",
    },
    {
      icon: Clock,
      title: "Real-time Financial Tracking",
      description: "Monitor your practice's financial health with real-time insights and alerts.",
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Ensure financial records comply with healthcare privacy regulations.",
    },
    {
      icon: Building,
      title: "Multi-location Management",
      description: "Centralized financial management for practices with multiple locations.",
    },
    {
      icon: BookOpen,
      title: "Regulatory Reporting",
      description: "Automated healthcare-specific financial reporting and compliance.",
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