import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-[#121212] text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Product",
            links: [
              { href: "#", label: "Features" },
              { href: "#", label: "Pricing" },
              { href: "#", label: "Security" },
            ],
          },
          {
            title: "Company",
            links: [
              { href: "#", label: "About" },
              { href: "#", label: "Careers" },
              { href: "#", label: "Contact" },
            ],
          },
          {
            title: "Resources",
            links: [
              { href: "#", label: "Blog" },
              { href: "#", label: "Help Center" },
              { href: "#", label: "Documentation" },
            ],
          },
        ].map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="font-semibold text-lg">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={`Learn about ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:col-span-3 lg:col-span-1">
          <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
          <div className="space-y-4 text-gray-300">
            {[
              {
                Icon: MapPin,
                content: (
                  <p>
                    5328 Lanier Islands Pkwy., Ste. 102
                    <br />
                    Buford, GA 30518
                  </p>
                ),
              },
              {
                Icon: Phone,
                content: (
                  <a
                    href="tel:+14046180500"
                    className="hover:text-white transition-colors"
                    aria-label="Call our office"
                  >
                    (404) 618-0500
                  </a>
                ),
              },
              {
                Icon: Mail,
                content: (
                  <a
                    href="mailto:info@aibookkeeping.com"
                    className="hover:text-white transition-colors"
                    aria-label="Email us"
                  >
                    info@aibookkeeping.com
                  </a>
                ),
              },
            ].map(({ Icon, content }, index) => (
              <div key={index} className="flex items-start gap-3">
                <Icon className="h-5 w-5 mt-1 flex-shrink-0" />
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} AI Bookkeeping, LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
