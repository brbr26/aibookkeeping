import { ServiceCard } from "@/components/services/ServiceCard";
import { 
  Calculator, 
  ChefHat,
  ClipboardList,
  DollarSign,
  FileSpreadsheet,
  BarChart3,
  Clock,
  Receipt,
  Users
} from "lucide-react";

export const RestaurantServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Cost Management",
      description: "Track food costs, labor expenses, and overhead with AI-powered precision for better profit margins.",
    },
    {
      icon: ChefHat,
      title: "Inventory Control",
      description: "Manage food inventory, track waste, and optimize ordering with real-time analytics.",
    },
    {
      icon: Receipt,
      title: "POS Integration",
      description: "Seamless integration with popular POS systems for automated sales tracking and reconciliation.",
    },
    {
      icon: Users,
      title: "Payroll Management",
      description: "Efficient payroll processing with tip reporting and labor cost analysis.",
    },
    {
      icon: ClipboardList,
      title: "Menu Costing",
      description: "Calculate and optimize menu item profitability with detailed cost analysis.",
    },
    {
      icon: DollarSign,
      title: "Cash Flow Analysis",
      description: "Monitor daily cash flow, track expenses, and forecast revenue trends.",
    },
    {
      icon: FileSpreadsheet,
      title: "Tax Compliance",
      description: "Stay compliant with sales tax, tip reporting, and other restaurant-specific regulations.",
    },
    {
      icon: Clock,
      title: "Real-time Reporting",
      description: "Access key performance metrics and financial reports in real-time.",
    },
    {
      icon: BarChart3,
      title: "Profitability Analysis",
      description: "Track profitability by menu item, daypart, and location with detailed analytics.",
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