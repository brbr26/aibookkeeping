import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div 
      className="md:pt-[160px] pt-[120px] pb-20 px-4 bg-[#121212] min-h-[600px] relative overflow-hidden"
      style={{
        containIntrinsicSize: '0 600px',
        contentVisibility: 'auto'
      }}
    >
      <div className="container mx-auto relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 font-oxanium leading-tight"
            style={{
              containIntrinsicSize: '0 60px',
              contentVisibility: 'auto'
            }}
          >
            <span className="text-white font-oxanium">Smarter Bookkeeping, </span>
            <span className="text-[#7C3AED] font-oxanium">Powered by AI</span>
            <span className="text-white font-oxanium">—Make Better Decisions Fast</span>
          </h1>
          <p 
            className="text-base md:text-xl text-white mb-12 leading-relaxed max-w-2xl mx-auto min-h-[48px]"
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