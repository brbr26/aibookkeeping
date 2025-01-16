import { FooterSection } from "./footer/FooterSection";
import { FooterLinkList } from "./footer/FooterLinkList";
import { FooterContactInfo } from "./footer/FooterContactInfo";

const productLinks = [
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Security" },
];

const companyLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Contact" },
];

const resourceLinks = [
  { href: "#", label: "Blog" },
  { href: "#", label: "Help Center" },
  { href: "#", label: "Documentation" },
];

export const Footer = () => (
  <footer className="w-full bg-[#121212] text-white">
    {/* You can remove px-8 if you truly want edge-to-edge text on large screens */}
    <div className="px-8 py-12">
      {/* Force a 4-column layout at md and above */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        <FooterSection title="Product">
          <FooterLinkList links={productLinks} />
        </FooterSection>

        <FooterSection title="Company">
          <FooterLinkList links={companyLinks} />
        </FooterSection>

        <FooterSection title="Resources">
          <FooterLinkList links={resourceLinks} />
        </FooterSection>

        <FooterSection title="Contact Us">
          <FooterContactInfo />
        </FooterSection>
      </div>

      {/* Footer bottom row */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} AI Bookkeeping, LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
