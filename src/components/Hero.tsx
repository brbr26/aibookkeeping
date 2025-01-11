import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, CircuitBoard, Microchip } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-[200px] pb-20 px-4 relative overflow-hidden bg-[#121212]">
      {/* Background Icons */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <Brain className="absolute top-1/4 left-1/4 w-16 h-16 animate-float" />
        <CircuitBoard className="absolute top-1/3 right-1/4 w-20 h-20 animate-float [animation-delay:2s]" />
        <Microchip className="absolute bottom-1/4 left-1/3 w-24 h-24 animate-float [animation-delay:4s]" />
        <Brain className="absolute bottom-1/3 right-1/3 w-16 h-16 animate-float [animation-delay:1s]" />
        <CircuitBoard className="absolute top-1/2 left-1/2 w-20 h-20 animate-float [animation-delay:3s]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/50 via-[#121212] to-[#121212] -z-20" />

      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/20 blur-xl opacity-50 -z-10" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-oxanium leading-tight">
              <span className="text-white font-oxanium">Smart Bookkeeping</span>,{" "}
              <span className="text-[#C97DF1] font-oxanium">Powered by AI</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Streamline your financial operations with AI-powered bookkeeping. Save time, reduce errors, and gain valuable insights into your business finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#C97DF1] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto font-medium"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#8B5CF6] text-white hover:bg-[#8B5CF6]/10 hover:border-[#D946EF] transition-colors duration-200 w-full sm:w-auto font-medium"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};