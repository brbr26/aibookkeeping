import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="bg-[#4E94F4] rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-oxanium">
              Ready to Transform Your Bookkeeping?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of businesses using AI Bookkeeping to streamline their financial operations.
            </p>
            <Button size="lg" variant="secondary" className="group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};