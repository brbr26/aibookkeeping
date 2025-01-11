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
    <section 
      id="features" 
      className="py-20 bg-[#121212]"
      style={{
        containIntrinsicSize: '0 600px',
        contentVisibility: 'auto'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-oxanium"
          style={{
            containIntrinsicSize: '0 60px',
            contentVisibility: 'auto'
          }}
        >
          Why Choose AI Bookkeeping?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
                        bg-gradient-to-br from-[#1A1A1A] via-[#220F50]/80 to-[#1A1A1A]
                        border border-primary/20 hover:border-primary/40
                        transform hover:-translate-y-1 group"
              style={{
                minHeight: '280px',
                containIntrinsicSize: '0 280px',
                contentVisibility: 'auto'
              }}
            >
              <div 
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 
                          group-hover:bg-primary/20 transition-colors duration-300"
                style={{ minHeight: '56px' }}
              >
                <feature.icon className="h-7 w-7 text-[#4E94F4] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#4E94F4] mb-4 font-oxanium min-h-[28px]">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed min-h-[72px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};