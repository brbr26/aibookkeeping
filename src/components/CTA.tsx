import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

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
      <div className="container mx-auto px-4">
        <div className="bg-[#7C3AED] rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-oxanium">
              Ready to Transform Your Bookkeeping?
            </h2>
            <p className="text-white text-lg mb-8">
              Join thousands of businesses using AI Bookkeeping to streamline their financial operations.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="group bg-white hover:bg-gray-100 text-[#7C3AED] font-semibold"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};