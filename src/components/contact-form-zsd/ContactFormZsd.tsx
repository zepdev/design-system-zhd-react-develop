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
import { Button, ZsdButtonVariant } from '../zsd-button';
import { ContactFormZsdProps } from './contact-form-zsd-interface';
import { contactFormZsdLocales } from './contact-form-zsd-locales';

const ContactFormZsd: FC<ContactFormZsdProps> = ({
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
    name: z.string().min(1, { message: contactFormZsdLocales[locale]['Dieses Feld ist erforderlich'] }),

    email: z
      .string()
      .min(1, { message: contactFormZsdLocales[locale]['Dieses Feld ist erforderlich'] })
      .email({ message: 'Email is not in valid format' }),
    phone: z.string().min(5, { message: contactFormZsdLocales[locale]['Dieses Feld ist erforderlich'] }),
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
    datalayer?.push({
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
        <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1.5 zep-text-typography-dark-100">
          {contactFormZsdLocales[locale]['Schreiben Sie uns eine Nachricht']}
        </p>

        <TextArea
          label={contactFormZsdLocales[locale]['Ihre Nachricht']}
          {...register('message')}
          className="zep-h-[126px]"
        />

        <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1 zep-text-typography-dark-100">
          {contactFormZsdLocales[locale]['Kontaktdaten']}
        </p>

        <p className="zep-mb-0.5 zep-text-typography-dark-100">{contactFormZsdLocales[locale]['Anrede']}</p>
        <div className="zep-flex zep-gap-2 zep-mb-1">
          <Radio
            id={'Frau'}
            label={contactFormZsdLocales[locale]['Frau']}
            {...register('sex')}
            error={!!errors['sex']?.message}
          />
          <Radio
            id={'Herr'}
            label={contactFormZsdLocales[locale]['Herr']}
            {...register('sex')}
            error={!!errors['sex']?.message}
          />
          <Radio
            id={'Divers'}
            label={contactFormZsdLocales[locale]['Divers']}
            {...register('sex')}
            error={!!errors['sex']?.message}
          />
        </div>

        <PhoneInput
          required
          {...register('phone')}
          label={contactFormZsdLocales[locale]['Telefonnummer']}
          error={errors['phone']?.message && contactFormZsdLocales[locale]['Dieses Feld ist erforderlich']}
          defaultCountry={'DE'}
        />
        <Input
          className="zep-w-full"
          label={contactFormZsdLocales[locale]['Name']}
          {...register('name')}
          error={errors['name']?.message}
          required
        />
        <Input
          error={errors['email']?.message}
          className="zep-w-full"
          label={contactFormZsdLocales[locale]['E-Mail-Adresse']}
          {...register('email')}
          required
        />

        <div className="zep-flex zep-items-center zep-text-typography-dark-100">
          <Checkbox {...register('privacyCheck')} error={errors['privacyCheck']?.message} />
          <p>
            {`${contactFormZsdLocales[locale].privacy} `}
            <u>
              <a href={privacyPolicyUrl}>{contactFormZsdLocales[locale].privacyPolicy}</a>
            </u>
            .
          </p>
        </div>

        <Button
          disabled={loading}
          variant={ZsdButtonVariant.PrimaryDark}
          className="!zep-w-full zep-mt-1.5 md:zep-mt-2"
          type="submit"
        >
          {loading ? contactFormZsdLocales[locale]['Einreichung'] : contactFormZsdLocales[locale]['Anfrage Senden']}
        </Button>
      </form>
    </div>
  );
};
export { ContactFormZsd };
