import { 
  BarChart3,
  Calculator,
  DollarSign,
  FileSpreadsheet,
  GanttChartSquare,
  Receipt,
  Shield,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { ServiceCard } from "../services/ServiceCard";

export const InsuranceServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Policy Management",
      description: "Track and manage insurance policies, premiums, and renewals with automated accuracy.",
    },
    {
      icon: DollarSign,
      title: "Commission Tracking",
      description: "Automated commission calculations and reconciliation across multiple carriers and policies.",
    },
    {
      icon: Receipt,
      title: "Premium Processing",
      description: "Streamline premium collection, payment processing, and reconciliation workflows.",
    },
    {
      icon: UserCheck,
      title: "Client Management",
      description: "Organize client information, policy details, and payment histories in one place.",
    },
    {
      icon: Calculator,
      title: "Claims Accounting",
      description: "Track claims-related expenses and payments with detailed documentation.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Management",
      description: "Stay compliant with regulatory requirements and maintain accurate financial records.",
    },
    {
      icon: FileSpreadsheet,
      title: "Tax Planning",
      description: "Strategic tax planning and preparation tailored for insurance agencies.",
    },
    {
      icon: GanttChartSquare,
      title: "Cash Flow Management",
      description: "Monitor and forecast cash flow across multiple revenue streams and expenses.",
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Generate comprehensive financial reports with insurance-specific KPIs.",
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