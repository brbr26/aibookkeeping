import { FC } from 'react';
import { FooterLink } from './FooterLink';

interface FooterLinkItem {
  href: string;
  label: string;
}

interface FooterLinkListProps {
  links: FooterLinkItem[];
}

export const FooterLinkList: FC<FooterLinkListProps> = ({ links }) => (
  <ul className="space-y-2">
    {links.map((link, index) => (
      <li key={index}>
        <FooterLink href={link.href}>{link.label}</FooterLink>
      </li>
    ))}
  </ul>
);