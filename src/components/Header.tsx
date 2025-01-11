import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#121212] backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src="/lovable-uploads/d6f370ae-2bad-47f8-9041-59ecc856d608.png" alt="AI Bookkeeping" className="h-[48.75px] w-[225px] object-contain" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white hover:text-primary transition-colors font-lato">Features</a>
            <a href="#services" className="text-white hover:text-primary transition-colors font-lato">Services</a>
            <a href="#pricing" className="text-white hover:text-primary transition-colors font-lato">Pricing</a>
            <a href="#resources" className="text-white hover:text-primary transition-colors font-lato mr-6">Resources</a>
            <Button 
              className="w-32 group bg-gradient-to-r from-[#C97DF1] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
            >
              Get Started
            </Button>
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
              <a href="#features" className="text-white hover:text-primary transition-colors font-lato">Features</a>
              <a href="#services" className="text-white hover:text-primary transition-colors font-lato">Services</a>
              <a href="#pricing" className="text-white hover:text-primary transition-colors font-lato">Pricing</a>
              <a href="#resources" className="text-white hover:text-primary transition-colors font-lato">Resources</a>
              <Button 
                className="w-full group bg-gradient-to-r from-[#C97DF1] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};