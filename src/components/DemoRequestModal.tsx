import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface DemoRequestModalProps {
  trigger: React.ReactNode;
}

export const DemoRequestModal = ({ trigger }: DemoRequestModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Load Calendly script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Custom trigger wrapper to handle the open state */}
      <div onClick={() => setIsOpen(true)}>
        {trigger}
      </div>
      
      <DialogContent className="sm:max-w-[850px] max-h-[800px] bg-white p-0">
        <div 
          className="calendly-inline-widget w-full" 
          data-url="https://calendly.com/bba/test-event?hide_event_type_details=1&background_color=121212&text_color=ffffff&primary_color=843eef"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </DialogContent>
    </Dialog>
  );
};