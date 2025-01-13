import { Button } from "@/components/ui/button";
import { Brain, CircuitBoard, Microchip } from "lucide-react";

export const Hero = () => {
  return (
    <div 
      className="md:pt-[160px] pt-[80px] pb-20 px-4 relative overflow-hidden bg-[#121212] min-h-[600px]"
      style={{
        containIntrinsicSize: '0 600px',
        contentVisibility: 'auto'
      }}
    >
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
          <div className="relative min-h-[120px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/20 blur-xl opacity-50 -z-10" />
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 font-oxanium leading-tight"
              style={{
                containIntrinsicSize: '0 60px',
                contentVisibility: 'auto'
              }}
            >
              <span className="text-white font-oxanium">Smarter Bookkeeping, Better Business Decisions,</span>{" "}
              <span className="text-[#4E94F4] font-oxanium">Powered by AI</span>
            </h1>
          </div>
          <p 
            className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-2xl mx-auto min-h-[48px]"
            style={{
              containIntrinsicSize: '0 48px',
              contentVisibility: 'auto'
            }}
          >
            Streamline your financial operations with AI-powered bookkeeping. Save time, reduce errors, and gain valuable insights into your business finances.
          </p>
          <div className="flex justify-center items-center min-h-[60px]">
            <Button 
              size="lg" 
              className="bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto font-medium text-lg py-6 shadow-lg hover:shadow-[#8B5CF6]/25"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};