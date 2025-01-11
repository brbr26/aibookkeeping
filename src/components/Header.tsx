import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/d6f370ae-2bad-47f8-9041-59ecc856d608.png" alt="AI Bookkeeping" className="h-8 w-8" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-white hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-white hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-white hover:text-primary transition-colors">Pricing</a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
              <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};