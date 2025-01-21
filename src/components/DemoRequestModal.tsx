import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useState } from "react";

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
      
      <DialogContent className="sm:max-w-[850px] max-h-[800px] bg-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#2A1364] font-oxanium">
            Schedule a Demo
          </h2>
          <p className="text-gray-600 mb-4 font-lato">
            Please contact us to schedule a demo of our AI-powered bookkeeping services.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};