import { IndustriesGrid } from "./industries/IndustriesGrid";

export const HomeIndustries = () => {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-oxanium">
          Industries We{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
            Serve
          </span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Our AI-powered bookkeeping solutions are tailored to meet the unique financial management needs of these industries:
        </p>
        <IndustriesGrid />
      </div>
    </section>
  );
};