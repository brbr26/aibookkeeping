import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  href?: string;
}

export const IndustryCard = ({ title, description, icon: Icon, href }: IndustryCardProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const CardContent = () => (
    <div className="relative p-8 flex flex-col items-center text-center z-10">
      <div className="p-4 bg-gradient-to-br from-[#5A3494] to-[#4A2384] rounded-xl mb-6 shadow-xl transform group-hover:scale-110 transition-all duration-500 relative">
        <div className="absolute inset-0 bg-[#9F7AEA]/20 rounded-xl blur-[2px] group-hover:blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <Icon className="w-8 h-8 text-[#D6BCFA] group-hover:text-white transition-colors duration-500" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 font-oxanium bg-clip-text text-transparent bg-gradient-to-r from-[#D6BCFA] via-white to-[#D6BCFA] group-hover:from-white group-hover:via-[#D6BCFA] group-hover:to-white transition-all duration-500">
        {title}
      </h3>
      
      <p className="text-[#E9D8FD] text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
        {description}
      </p>
    </div>
  );

  const cardClasses = "group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#4A2384] to-[#2A1364] border border-primary/30 hover:border-primary transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2";

  if (href) {
    return (
      <Link to={href} onClick={handleClick} className={cardClasses}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#9F7AEA]/40 via-[#D6BCFA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardContent />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#9F7AEA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#9F7AEA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        <div className="absolute inset-0 rounded-xl border border-[#9F7AEA]/30 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#9F7AEA]/40 via-[#D6BCFA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9F7AEA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-bl from-[#9F7AEA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      <div className="absolute inset-0 rounded-xl border border-[#9F7AEA]/30 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
    </div>
  );
};