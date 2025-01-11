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
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
          Why Choose AI Bookkeeping?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};