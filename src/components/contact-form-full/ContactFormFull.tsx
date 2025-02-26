import { zodResolver } from '@hookform/resolvers/zod';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { countries } from '../../constants/countries';
import { Checkbox } from '../form-fields/checkbox';
import { DropdownFilter } from '../form-fields/drop-down-filter';
import { Input } from '../form-fields/input';
import { PhoneInput } from '../form-fields/phone-input';
import { Radio } from '../form-fields/radio';
import { TextArea } from '../form-fields/text-area';
import { HeaderLongComponent } from '../header-long-component';

import { Button, ZsdButtonVariant } from '../zsd-button';
import { ContactFormProps } from './contact-form-full-interface';
import { contactFormLocales } from './contact-form-locales';

const ContactFormFull: FC<ContactFormProps> = ({ onSubmit, headline, tagline, locale }) => {
  const Schema = z.object({
    sex: z.string().min(1, { message: 'Req' }),
    name: z.string().min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    company: z.string().optional(),
    email: z
      .string()
      .min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] })
      .email({ message: 'Email is not in valid format' }),
    phone: z.string().min(5, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    street: z.string().min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    streetNumber: z.string().min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    zip: z.string().min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    city: z.string().min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    country: z.string().min(1, { message: contactFormLocales[locale]['Dieses Feld ist erforderlich'] }),
    contactPerson: z.string().optional(),
    message: z.string().optional(),
    privacyCheck: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Privacy.' }),
    }),
    newsAndPromotions: z.boolean().optional(),
  });

  type FormSchemaType = z.infer<typeof Schema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(Schema) });

  const submitFunction: SubmitHandler<FormSchemaType> = async (data) => {
    alert(JSON.stringify(data));
    onSubmit();
  };
  return (
    <div data-testid="zep-contact-form-wrapper">
      <HeaderLongComponent headline={headline} tagline={tagline} />

      <form onSubmit={handleSubmit(submitFunction)}>
        <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1.5 zep-text-typography-dark-100">
          {contactFormLocales[locale]['Kontaktdaten']}
        </p>
        <p className="zep-mb-0.5 zep-text-typography-dark-100">{contactFormLocales[locale]['Anrede']}</p>
        <div className="zep-flex zep-gap-2 zep-mb-1.5">
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
          <Radio
            id={'Divers'}
            label={contactFormLocales[locale]['Divers']}
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
        <Input className="zep-w-full" label={contactFormLocales[locale]['Firma']} {...register('company')} />
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

        <p className="zep-typography-headlineSM-fluid-cqi zep-mt-3 md:zep-mt-4 zep-mb-1.5 zep-text-typography-dark-100">
          {contactFormLocales[locale]['Adresse']}
        </p>

        <div className="zep-flex zep-flex-col md:zep-flex-row md:zep-gap-2">
          <Input
            className="zep-w-full md:zep-w-5/6"
            label={contactFormLocales[locale]['Strase']}
            {...register('street')}
            required
            error={errors['street']?.message}
          />
          <Input
            className="zep-w-full md:zep-w-1/6"
            label={contactFormLocales[locale]['Nr']}
            {...register('streetNumber')}
            required
            error={errors['streetNumber']?.message}
          />
        </div>

        <div className="zep-flex zep-flex-col md:zep-flex-row md:zep-gap-2">
          <Input
            className="zep-w-full md:zep-w-2/3"
            label={contactFormLocales[locale]['PLZ']}
            {...register('zip')}
            required
            error={errors['zip']?.message}
          />
          <Input
            className="zep-w-full md:zep-w-1/3"
            label={contactFormLocales[locale]['Ort']}
            {...register('city')}
            error={errors['city']?.message}
            required
          />
        </div>

        <DropdownFilter
          placeholder={`${contactFormLocales[locale]['Land Auswählen']} ...`}
          label={contactFormLocales[locale]['Land']}
          options={countries}
          {...register('country')}
          error={errors?.country?.message}
          required
        />

        <p className="zep-typography-headlineSM-fluid-cqi zep-mt-3 md:zep-mt-4 zep-mb-1.5 zep-text-typography-dark-100">
          {contactFormLocales[locale]['Schreiben Sie uns eine Nachricht']}
        </p>

        <TextArea
          label={contactFormLocales[locale]['Ihre Nachricht']}
          {...register('message')}
          className="zep-h-[126px]"
        />

        <Checkbox
          {...register('privacyCheck')}
          error={errors['privacyCheck']?.message}
          labelhtml={`<p>Ich habe die <u><a href="datensuc" target="_blank">Datenschutzerklärung</a></u> gelesen und habe sie zur Kenntnis genommen</p>`}
        />

        <Button variant={ZsdButtonVariant.PrimaryDark} className="!zep-w-full zep-mt-2 zep-mb-1" type="submit">
          {contactFormLocales[locale]['Nachricht absenden']}
        </Button>
        <Button variant={ZsdButtonVariant.SecondaryDark} className="!zep-w-full">
          {contactFormLocales[locale]['Anfrage ausdrucken']}
        </Button>
      </form>
    </div>
  );
};
export { ContactFormFull };
