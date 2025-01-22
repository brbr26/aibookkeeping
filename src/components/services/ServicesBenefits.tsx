import { Check } from "lucide-react";

export const ServicesBenefits = () => {
  const benefits = [
    "Real-time financial insights and reporting",
    "Automated transaction categorization",
    "Tax-ready financial statements",
    "24/7 access to your financial data",
    "Secure cloud-based storage",
    "Integration with popular accounting software"
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12 font-oxanium">
        Benefits of AI Bookkeeping
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3 bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
            <Check className="w-6 h-6 text-[#4E94F4] flex-shrink-0 mt-1" />
            <p className="text-gray-300 font-lato">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
};