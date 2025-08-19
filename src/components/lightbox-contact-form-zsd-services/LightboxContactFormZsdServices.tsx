import { FC } from 'react';
import { LightboxContactFormZsdServicesProps } from './LightboxContactFormZsdServices.interface';
import { ModalComponent } from '@/components/modal-component';
import { ContactFormZsdServices } from '@/components/contact-form-zsd-services';
import { contactFormZsdLocales } from '@/components/contact-form-zsd/contact-form-zsd-locales';

export const LightboxContactFormZsdServices: FC<LightboxContactFormZsdServicesProps> = ({
  onSubmit,
  locale,
  isOpen,
  setIsOpen,
  loading,
  contactArea,
  privacyPolicyUrl,
}) => {
  return (
    <ModalComponent isOpen={isOpen} label={contactFormZsdLocales[locale].close} onClose={() => setIsOpen(false)}>
      <ContactFormZsdServices
        isLightbox
        onSubmit={onSubmit}
        locale={locale}
        headline={
          contactArea
            ? `${contactFormZsdLocales[locale].lightboxHeadline} ${contactArea}`
            : contactFormZsdLocales[locale].lightboxHeadlineFallback
        }
        tagline={contactFormZsdLocales[locale].lightboxTagline}
        loading={loading}
        privacyPolicyUrl={privacyPolicyUrl}
      />
    </ModalComponent>
  );
}
