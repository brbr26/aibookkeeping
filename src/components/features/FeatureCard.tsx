import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => {
  return (
    <div 
      className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
                bg-gradient-to-br from-[#1A1A1A] via-[#220F50]/80 to-[#1A1A1A]
                border border-primary/20 hover:border-primary/40
                transform hover:-translate-y-1 group min-h-[250px]"
      style={{
        containIntrinsicSize: '0 250px',
        contentVisibility: 'auto'
      }}
    >
      <div 
        className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 
                  group-hover:bg-primary/20 transition-colors duration-300"
      >
        <Icon className="h-7 w-7 text-[#4E94F4] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-[#4E94F4] mb-4 font-oxanium min-h-[28px]">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed min-h-[72px]">
        {description}
      </p>
    </div>
  );
};