import {
  Building,
  Briefcase,
  Stethoscope,
  HardHat,
  Rocket,
  Wrench,
  HandHeart,
  Store,
  ChefHat,
} from "lucide-react";

export const industries = [
  {
    title: "E-commerce",
    description: "Streamline your online business finances with automated bookkeeping and marketplace integrations.",
    icon: Store,
    image: "/industries/ecommerce.jpg",
    to: "/ecommerce",
  },
  {
    title: "Law Firms",
    description: "Trust accounting, client billing, and financial compliance tailored for legal practices.",
    icon: Briefcase,
    image: "/industries/law-firms.jpg",
    to: "/law-firms",
  },
  {
    title: "Healthcare",
    description: "Medical billing integration and practice financial management solutions.",
    icon: Stethoscope,
    image: "/industries/healthcare.jpg",
    to: "/healthcare",
  },
  {
    title: "Construction",
    description: "Project cost tracking and contractor payment management made simple.",
    icon: HardHat,
    image: "/industries/construction.jpg",
    to: "/construction",
  },
  {
    title: "Startups",
    description: "Scale with confidence using our startup-focused financial services.",
    icon: Rocket,
    image: "/industries/startups.jpg",
    to: "/startups",
  },
  {
    title: "Home Services",
    description: "Streamline job costing and scheduling for service-based businesses.",
    icon: Wrench,
    image: "/industries/home-services.jpg",
    to: "/home-services",
  },
  {
    title: "Non-Profits",
    description: "Grant tracking and donor management for mission-driven organizations.",
    icon: HandHeart,
    image: "/industries/non-profits.jpg",
    to: "/non-profits",
  },
  {
    title: "Franchises",
    description: "Multi-location financial management and franchise performance tracking.",
    icon: Building,
    image: "/industries/franchises.jpg",
    to: "/franchises",
  },
  {
    title: "Restaurants",
    description: "Menu costing, inventory control, and restaurant-specific financial analytics.",
    icon: ChefHat,
    image: "/industries/restaurants.jpg",
    to: "/restaurants",
  },
];