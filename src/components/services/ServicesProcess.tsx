import { ArrowRight } from "lucide-react";

export const ServicesProcess = () => {
  const steps = [
    {
      title: "Initial Setup",
      description: "Connect your accounts and customize your preferences"
    },
    {
      title: "AI Processing",
      description: "Our AI system categorizes and organizes your transactions"
    },
    {
      title: "Review & Insights",
      description: "Get detailed reports and actionable financial insights"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12 font-oxanium">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
              <h3 className="text-xl font-bold text-white mb-3 font-oxanium">{step.title}</h3>
              <p className="text-gray-300 font-lato">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#4E94F4]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};