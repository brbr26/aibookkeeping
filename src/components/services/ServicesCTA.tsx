import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoRequestModal } from "@/components/DemoRequestModal";

export const ServicesCTA = () => {
  return (
    <section className="container mx-auto px-4 mt-16 text-center">
      <div className="bg-[#2A1364] rounded-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-oxanium text-white mb-6">
          Ready to Modernize Your Bookkeeping?
        </h2>
        <DemoRequestModal
          trigger={
            <Button 
              className="bg-[#C97DF1] hover:bg-[#85C1FF] text-[#1A1F2C] font-bold hover:text-[#2A1364] font-lato px-8 py-6 h-auto text-lg group transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          }
        />
      </div>
    </section>
  );
};