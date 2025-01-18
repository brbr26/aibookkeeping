import { Bot, Clock, LineChart, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import { FeatureCard } from "./features/FeatureCard";

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-20 bg-[#121212] min-h-[600px] opacity-0 translate-y-10"
      style={{
        containIntrinsicSize: '0 600px',
        contentVisibility: 'auto'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-oxanium min-h-[48px]"
          style={{
            containIntrinsicSize: '0 48px',
            contentVisibility: 'auto'
          }}
        >
          Why Choose AI Bookkeeping?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};