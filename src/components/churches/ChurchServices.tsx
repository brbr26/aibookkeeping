import {
  Calculator,
  ChartBar,
  Church,
  CreditCard,
  FileSpreadsheet,
  HandHeart,
  HeartHandshake,
  Receipt,
  Users,
} from "lucide-react";
import { ServiceCard } from "../services/ServiceCard";

export const ChurchServices = () => {
  const services = [
    {
      icon: HandHeart,
      title: "Donation Management",
      description: "Track and manage donations, pledges, and special offerings with automated categorization.",
    },
    {
      icon: Users,
      title: "Member Contributions",
      description: "Maintain detailed records of member giving and generate year-end contribution statements.",
    },
    {
      icon: Receipt,
      title: "Expense Tracking",
      description: "Monitor ministry expenses, program costs, and operational spending with detailed categorization.",
    },
    {
      icon: CreditCard,
      title: "Online Giving",
      description: "Integrate and reconcile online donations, recurring gifts, and digital payment processing.",
    },
    {
      icon: Church,
      title: "Ministry Budgeting",
      description: "Create and track budgets for different ministries and programs within your church.",
    },
    {
      icon: Calculator,
      title: "Payroll Management",
      description: "Handle staff payroll, benefits, and clergy housing allowances with compliance.",
    },
    {
      icon: FileSpreadsheet,
      title: "Tax Compliance",
      description: "Ensure compliance with non-profit tax requirements and maintain 501(c)(3) status.",
    },
    {
      icon: HeartHandshake,
      title: "Grant Management",
      description: "Track grant applications, requirements, and reporting for church programs.",
    },
    {
      icon: ChartBar,
      title: "Financial Reporting",
      description: "Generate comprehensive financial reports for board meetings and annual reviews.",
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