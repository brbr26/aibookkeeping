import { 
  Wrench,
  Paintbrush,
  Hammer,
  Leaf,
  Power,
  Home,
  ClipboardCheck,
  Calendar,
  Receipt
} from "lucide-react";
import { ServiceCard } from "../services/ServiceCard";

export const HomeServicesServices = () => {
  const services = [
    {
      icon: Wrench,
      title: "Plumbing Services",
      description: "Track income and expenses for plumbing jobs with automated categorization and job costing.",
    },
    {
      icon: Paintbrush,
      title: "Painting Services",
      description: "Manage project-based accounting and track paint supplies and labor costs efficiently.",
    },
    {
      icon: Hammer,
      title: "Handyman Services",
      description: "Streamline billing and expense tracking for repair and maintenance work.",
    },
    {
      icon: Leaf,
      title: "Landscaping",
      description: "Monitor seasonal revenue patterns and manage equipment depreciation tracking.",
    },
    {
      icon: Power,
      title: "Electrical Services",
      description: "Track materials, labor, and overhead costs for electrical installations and repairs.",
    },
    {
      icon: Home,
      title: "Property Maintenance",
      description: "Manage recurring billing and track expenses across multiple properties.",
    },
    {
      icon: ClipboardCheck,
      title: "Service Scheduling",
      description: "Integrate appointment scheduling with financial tracking and invoicing.",
    },
    {
      icon: Calendar,
      title: "Seasonal Planning",
      description: "Forecast revenue and expenses based on seasonal business patterns.",
    },
    {
      icon: Receipt,
      title: "Invoice Management",
      description: "Automated invoice generation and payment tracking for service calls.",
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