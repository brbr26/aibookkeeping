import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface DemoRequestModalProps {
  trigger: React.ReactNode;
}

export const DemoRequestModal = ({ trigger }: DemoRequestModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Custom trigger wrapper to handle the open state */}
      <div onClick={() => setIsOpen(true)}>
        {trigger}
      </div>
      
      <DialogContent className="sm:max-w-[425px] bg-[#121212]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-oxanium text-white">Schedule Your Demo</DialogTitle>
          <DialogDescription className="text-white/80">
            Experience how AI Bookkeeping can transform your business finances.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <p className="text-white/70">
            Our team will reach out shortly to schedule a personalized demo of our AI-powered bookkeeping platform.
          </p>
          
          <Button 
            onClick={() => setIsOpen(false)}
            className="bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
          >
            Got it
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};