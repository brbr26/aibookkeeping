import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const IndustryCard = ({ title, description, icon: Icon }: IndustryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2A1364]/80 to-[#1A1A1A] border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content container */}
      <div className="relative p-8 flex flex-col items-center text-center z-10">
        {/* Icon container with enhanced 3D effect */}
        <div className="p-4 bg-gradient-to-br from-[#3A2374] to-[#2A1364] rounded-xl mb-6 shadow-xl transform group-hover:scale-110 transition-all duration-500 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-500" />
        </div>
        
        {/* Title with enhanced visibility */}
        <h3 className="text-xl font-bold text-white mb-4 font-oxanium group-hover:text-primary-light transition-colors duration-500">
          {title}
        </h3>
        
        {/* Description with improved readability */}
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
          {description}
        </p>
      </div>
      
      {/* Enhanced 3D effect elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
    </div>
  );
};