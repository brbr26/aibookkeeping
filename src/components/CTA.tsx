import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { DemoRequestModal } from "./DemoRequestModal";

export const CTA = () => {
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
    <section ref={sectionRef} className="py-20 bg-[#121212] opacity-0 translate-y-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#7C3AED] rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-center text-white mb-8">
            Experience the future of bookkeeping with our AI-powered solutions.
          </p>
          <div className="flex justify-center">
            <DemoRequestModal
              trigger={
                <Button className="bg-white text-[#7C3AED] hover:bg-gray-200 transition-colors font-semibold">
                  Schedule a Demo
                  <ArrowRight className="ml-2" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
