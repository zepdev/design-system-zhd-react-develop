import { zodResolver } from '@hookform/resolvers/zod';

import { FunctionalIcon } from '@zepdev/design-system-component-library-react';
import { FC, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { getDataLayer } from '../../utils/getDataLayer';
import { contactFormLocales } from '../contact-form/contact-form-locales';
import { Checkbox } from '../form-fields/checkbox';
import { Input } from '../form-fields/input';
import { PhoneInput } from '../form-fields/phone-input';
import { TextArea } from '../form-fields/text-area';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { ContactFormLargeProps } from './contact-form-large-interface';

const ContactFormLarge: FC<ContactFormLargeProps> = ({
  privacyPolicyUrl,
  onSubmit,
  headline,
  tagline,
  locale,
  loading,
  success,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const Schema = z.object({
    vorname: z.string().min(1, { message: contactFormLocales[locale].thisFieldIsRequired }),
    name: z.string().min(1, { message: contactFormLocales[locale].thisFieldIsRequired }),
    email: z
      .string()
      .min(1, { message: contactFormLocales[locale].thisFieldIsRequired })
      .email({ message: 'Email is not in valid format' }),
    phone: z.string().min(5, { message: contactFormLocales[locale].thisFieldIsRequired }),

    privacyCheck: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Privacy.' }),
    }),
    subject: z.string().min(1, { message: contactFormLocales[locale].thisFieldIsRequired }),
    message: z.string().min(1, { message: contactFormLocales[locale].thisFieldIsRequired }),
    honeypot: z.union([z.string(), z.undefined()]),
  });

  type FormSchemaType = z.infer<typeof Schema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(Schema) });

  const datalayer = getDataLayer();
  const submitFunction: SubmitHandler<FormSchemaType> = async (data: FormSchemaType) => {
    datalayer?.push({
      event: 'generate_lead',
      form_context: headline,
    });
    onSubmit(data);
  };

  useEffect(() => {
    if (success && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [success]);

  return (
    <Layout>
      <div data-testid="zep-contact-form-wrapper">
        <div
          className={`zep-flex ${!success && 'md:zep-flex-row'} zep-flex-col md:zep-items-start xl:zep-gap-5 md:zep-gap-3 sm:zep-gap-2 zep-gap-1.5`}
        >
          <HeaderShortComponent headline={headline} tagline={tagline} className="md:zep-w-[30%] xl:zep-w-[50%]" />
          {success ? (
            <div
              ref={targetRef}
              className="zep-p-1 zep-border-primary-default zep-bg-[#3D2D81] zep-text-typography-light-100 zep-w-full zep-flex zep-gap-2"
            >
              <FunctionalIcon name="check-circle" />
              {locale === 'de' ? (
                <p>
                  Vielen Dank, dass Sie sich an uns wenden. Ihre Nachricht wurde erfolgreich übermittelt, und unser Team
                  wird sie umgehend prüfen. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
              ) : (
                <p>
                  Thank you for reaching out. Your message has been successfully submitted, and our team will review it
                  promptly. We’ll be in touch as soon as possible.
                </p>
              )}
            </div>
          ) : (
            <div className="md:zep-w-[70%] xl:zep-w-[50%]">
              <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1.5 zep-text-typography-dark-100">
                {contactFormLocales[locale].contactInformation}
              </p>

              <form onSubmit={handleSubmit(submitFunction)}>
                <input type="text" style={{ display: 'none' }} {...register('honeypot')} />

                <Input
                  className="zep-w-full"
                  label={contactFormLocales[locale].firstName}
                  {...register('vorname')}
                  error={errors['vorname']?.message}
                  required
                />

                <Input
                  className="zep-w-full"
                  label={contactFormLocales[locale].name}
                  {...register('name')}
                  error={errors['name']?.message}
                  required
                />

                <PhoneInput
                  {...register('phone')}
                  label={contactFormLocales[locale].phoneNumber}
                  error={errors['phone']?.message && contactFormLocales[locale].thisFieldIsRequired}
                  defaultCountry={locale === 'de' ? 'DE' : undefined}
                />

                <Input
                  error={errors['email']?.message}
                  className="zep-w-full"
                  label={contactFormLocales[locale].emailAddress}
                  {...register('email')}
                  required
                />

                <p className="zep-typography-headlineSM-fluid-cqi  zep-mb-1 zep-text-typography-dark-100">
                  {contactFormLocales[locale].writeUsAMessage}
                </p>

                <Input
                  className="zep-w-full"
                  label={contactFormLocales[locale].subject}
                  {...register('subject')}
                  error={errors['subject']?.message}
                  required
                />

                <TextArea
                  label={contactFormLocales[locale].yourMessage}
                  {...register('message')}
                  className="zep-h-[126px]"
                />

                <div className="zep-flex zep-flex-col zep-gap-2 zep-w-full zep-mb-2">
                  <div className="zep-flex zep-items-center zep-text-typography-dark-100">
                    <Checkbox {...register('privacyCheck')} error={errors['privacyCheck']?.message} />
                    <p>
                      {`${contactFormLocales[locale].privacy} `}
                      <u>
                        <a href={privacyPolicyUrl}>{contactFormLocales[locale].dataProtectionStatement}</a>
                      </u>
                    </p>
                  </div>
                </div>

                <Button disabled={loading} variant={ZsdButtonVariant.PrimaryDark} className="!zep-w-full" type="submit">
                  {loading
                    ? contactFormLocales[locale].submitting
                    : contactFormLocales[locale].sendMessage}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
export { ContactFormLarge };
