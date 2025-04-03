import { zodResolver } from '@hookform/resolvers/zod';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { getDataLayer } from '../../utils/getDataLayer';
import { Checkbox } from '../form-fields/checkbox';
import { Input } from '../form-fields/input';
import { PhoneInput } from '../form-fields/phone-input';
import { Radio } from '../form-fields/radio';
import { TextArea } from '../form-fields/text-area';
import { HeaderLongComponent } from '../header-long-component';
import { MultiLinkList } from '../multi-link-list';
import { Button, ZpsButtonVariant } from '../zps-button';
import { ContactFormProps } from './contact-form-interface';
import { contactFormLocales } from './contact-form-locales';

const ContactForm: FC<ContactFormProps> = ({
  privacyPolicyUrl,
  onSubmit,
  headline,
  tagline,
  linkLists,
  locale,
  loading,
}) => {
  const Schema = z.object({
    sex: z.string().min(1, { message: 'Req' }),
    name: z.string().min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),

    email: z
      .string()
      .min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] })
      .email({ message: 'Email is not in valid format' }),
    phone: z.string().min(5, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    message: z.string().optional(),
    privacyCheck: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Privacy.' }),
    }),
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
    <div data-testid="zep-contact-form-wrapper">
      <HeaderLongComponent headline={headline} tagline={tagline} />
      <MultiLinkList
        isPatternPart
        className="zep-mt-2 md:zep-mt-3 zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4"
        linkLists={linkLists || []}
      />

      <form onSubmit={handleSubmit(submitFunction)}>
        <input type="text" style={{ display: 'none' }} {...register('honeypot')} />
        <p className="zep-typography-headlineSM-fluid-cqi zep-mb-2 zep-text-primary-default">
          {contactFormLocales[locale]['Schreiben Sie uns eine Nachricht']}
        </p>

        <TextArea
          label={contactFormLocales[locale]['Ihre Nachricht']}
          {...register('message')}
          className="zep-h-[126px]"
        />

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

        <PhoneInput
          required
          {...register('phone')}
          label={contactFormLocales[locale]['Telefonnummer']}
          error={errors['phone']?.message && contactFormLocales[locale]['Dieses Feld ist erforderlich']}
          defaultCountry={locale === 'de-AT' ? 'AT' : 'DE'}
        />
        <Input
          className="zep-w-full"
          label={contactFormLocales[locale]['Vor und Nachname']}
          {...register('name')}
          error={errors['name']?.message}
          required
        />
        <Input
          error={errors['email']?.message}
          className="zep-w-full"
          label={contactFormLocales[locale]['E-Mail-Adresse']}
          {...register('email')}
          required
        />

        <div className="zep-flex zep-items-center zep-text-primary-default">
          <Checkbox {...register('privacyCheck')} error={errors['privacyCheck']?.message} />
          <p>
            {`${contactFormLocales[locale].privacy} `}
            <u>
              <a href={privacyPolicyUrl}>{contactFormLocales[locale].privacyPolicy}</a>
            </u>
            .
          </p>
        </div>

        <Button
          disabled={loading}
          variant={ZpsButtonVariant.Primary}
          className="!zep-w-full zep-mt-1.5 md:zep-mt-2"
          type="submit"
        >
          {loading ? contactFormLocales[locale]['Einreichung'] : contactFormLocales[locale]['Anfrage Senden']}
        </Button>
      </form>
    </div>
  );
};
export { ContactForm };
