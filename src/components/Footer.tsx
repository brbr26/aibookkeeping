import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Learn about our features">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our pricing plans">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Read about our security measures">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Learn about our company">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View career opportunities">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Contact our team">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Read our blog posts">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Visit our help center">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our documentation">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Connect with us on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Bookkeeping, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};