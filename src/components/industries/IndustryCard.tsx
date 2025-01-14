import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const IndustryCard = ({ title, description, icon: Icon }: IndustryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary transition-all duration-300">
      <div className="relative p-6 flex flex-col items-center text-center z-10">
        <div className="p-3 bg-[#2A1364] rounded-lg mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 font-oxanium">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};