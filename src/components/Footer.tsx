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

export const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] text-white">
      {/* 
        Remove or adjust `px-8` if you want it truly edge-to-edge on large screens.
        Also make sure there’s no parent container or negative margins on this footer.
      */}
      <div className="px-8 py-12">
        {/* 
          Ensure 4 columns on md+ screens. 
          If your screen is <768px wide, you’ll still see them stacked.
        */}
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

          {/* Make sure there's NO md:col-span-6 or any wrapping style here */}
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
