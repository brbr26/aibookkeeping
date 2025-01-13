import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div 
      className="md:pt-[160px] pt-[80px] pb-20 px-4 relative overflow-hidden bg-[#121212] min-h-[600px]"
      style={{
        containIntrinsicSize: '0 600px',
        contentVisibility: 'auto'
      }}
    >
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
              className="bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto font-medium text-lg py-6 shadow-lg hover:shadow-[#7C3AED]/25"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};