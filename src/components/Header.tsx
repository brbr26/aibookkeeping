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
            <Link to="/" aria-label="Go to homepage">
              <img src="/lovable-uploads/d6f370ae-2bad-47f8-9041-59ecc856d608.png" alt="AI Bookkeeping" className="h-[39px] w-[180px] object-contain" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white hover:text-primary transition-colors font-lato" aria-label="View our features">Features</a>
            <Link to="/services" className="text-white hover:text-primary transition-colors font-lato" aria-label="View our services">Services</Link>
            <a href="#pricing" className="text-white hover:text-primary transition-colors font-lato" aria-label="View our pricing">Pricing</a>
            <a href="#resources" className="text-white hover:text-primary transition-colors font-lato" aria-label="View our resources">Resources</a>
            <Link to="/login" className="text-white hover:text-primary transition-colors font-lato" aria-label="Login to your account">Login</Link>
            <Button 
              className="bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#7C3AED]/25 font-medium"
              aria-label="Get started with AI Bookkeeping"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-white hover:text-primary transition-colors font-lato" aria-label="View our features">Features</a>
              <Link to="/services" className="text-white hover:text-primary transition-colors font-lato" aria-label="View our services">Services</Link>
              <a href="#pricing" className="text-white hover:text-primary transition-colors font-lato" aria-label="View our pricing">Pricing</a>
              <a href="#resources" className="text-white hover:text-primary transition-colors font-lato" aria-label="View our resources">Resources</a>
              <Link to="/login" className="text-white hover:text-primary transition-colors font-lato" aria-label="Login to your account">Login</Link>
              <Button 
                className="bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#7C3AED]/25 font-medium w-full"
                aria-label="Get started with AI Bookkeeping"
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