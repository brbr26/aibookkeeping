import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, CircuitBoard, Microchip } from "lucide-react";

export const Hero = () => {
  return (
    <div className="md:pt-[160px] pt-[80px] pb-20 px-4 relative overflow-hidden bg-[#121212]">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <Brain className="absolute top-1/4 left-1/4 w-36 h-36 animate-float text-primary" />
        <CircuitBoard className="absolute top-1/3 right-1/4 w-48 h-48 animate-float [animation-delay:2s] text-primary" />
        <Microchip className="absolute bottom-1/4 left-1/3 w-52 h-52 animate-float [animation-delay:4s] text-primary" />
        <Brain className="absolute bottom-1/3 right-1/3 w-36 h-36 animate-float [animation-delay:1s] text-primary" />
        <CircuitBoard className="absolute top-1/2 left-1/2 w-48 h-48 animate-float [animation-delay:3s] text-primary" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/80 to-[#121212] z-10" />

      <div className="container mx-auto relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/20 blur-xl opacity-50 -z-10" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-oxanium leading-tight">
              <span className="text-white font-oxanium">Smarter Bookkeeping, Better Business Decisions,</span>{" "}
              <span className="text-[#4E94F4] font-oxanium">Powered by AI</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Streamline your financial operations with AI-powered bookkeeping. Save time, reduce errors, and gain valuable insights into your business finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-[#4E94F4] hover:bg-[#4E94F4]/90 text-white shadow-lg shadow-[#4E94F4]/25 hover:shadow-[#4E94F4]/40 transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto font-medium text-lg py-6"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#8B5CF6] text-white hover:bg-[#8B5CF6]/10 hover:border-[#D946EF] transition-colors duration-200 w-full sm:w-auto font-medium text-lg py-6"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};