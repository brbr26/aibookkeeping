import { IndustryCard } from "./IndustryCard";
import { industries } from "@/data/industries";

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