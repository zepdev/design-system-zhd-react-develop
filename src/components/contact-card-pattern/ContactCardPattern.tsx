import clsx from 'clsx';
import { FC } from 'react';
import { AnchorNavigationList } from '../anchor-navigation-list';
import { ContactCard } from '../contact-card/ContactCard';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { ContactCardPatternProps, ContactCardSectionProps } from './contact-card-pattern.interface';

const ContactsSection: FC<ContactCardSectionProps> = ({ contacts, scrollToIdLink, linkLabel }) => {
  const contactsList = contacts.map((contact) => ({ ...contact }));
  return (
    <div data-testid="contact-cardpattern" id={scrollToIdLink} className="zep-flex-col">
      <h4 className="zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-mt-3.5 zep-mb-2 sm:zep-mb-2.5">{linkLabel}</h4>
      <div
        className={clsx(
          'zep-gap-1',
          'sm:zep-gap-1.5',
          'zep-grid',
          'md:zep-inline-grid',
          {
            'zep-grid-cols-1': true, // Always show 1 card on small devices
            'md:zep-grid-cols-2': true, // Always show 2 cards on medium devices
            'xl:zep-grid-cols-3': true, // Always show 3 cards on larger devices
          },
        )}
      >
        {contactsList.map((card) => (
          <ContactCard className="zep-contents zep-gap-1 ram" {...card} />
        ))}
      </div>
    </div>
  );
};

export const ContactCardPattern: React.FC<ContactCardPatternProps> = ({ tabs, ...headerLongProps }) => {
  const anchorTabs = tabs.map(({ contacts, ...rest }) => rest);
  return (
    <Layout>
      <HeaderLongComponent {...headerLongProps} />
      <div className="zep-mt-2.5 sm:zep-mt-3 md:zep-mt-4 xl:zep-mt-5">
        <AnchorNavigationList tabs={anchorTabs} />
        <div className="zep-flex zep-flex-col">
          {tabs.map((tab) => (
            <ContactsSection {...tab} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
