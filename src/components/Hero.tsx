import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div 
      className="md:pt-[160px] pt-[120px] pb-20 px-4 min-h-[600px] relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#1a1a1a]"
      style={{
        containIntrinsicSize: '0 600px',
        contentVisibility: 'auto'
      }}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float delay-1000"></div>
      
      <div className="container mx-auto relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="animate-fade-in-up text-4xl md:text-6xl font-bold mb-8 font-oxanium leading-tight tracking-tight mx-2 md:mx-4"
            style={{
              containIntrinsicSize: '0 60px',
              contentVisibility: 'auto'
            }}
          >
            <span className="text-white/90 font-oxanium">Smarter Bookkeeping, </span>
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text font-oxanium">Powered by AI</span>
            <span className="text-white/90 font-oxanium">—Make Better Business Decisions...Fast</span>
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
            <Button 
              size="lg" 
              className="relative group bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto font-medium text-lg py-6 shadow-lg hover:shadow-purple-500/25"
            >
              Schedule Demo
              <span className="absolute inset-0 rounded-md overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent transform -skew-x-12 group-hover:animate-shine"></span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};