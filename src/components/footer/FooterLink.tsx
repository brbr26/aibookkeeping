import { FC } from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors">
    {children}
  </a>
);