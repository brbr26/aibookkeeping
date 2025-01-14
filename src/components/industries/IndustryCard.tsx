import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const IndustryCard = ({ title, description, icon: Icon }: IndustryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2A1364] to-[#1A1A1A] border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8 flex flex-col items-center text-center z-10">
        <div className="p-4 bg-gradient-to-br from-[#2A1364] to-[#1A1A1A] rounded-xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 font-oxanium group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* 3D effect elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};