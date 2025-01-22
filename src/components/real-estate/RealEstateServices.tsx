import { 
  Building2,
  Calculator,
  ChartBar,
  ClipboardCheck,
  DollarSign,
  FileSpreadsheet,
  House,
  MapPin,
  Users
} from "lucide-react";
import { ServiceCard } from "../services/ServiceCard";

export const RealEstateServices = () => {
  const services = [
    {
      icon: House,
      title: "Property Management",
      description: "Comprehensive bookkeeping for rental properties, including income tracking and expense management.",
    },
    {
      icon: DollarSign,
      title: "Rent Collection",
      description: "Automated rent tracking, late fee calculations, and payment reconciliation across properties.",
    },
    {
      icon: MapPin,
      title: "Multi-Property Tracking",
      description: "Organize financial data by property, with detailed reporting for each location.",
    },
    {
      icon: Users,
      title: "Tenant Management",
      description: "Track security deposits, maintenance expenses, and tenant-related transactions.",
    },
    {
      icon: Calculator,
      title: "ROI Analysis",
      description: "Calculate and track return on investment for each property in your portfolio.",
    },
    {
      icon: Building2,
      title: "Property Expenses",
      description: "Track maintenance, utilities, insurance, and other property-related expenses.",
    },
    {
      icon: FileSpreadsheet,
      title: "Tax Planning",
      description: "Optimize tax strategies for real estate investments and maintain compliance.",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Management",
      description: "Stay compliant with real estate accounting regulations and reporting requirements.",
    },
    {
      icon: ChartBar,
      title: "Financial Reporting",
      description: "Generate comprehensive reports for property performance and portfolio analysis.",
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