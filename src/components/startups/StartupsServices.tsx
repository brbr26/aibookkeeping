import { 
  BarChart3, 
  BookOpen,
  Calculator, 
  DollarSign,
  FileSpreadsheet,
  GanttChartSquare,
  LineChart,
  Rocket,
  Target
} from "lucide-react";
import { ServiceCard } from "../services/ServiceCard";

export const StartupsServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Fundraising Support",
      description: "Track and manage fundraising rounds, cap tables, and investor relations with AI-powered accuracy.",
    },
    {
      icon: BarChart3,
      title: "Burn Rate Analysis",
      description: "Monitor cash burn rate and runway with real-time analytics and predictive insights.",
    },
    {
      icon: DollarSign,
      title: "Equity Management",
      description: "Manage stock options, vesting schedules, and equity dilution calculations.",
    },
    {
      icon: LineChart,
      title: "Growth Metrics",
      description: "Track key startup metrics including MRR, CAC, LTV, and other growth indicators.",
    },
    {
      icon: Target,
      title: "KPI Tracking",
      description: "Monitor and analyze key performance indicators with AI-powered insights.",
    },
    {
      icon: GanttChartSquare,
      title: "Budget Planning",
      description: "Create and manage department budgets with scenario planning capabilities.",
    },
    {
      icon: FileSpreadsheet,
      title: "Due Diligence Support",
      description: "Prepare and maintain financial documentation for investor due diligence.",
    },
    {
      icon: Rocket,
      title: "Scaling Support",
      description: "Financial planning and analysis tools designed for rapid growth phases.",
    },
    {
      icon: BookOpen,
      title: "Compliance Management",
      description: "Stay compliant with regulatory requirements and investor reporting obligations.",
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