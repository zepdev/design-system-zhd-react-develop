import { FC } from 'react';
import { ContactForm } from '../contact-form';
import { ModalComponent } from '../modal-component';
import { LightboxContactFormProps } from './lightbox-contact-form.interface';
import { contactFormLocales } from '@/components/contact-form/contact-form-locales';

export const LightboxContactForm: FC<LightboxContactFormProps> = ({
  onSubmit,
  locale,
  isOpen,
  setIsOpen,
  loading,
  contactArea,
  contactList,
  privacyPolicyUrl,
}: LightboxContactFormProps) => {
  return (
    <ModalComponent isOpen={isOpen} label={contactFormLocales[locale].close} onClose={() => setIsOpen(false)}>
      <ContactForm
        onSubmit={onSubmit}
        locale={locale}
        headline={contactArea ? `${contactFormLocales[locale].lightboxHeadline} ${contactArea}` : contactFormLocales[locale].lightboxHeadlineFallback}
        tagline={contactFormLocales[locale].lightboxTagline}
        linkLists={(contactList && contactList?.length > 0) ? contactList : [
          {
            headline: contactFormLocales[locale].linkListGermany,
            links: [{ label: '0800 - 5892787', icon: 'phone', href: 'tel:0800-5892787' }]
          },
          {
            headline: contactFormLocales[locale].linkListInternational,
            links: [{ label: '+49 40 853 151-222', icon: 'phone', href: 'tel:+49 40 853 151-222' }],
          },
        ]}
        loading={loading}
        privacyPolicyUrl={privacyPolicyUrl}
      />
    </ModalComponent>
  );
};
