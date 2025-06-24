import { Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import React from 'react';
import { getDataLayer } from '../../utils/getDataLayer';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { slugify } from '../../utils/slugify';
import { Layout } from '../layout';
import { MultiLinkList } from '../multi-link-list';
import { FooterProps } from './Footer.interface';

export const Footer: React.FC<FooterProps> = ({
  socialMediaLinks,
  socialMediaTitle,
  footerLinks,
  footerText,
  ...multiLinkListProps
}) => {
  const currentYear = new Date().getFullYear();
  const datalayer = getDataLayer();

  return (
    <div className="zep-flex zep-flex-col zep-items-center zep-gap-1 sm:zep-gap-1.5 md:zep-gap-2.5">
      {footerText && (
        <Layout>
          <span className="zep-typography-supportText zep-text-typography-dark-70 zep-opacity-70">{footerText}</span>
        </Layout>
      )}
      <Layout wrapperClassname="!zep-mb-[0] zep-bg-greyscale-200 zep-pt-1 md:zep-pt-1.5 lg:zep-pt-2.5">
        <MultiLinkList
          linkListItemClassname="zep-px-[0] sm:zep-px-[0] md:zep-px-[0]"
          isPatternPart
          isFooterList
          {...multiLinkListProps}
        />
        <div data-testid="zep-footer">
          <div className="zep-flex zep-flex-col zep-w-full">
            <div className="lg:zep-pt-5 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5 md:zep-px-[0px] zep-flex zep-items-center zep-gap-2.5">
              <p className="zep-text-darkgrey-500 zep-typography-headlineXS-fluid-cqi">{socialMediaTitle}</p>
              <div className="zep-flex zep-gap-1">
                {socialMediaLinks.map((link) => (
                  <div
                    key={link.socialIcon || link.icon}
                    className="zep-rounded-full zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center [&>a]:zep-w-[24px] [&>a]:zep-h-[24px]"
                  >
                    <Link
                      label=""
                      target={link.href?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
                      socialIcon={link.socialIcon}
                      icon={link.icon}
                      href={getUrlWithTrailingSlash(link.href)}
                      onClickCapture={() => {
                        datalayer?.push({
                          event: 'interaction_footer',
                          link_text: link.socialIcon,
                          link_context: link.socialIcon,
                          link_section: `module-footer-${slugify(link?.socialIcon || '')}`,
                        });
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="zep-flex lg:zep-flex-row zep-flex-col lg:zep-items-center lg:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-700 zep-w-full">
              <p className="zep-text-greyscale-900 zep-typography-bodyText">{`© ${currentYear} Zeppelin GmbH`}</p>
              <div className="zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    className="zep-text-primary-default"
                    target={link.href?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
                    label={link.label}
                    mode={LinkMode.Inline}
                    onClickCapture={() => {
                      datalayer?.push({
                        event: 'interaction_footer',
                        link_text: link.label,
                        link_context: link.label,
                        link_section: `module-footer-${slugify(link.label)}`,
                      });
                    }}
                    href={getUrlWithTrailingSlash(link.href)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
