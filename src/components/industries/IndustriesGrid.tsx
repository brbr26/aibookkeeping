import { IndustryCard } from "./IndustryCard";
import { 
  Building, 
  ShoppingCart, 
  Scale, 
  Stethoscope, 
  HardHat, 
  Rocket, 
  Wrench, 
  Heart, 
  Store, 
  Home, 
  Church, 
  Shield 
} from "lucide-react";

const industries = [
  {
    title: "E-commerce",
    description: "Online retailers looking to streamline financial operations.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    to: "/ecommerce"
  },
  {
    title: "Law Firms",
    description: "Small-to-medium firms needing accurate tracking of billable hours and client trust accounts.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    to: "/law-firms"
  },
  {
    title: "Healthcare",
    description: "Dental, medical, and chiropractic practices requiring compliant and efficient financial management.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    to: "/healthcare"
  },
  {
    title: "Construction",
    description: "Contractors and builders managing project-based finances and payroll.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    title: "Funded Startups",
    description: "Startups with seed capital or higher, aiming for scalable financial solutions.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Home Services",
    description: "Landscaping, painting, plumbing, and electrical service providers needing simple yet effective financial tools.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Non-profit Organizations",
    description: "Entities requiring grant tracking, fund allocation, and compliance reporting.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Franchises",
    description: "Franchise owners looking for centralized bookkeeping and financial oversight.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Restaurants",
    description: "Independent and chain restaurants requiring cash flow management and payroll solutions.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Real Estate",
    description: "Brokers and investors needing property management and income tracking tools.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  },
  {
    title: "Churches",
    description: "Religious organizations with specific financial reporting and compliance needs.",
    icon: Church,
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
  },
  {
    title: "Insurance Agencies",
    description: "Agencies managing commission tracking and recurring revenue streams.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
  }
];

export const IndustriesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry, index) => (
        <IndustryCard
          key={index}
          title={industry.title}
          description={industry.description}
          icon={industry.icon}
          image={industry.image}
          to={industry.to}
        />
      ))}
    </div>
  );
};