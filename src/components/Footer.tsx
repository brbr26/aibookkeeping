import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Learn about our company">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our careers page">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Read our blog">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Get help">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our terms">Terms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our privacy policy">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our documentation">Documentation</a></li>
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300 max-w-none">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <p>123 Business Ave<br />Suite 100<br />San Francisco, CA 94107</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <p>contact@aibookkeeping.com</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our terms of service">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our privacy policy">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="View our security information">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;