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
  { href: "/contact", label: "Contact" },
];

const resourceLinks = [
  { href: "#", label: "Help Center" },
  { href: "#", label: "Documentation" },
  { href: "/blog", label: "Blog" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] text-white">
      <div className="px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Bookkeeping, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};