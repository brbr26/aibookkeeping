import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, CircuitBoard, Microchip } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-[200px] pb-20 px-4 relative overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <Brain className="absolute top-1/4 left-1/4 w-16 h-16 animate-float" />
        <CircuitBoard className="absolute top-1/3 right-1/4 w-20 h-20 animate-float [animation-delay:2s]" />
        <Microchip className="absolute bottom-1/4 left-1/3 w-24 h-24 animate-float [animation-delay:4s]" />
        <Brain className="absolute bottom-1/3 right-1/3 w-16 h-16 animate-float [animation-delay:1s]" />
        <CircuitBoard className="absolute top-1/2 left-1/2 w-20 h-20 animate-float [animation-delay:3s]" />
      </div>

      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6 font-oxanium">
            <span className="text-white">Smart Bookkeeping</span>,{" "}
            <span className="text-primary">Powered by AI</span>
          </h1>
          <p className="text-xl text-white mb-8">
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