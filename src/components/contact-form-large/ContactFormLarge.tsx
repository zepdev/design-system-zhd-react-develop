import { zodResolver } from '@hookform/resolvers/zod';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { countries } from '../../constants/countries';
import { getDataLayer } from '../../utils/getDataLayer';
import { contactFormLocales } from '../contact-form/contact-form-locales';
import { Checkbox } from '../form-fields/checkbox';
import { DropdownFilter } from '../form-fields/drop-down-filter';
import { Input } from '../form-fields/input';
import { PhoneInput } from '../form-fields/phone-input';
import { Radio } from '../form-fields/radio';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { Button, ZpsButtonVariant } from '../zps-button';
import { ContactFormLargeProps } from './contact-form-large-interface';

const ContactFormLarge: FC<ContactFormLargeProps> = ({
  preferencesUrl,
  privacyPolicyUrl,
  onSubmit,
  headline,
  tagline,
  locale,
  loading,
}) => {
  const Schema = z.object({
    sex: z.string().min(1, { message: 'Required' }),
    name: z.string().min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    company: z.string().optional(),
    street: z.string().optional(),
    streetNumber: z.string().optional(),
    zip: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    contactPerson: z.string().optional(),
    email: z
      .string()
      .min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] })
      .email({ message: 'Email is not in valid format' }),
    phone: z.string().min(5, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),

    privacyCheck: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Privacy.' }),
    }),
    news: z.boolean().optional(),
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
    datalayer.push({
      event: 'generate_lead',
      form_context: headline,
    });
    onSubmit(data);
  };
  return (
    <Layout>
      <div data-testid="zep-contact-form-wrapper">
        <div className="zep-flex md:zep-flex-row zep-flex-col md:zep-items-start xl:zep-gap-5 md:zep-gap-3 sm:zep-gap-2 zep-gap-1.5">
          <HeaderShortComponent headline={headline} tagline={tagline} className="md:zep-w-[30%] xl:zep-w-[50%]" />
          <div className="md:zep-w-[70%] xl:zep-w-[50%]">
            <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1.5 zep-text-primary-default">
              {contactFormLocales[locale]['Kontaktdaten']}
            </p>

            <form onSubmit={handleSubmit(submitFunction)}>
              <input type="text" style={{ display: 'none' }} {...register('honeypot')} />
              <p className="zep-mb-0.5 zep-text-primary-default">{contactFormLocales[locale]['Anrede']}</p>
              <div className="zep-flex zep-gap-2 zep-mb-2">
                <Radio
                  id={'Frau'}
                  label={contactFormLocales[locale]['Frau']}
                  {...register('sex')}
                  error={!!errors['sex']?.message}
                />
                <Radio
                  id={'Herr'}
                  label={contactFormLocales[locale]['Herr']}
                  {...register('sex')}
                  error={!!errors['sex']?.message}
                />
              </div>
              <Input
                className="zep-w-full"
                label={contactFormLocales[locale]['Vor und Nachname']}
                {...register('name')}
                error={errors['name']?.message}
                required
              />
              <Input
                className="zep-w-full"
                label={contactFormLocales[locale]['Unternehmen']}
                {...register('company')}
                error={errors['company']?.message}
              />
              <Input
                error={errors['email']?.message}
                className="zep-w-full"
                label={contactFormLocales[locale]['E-Mail-Adresse']}
                {...register('email')}
                required
              />

              <PhoneInput
                required
                {...register('phone')}
                label={contactFormLocales[locale]['Telefonnummer']}
                error={errors['phone']?.message && contactFormLocales[locale]['Dieses Feld ist erforderlich']}
              />

              <p className="zep-typography-headlineSM-fluid-cqi zep-mt-2.5 sm:zep-mt-3 zep-mb-1.5 zep-text-primary-default">
                {contactFormLocales[locale]['Adresse']}
              </p>

              <div className="zep-w-full zep-flex zep-flex-col md:zep-flex-row md:zep-gap-1.5">
                <Input
                  error={errors['street']?.message}
                  className="zep-w-full md:zep-w-[80%]"
                  label={contactFormLocales[locale]['Strase']}
                  {...register('street')}
                />
                <Input
                  error={errors['streetNumber']?.message}
                  className="zep-w-full md:zep-w-[20%]"
                  label={contactFormLocales[locale]['Nr']}
                  {...register('streetNumber')}
                />
              </div>

              <div className="zep-w-full zep-flex zep-flex-col md:zep-flex-row md:zep-gap-1.5">
                <Input
                  error={errors['zip']?.message}
                  className="zep-w-full md:zep-w-[35%]"
                  label={contactFormLocales[locale]['PLZ']}
                  {...register('zip')}
                />
                <Input
                  error={errors['city']?.message}
                  className="zep-w-full md:zep-w-[65%]"
                  label={contactFormLocales[locale]['Ort']}
                  {...register('city')}
                />
              </div>
              <DropdownFilter label={contactFormLocales[locale]['Land']} options={countries} {...register('country')} />
              <Input
                error={errors['contactPerson']?.message}
                className="zep-w-full"
                label={contactFormLocales[locale]['Ansprechpartner (Falls vorhanden)']}
                {...register('contactPerson')}
              />

              <div className="zep-flex zep-flex-col zep-gap-2 zep-w-full zep-mb-2">
                <div className="zep-flex zep-items-center zep-text-primary-default">
                  <Checkbox {...register('privacyCheck')} error={errors['privacyCheck']?.message} />
                  <p>
                    {`${contactFormLocales[locale].privacyV2} `}
                    <u>
                      <a href={privacyPolicyUrl}>{contactFormLocales[locale].privacyPolicy}</a>
                    </u>
                    {contactFormLocales[locale].privacyV2Extended}
                  </p>
                </div>
                <div className="zep-flex zep-items-start zep-text-primary-default">
                  <Checkbox {...register('news')} error={errors['news']?.message} />
                  <p>
                    {contactFormLocales[locale].zeppelinPromotionsNewsOffers}
                    <br />
                    {contactFormLocales[locale].zeppelinPNOExtended}
                    <br />
                    <br />
                    {`${contactFormLocales[locale].preferences} `}
                    <a href={preferencesUrl}>{contactFormLocales[locale].preferencesLink}</a>
                    {`${contactFormLocales[locale].preferencesLinkExtensionText}`}
                  </p>
                </div>
              </div>

              <Button disabled={loading} variant={ZpsButtonVariant.Primary} className="!zep-w-full" type="submit">
                {loading ? contactFormLocales[locale]['Einreichung'] : contactFormLocales[locale]['Anfrage Senden']}
              </Button>
              {/* <Button variant={ZpsButtonVariant.SecondaryZps} className="!zep-w-full zep-mb-2" type="submit">
                {contactFormLocales[locale]['Anfrage ausdrucken']}
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export { ContactFormLarge };
