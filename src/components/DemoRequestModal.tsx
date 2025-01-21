import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useState } from "react";
import { X } from "lucide-react";

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
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" style={{ color: '#121212' }} />
          <span className="sr-only">Close</span>
        </button>
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