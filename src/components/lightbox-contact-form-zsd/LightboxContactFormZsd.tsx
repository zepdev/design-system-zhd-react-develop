import { contactFormLocales } from '@/components/contact-form/contact-form-locales';
import { FC } from 'react';
import { ContactFormZsd } from '../contact-form-zsd';
import { contactFormZsdLocales } from '../contact-form-zsd/contact-form-zsd-locales';
import { ModalComponent } from '../modal-component';
import { LightboxContactFormZsdProps } from './lightbox-contact-form-zsd.interface';

export const LightboxContactFormZsd: FC<LightboxContactFormZsdProps> = ({
  onSubmit,
  locale,
  isOpen,
  setIsOpen,
  loading,
  contactArea,
  contactList,
  privacyPolicyUrl,
}: LightboxContactFormZsdProps) => {
  return (
    <ModalComponent isOpen={isOpen} label={contactFormLocales[locale].close} onClose={() => setIsOpen(false)}>
      <ContactFormZsd
        onSubmit={onSubmit}
        locale={locale}
        headline={
          contactArea
            ? `${contactFormLocales[locale].lightboxHeadline} ${contactArea}`
            : contactFormLocales[locale].lightboxHeadlineFallback
        }
        tagline={contactFormLocales[locale].lightboxTagline}
        linkLists={
          contactList && contactList?.length > 0
            ? contactList
            : [
                {
                  headline: contactFormZsdLocales[locale].linkListGermany,
                  links: [{ label: '+49 7541 202 - 0', icon: 'phone', href: 'tel:+4975412020' }],
                },
              ]
        }
        loading={loading}
        privacyPolicyUrl={privacyPolicyUrl}
      />
    </ModalComponent>
  );
};
