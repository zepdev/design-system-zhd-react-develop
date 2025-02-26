import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import React from 'react';
import { HeaderLongComponent } from '../header-long-component';
import { MultiLinkList } from '../multi-link-list';
import { FooterProps } from './Footer.interface';

export const Footer: React.FC<FooterProps> = ({
  socialMediaLinks,
  socialMediaTitle,
  footerLinks,
  headline,
  description,
  tagline,
  ...multiLinkListProps
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="zep-bg-greyscale-200" data-testid={'zep-footer'}>
      {headline && (
        <div className="zep-px-0.5 sm:zep-px-1 md:zep-px-2.5 xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5">
          <HeaderLongComponent headline={headline} description={description} tagline={tagline} />
        </div>
      )}

      <MultiLinkList {...multiLinkListProps} />
      <div className="zep-flex zep-flex-col zep-w-full">
        <div className="zep-px-0.5 sm:zep-px-1 md:zep-px-2.5 xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5  zep-flex zep-items-center zep-gap-2.5">
          <p className="zep-text-typography-dark-100 zep-typography-headlineXS-fluid-cqi">{socialMediaTitle}</p>
          <div className="zep-flex zep-gap-1">
            {socialMediaLinks.map((link, index) => (
              <div
                key={`${link.href}-${index}`}
                className="zep-rounded-full zep-bg-darkgrey-500 zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center"
              >
                <Link label="" icon={link.icon} href={link.href} target={link.target} />
              </div>
            ))}
          </div>
        </div>
        <div className="zep-px-0.5 sm:zep-px-1 md:zep-px-2.5 zep-flex md:zep-gap-4 md:zep-flex-row zep-flex-col xl:zep-items-center xl:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-400 zep-w-full">
          <p className="zep-text-typography-dark-100 zep-typography-bodyText">{`© ${currentYear} Zeppelin Power Systems GmbH`}</p>
          <div className="zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col">
            {footerLinks.map((link, index) => (
              <Link
                key={`${link.label}-${index}`}
                className="zep-text-typography-dark-100"
                label={link.label}
                mode={LinkMode.Inline}
                target={link.target}
                href={link.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
