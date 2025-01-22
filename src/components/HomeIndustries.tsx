import { IndustriesGrid } from "./industries/IndustriesGrid";

export const HomeIndustries = () => {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-oxanium">
          Industries We Serve
        </h2>
        <IndustriesGrid />
      </div>
    </section>
  );
};
