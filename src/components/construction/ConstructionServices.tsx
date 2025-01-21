import { ServiceCard } from "@/components/services/ServiceCard";
import { Calculator, HardHat, Clock, FileSpreadsheet, BarChart3, Wrench } from "lucide-react";

export const ConstructionServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Project Cost Tracking",
      description: "Accurate tracking of project-specific costs, materials, and labor expenses with AI-powered precision.",
    },
    {
      icon: HardHat,
      title: "Contractor Management",
      description: "Streamlined payment processing and documentation for contractors and subcontractors.",
    },
    {
      icon: Clock,
      title: "Time & Material Billing",
      description: "Automated time tracking and material cost allocation for accurate client billing.",
    },
    {
      icon: FileSpreadsheet,
      title: "Progress Billing",
      description: "Efficient management of progress payments and retention accounting.",
    },
    {
      icon: BarChart3,
      title: "Job Costing Analysis",
      description: "Detailed insights into project profitability and cost variance analysis.",
    },
    {
      icon: Wrench,
      title: "Equipment Tracking",
      description: "Monitor equipment costs, maintenance expenses, and depreciation.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-oxanium">
        <span className="text-white">Specialized</span>{" "}
        <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
          Services
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};