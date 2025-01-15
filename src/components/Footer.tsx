import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-[#121212] text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Column 1 */}
        <div className="col-span-2 space-y-4">
          <h3 className="font-semibold text-lg">Product</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Security
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-span-2 space-y-4">
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-2 space-y-4">
          <h3 className="font-semibold text-lg">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-span-6">
          <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <p>
                5328 Lanier Islands Pkwy., Ste. 102
                <br />
                Buford, GA 30518
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <a href="tel:+14046180500" className="hover:text-white transition-colors">
                (404) 618-0500
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <a href="mailto:info@aibookkeeping.com" className="hover:text-white transition-colors">
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
