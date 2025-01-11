import { Bot, Clock, LineChart, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Accuracy",
    description: "Our AI system ensures precise categorization and error-free bookkeeping."
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and focus on growing your business."
  },
  {
    icon: LineChart,
    title: "Real-time Insights",
    description: "Get instant access to financial reports and business analytics."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-level security and automatic compliance updates."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-oxanium">
          Why Choose AI Bookkeeping?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-[#1A1A1A] rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary/10"
            >
              <div className="w-12 h-12 bg-[#4E94F4]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-[#4E94F4]" />
              </div>
              <h3 className="text-xl font-semibold text-[#4E94F4] mb-2 font-oxanium">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};