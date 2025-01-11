import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6">
            <span className="text-white">Smart Bookkeeping</span>,{" "}
            <span className="text-primary">Powered by AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline your financial operations with AI-powered bookkeeping. Save time, reduce errors, and gain valuable insights into your business finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};