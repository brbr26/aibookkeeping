import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DemoRequestModal } from "./DemoRequestModal";

export const Hero = () => {
  return (
    <div 
      className="md:pt-[160px] pt-[120px] pb-20 px-2 min-h-[600px] relative overflow-hidden bg-[#121212]"
      style={{
        containIntrinsicSize: '0 600px',
        contentVisibility: 'auto'
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-64 -left-64 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-[300px] h-[300px] top-32 right-32 bg-gradient-to-l from-blue-500/30 to-transparent rounded-full blur-3xl animate-float animation-delay-200"></div>
        <div className="absolute w-[400px] h-[400px] bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-purple-600/30 to-transparent rounded-full blur-3xl animate-float animation-delay-300"></div>
      </div>

      {/* SVG Pattern Overlay */}
      <div className="absolute inset-0" style={{ opacity: 0.4 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(155, 135, 245, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            className="animate-fade-in-up text-[34px] md:text-6xl font-bold mb-8 font-oxanium leading-[1.0] md:leading-[1.0] tracking-tight mx-0"
            style={{
              containIntrinsicSize: '0 60px',
              contentVisibility: 'auto'
            }}
          >
            <span className="text-white/90 font-oxanium block">Simplifies Business</span>
            <span className="text-white/90 font-oxanium block">Finance with</span>
            <span className="relative block">
              <span className="text-[#9F7AEA] font-oxanium">Advanced AI</span>
              <span className="text-white/90 font-oxanium"> &</span>
            </span>
            <span className="text-white/90 font-oxanium block">Machine Learning</span>
          </h1>
          
          <p 
            className="animate-fade-in-up animation-delay-200 text-base md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto min-h-[48px] font-light"
            style={{
              containIntrinsicSize: '0 48px',
              contentVisibility: 'auto'
            }}
          >
            Streamline your financial operations with AI-powered bookkeeping. Save time, reduce errors, and gain valuable insights into your business finances.
          </p>
          
          <div className="animate-fade-in-up animation-delay-300 flex justify-center items-center min-h-[60px]">
            <DemoRequestModal
              trigger={
                <Button 
                  size="lg" 
                  className="relative group bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto font-medium text-xl py-8 px-10 shadow-lg hover:shadow-purple-500/25 flex items-center gap-3"
                >
                  Schedule Demo
                  <ArrowRight className="w-6 h-6" />
                  <span className="absolute inset-0 rounded-md overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent transform -skew-x-12 group-hover:animate-shine"></span>
                  </span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};