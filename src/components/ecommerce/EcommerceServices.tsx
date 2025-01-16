import { 
  BarChart3, 
  BoxesIcon,
  Calculator, 
  CreditCard, 
  DollarSign,
  FileSpreadsheet,
  GanttChartSquare,
  Receipt,
  ShoppingCart 
} from "lucide-react";
import { ServiceCard } from "../services/ServiceCard";

export const EcommerceServices = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Marketplace Integration",
      description: "Seamless integration with Amazon, Shopify, and other major e-commerce platforms for automated transaction tracking.",
    },
    {
      icon: BoxesIcon,
      title: "Inventory Management",
      description: "Track inventory costs, manage COGS calculations, and optimize stock levels with AI-powered insights.",
    },
    {
      icon: Receipt,
      title: "Sales Tax Compliance",
      description: "Stay compliant with multi-state sales tax requirements and marketplace facilitator laws.",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Reconcile payment processor fees and manage chargebacks across all your sales channels.",
    },
    {
      icon: DollarSign,
      title: "Profit Analysis",
      description: "Track profitability by SKU, marketplace, and sales channel with detailed margin analysis.",
    },
    {
      icon: Calculator,
      title: "FBA Accounting",
      description: "Specialized accounting for Amazon FBA sellers, including inventory tracking and fee reconciliation.",
    },
    {
      icon: FileSpreadsheet,
      title: "Tax Planning",
      description: "Strategic tax planning and preparation tailored for e-commerce businesses.",
    },
    {
      icon: GanttChartSquare,
      title: "Cash Flow Management",
      description: "Monitor and forecast cash flow across multiple sales channels and payment processors.",
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Comprehensive financial reports with e-commerce-specific KPIs and metrics.",
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