import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesCTA = () => {
  return (
    <section className="container mx-auto px-4 mt-16 text-center">
      <div className="bg-[#4E94F4] rounded-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-oxanium text-white mb-6">
          Ready to Modernize Your Bookkeeping?
        </h2>
        <Button 
          className="bg-white text-[#4E94F4] hover:bg-gray-100 font-lato px-8 py-6 h-auto text-lg group"
        >
          Get Started Today
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};