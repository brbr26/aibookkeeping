import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Learn about our features">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our pricing plans">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Read about our security measures">Security</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Learn about our company">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View career opportunities">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Contact our team">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Read our blog posts">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Visit our help center">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our documentation">Documentation</a></li>
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300 max-w-none">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="flex-1">5328 Lanier Islands Pkwy., Ste. 102<br />Buford, GA 30518</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="tel:+14046180500" 
                  className="hover:text-white transition-colors"
                  aria-label="Call our office"
                >
                  (404) 618-0500
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="mailto:info@aibookkeeping.com"
                  className="hover:text-white transition-colors"
                  aria-label="Email us"
                >
                  info@aibookkeeping.com
                </a>
              </div>
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