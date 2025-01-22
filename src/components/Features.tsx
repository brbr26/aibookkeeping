import { FeatureCard } from "./features/FeatureCard";
import { BookOpen, Brain, ChartBar, Clock, Shield, Zap } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-oxanium">
          Why Choose AI Bookkeeping?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            Icon={Brain}
            title="AI-Powered Accuracy"
            description="Our advanced AI algorithms ensure precise financial records and minimize human error in bookkeeping processes."
          />
          <FeatureCard
            Icon={Clock}
            title="Time-Saving Automation"
            description="Automate repetitive tasks and streamline your bookkeeping workflow, saving valuable time for your business."
          />
          <FeatureCard
            Icon={ChartBar}
            title="Real-Time Analytics"
            description="Get instant insights into your financial performance with comprehensive analytics and reporting tools."
          />
          <FeatureCard
            Icon={Shield}
            title="Enhanced Security"
            description="Bank-level encryption and security measures protect your sensitive financial data at all times."
          />
          <FeatureCard
            Icon={Zap}
            title="Quick Integration"
            description="Seamlessly integrate with your existing financial tools and software for a smooth transition."
          />
          <FeatureCard
            Icon={BookOpen}
            title="Compliance Ready"
            description="Stay compliant with current regulations and tax requirements through automated updates and checks."
          />
        </div>
      </div>
    </section>
  );
};