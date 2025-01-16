import { FC } from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const FooterSection: FC<FooterSectionProps> = ({
  title,
  children,
- className = "md:col-span-2"
+ className = ""
}) => (
  <div className={className}>
    <h3 className="font-semibold text-lg mb-4 md:mb-0">{title}</h3>
    {children}
  </div>
);
