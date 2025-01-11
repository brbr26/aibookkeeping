import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] hover:border-[#4E94F4] transition-all">
      <Icon className="w-12 h-12 text-[#4E94F4] mb-4" />
      <h3 className="text-xl font-oxanium text-white mb-3">{title}</h3>
      <p className="text-gray-300 font-lato mb-4">{description}</p>
    </div>
  );
};