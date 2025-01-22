import { ServicesGrid } from "./services/ServicesGrid";

export const HomeServices = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-oxanium">
          Our Services
        </h2>
        <ServicesGrid />
      </div>
    </section>
  );
};