import { zodResolver } from '@hookform/resolvers/zod';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { countries } from '../../constants/countries';
import { getDataLayer } from '../../utils/getDataLayer';
import { Checkbox } from '../form-fields/checkbox';
import { DropdownFilter } from '../form-fields/drop-down-filter';
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
    company: z.string().optional(),
    vorname: z.string().min(1, { message: contactFormZsdLocales[locale]['Dieses Feld ist erforderlich'] }),
    nachname: z.string().min(1, { message: contactFormZsdLocales[locale]['Dieses Feld ist erforderlich'] }),
    countryCode: z.string().optional(),
    areaCode: z.string().optional(),
    addressNumber: z.string().optional(),
    location: z.string().optional(),
    country: z.string().optional(),
    technicianAssignment: z.boolean().optional(),
    quotation: z.boolean().optional(),
    placeOrder: z.boolean().optional(),
    reportMalfunction: z.boolean().optional(),
    machineNumber: z.string().optional(),
    email: z
      .string()
      .min(1, { message: contactFormZsdLocales[locale]['Dieses Feld ist erforderlich'] })
      .email({ message: 'Email is not in valid format' }),
    phone: z.string().optional(),
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
        {/* <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1.5 zep-text-typography-dark-100">
          {contactFormZsdLocales[locale]['Kontaktformular für Serviceanfragen']}
        </p>

       */}

        <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1 zep-text-typography-dark-100">
          {contactFormZsdLocales[locale]['Kontaktdaten']}
        </p>

        <Input
          className="zep-w-full"
          label={contactFormZsdLocales[locale]['Firma']}
          {...register('company')}
          error={errors['company']?.message}
          required
        />

        <p className="zep-mb-0.5 zep-text-typography-dark-100">{contactFormZsdLocales[locale]['Anrede']}</p>
        <div className="zep-flex zep-gap-2 zep-mb-1">
          <Radio
            id={'Herr'}
            label={contactFormZsdLocales[locale]['Herr']}
            {...register('sex')}
            error={!!errors['sex']?.message}
          />
          <Radio
            id={'Frau'}
            label={contactFormZsdLocales[locale]['Frau']}
            {...register('sex')}
            error={!!errors['sex']?.message}
          />
        </div>

        <div className="zep-flex zep-flex-col sm:zep-flex-row sm:zep-gap-2 zep-mb-1">
          <Input
            className="zep-w-full"
            label={contactFormZsdLocales[locale]['Vorname']}
            {...register('vorname')}
            error={errors['vorname']?.message}
            required
          />
          <Input
            className="zep-w-full"
            label={contactFormZsdLocales[locale]['Nachname']}
            {...register('nachname')}
            error={errors['nachname']?.message}
            required
          />
        </div>

        <Input
          error={errors['email']?.message}
          className="zep-w-full"
          label={contactFormZsdLocales[locale]['E-Mail-Adresse']}
          {...register('email')}
          required
        />

        <div className="zep-flex zep-flex-col sm:zep-flex-row sm:zep-gap-2 zep-mb-1">
          <Input
            className="zep-w-full"
            label={contactFormZsdLocales[locale]['Landervorwahl']}
            {...register('countryCode')}
            error={errors['countryCode']?.message}
            required
          />
          <Input
            className="zep-w-full"
            label={contactFormZsdLocales[locale]['Vorwahl']}
            {...register('areaCode')}
            error={errors['areaCode']?.message}
            required
          />
        </div>

        <PhoneInput
          required
          {...register('phone')}
          label={contactFormZsdLocales[locale]['Telefonnummer']}
          error={errors['phone']?.message && contactFormZsdLocales[locale]['Dieses Feld ist erforderlich']}
          defaultCountry={'DE'}
        />

        <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1 zep-text-typography-dark-100">
          {contactFormZsdLocales[locale]['Adresse']}
        </p>

        <div className="zep-flex zep-flex-col sm:zep-flex-row sm:zep-gap-2 zep-mb-1">
          <Input
            className="zep-w-full"
            label={contactFormZsdLocales[locale]['Nr']}
            {...register('addressNumber')}
            error={errors['addressNumber']?.message}
            required
          />
          <Input
            className="zep-w-full"
            label={contactFormZsdLocales[locale]['Ort']}
            {...register('location')}
            error={errors['location']?.message}
            required
          />
        </div>

        <DropdownFilter {...register('country')} options={countries} label={contactFormZsdLocales[locale]['Land']} />

        <TextArea
          label={contactFormZsdLocales[locale]['Ihre Nachricht']}
          {...register('message')}
          className="zep-h-[126px]"
        />

        <div className="zep-flex zep-text-typography-dark-100">
          <Checkbox {...register('technicianAssignment')} error={errors['technicianAssignment']?.message} />{' '}
          <p>{contactFormZsdLocales[locale]['Ich benötige einen Techniker-Einsatz']}</p>
        </div>
        <div className="zep-flex zep-text-typography-dark-100">
          <Checkbox {...register('quotation')} error={errors['quotation']?.message} />{' '}
          <p>
            {contactFormZsdLocales[locale]['Ich benötige ein Angebot über einen Service-Checkup bzw. über Ersatzteile']}
          </p>
        </div>
        <div className="zep-flex zep-text-typography-dark-100">
          <Checkbox {...register('placeOrder')} error={errors['placeOrder']?.message} />{' '}
          <p>
            {
              contactFormZsdLocales[locale][
                'Ich möchte eine Bestellung über einen Service-Checkup bzw. über Ersatzteile aufgeben'
              ]
            }
          </p>
        </div>

        <div className="zep-flex zep-text-typography-dark-100 zep-mb-1">
          <Checkbox {...register('reportMalfunction')} error={errors['reportMalfunction']?.message} />{' '}
          <p>{contactFormZsdLocales[locale]['Ich möchte eine Störung melden']}</p>
        </div>

        <TextArea
          label={contactFormZsdLocales[locale]['Machinennummer']}
          {...register('machineNumber')}
          className="zep-h-[126px]"
        />

        <div className="zep-flex  zep-text-typography-dark-100">
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
