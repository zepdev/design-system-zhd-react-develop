import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { ContactCard } from '../contact-card';
import { Checkbox } from '../form-fields/checkbox';
import { Input } from '../form-fields/input';
import { Radio } from '../form-fields/radio';
import { TextArea } from '../form-fields/text-area';
import { Layout } from '../layout';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { ContactFormProps } from './contact-form.interface';

const ContactForm: FC<ContactFormProps> = ({ onSubmit, title, contact, subtitle }) => {
  const { fullName, address, email, fax, phone, image, role, languages } = contact;

  const Schema = z.object({
    sex: z.string().min(1, { message: 'Req' }),
    lastName: z.string().min(1, { message: 'Dieses Feld ist erforderlich' }),
    firstName: z.string().min(1, { message: 'Dieses Feld ist erforderlich' }),
    company: z.string().min(1, { message: 'Dieses Feld ist erforderlich' }),
    message: z.string().optional(),
    privacyCheck: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Privacy.' }),
    }),
    email: z
      .string()
      .min(1, { message: 'Dieses Feld ist erforderlich' })
      .email({ message: 'Email is not in valid format' }),
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
    <Layout wrapperClassname="zep-bg-primary-default">
      <h2 className="zep-typography-headlineLG-fluid-cqi zep-text-typography-light-100 zep-text-center zep-mb-1.5">
        {title}
      </h2>
      <p className="zep-text-typography-light-100 zep-typography-bodyText zep-text-center zep-mb-1.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5">
        {subtitle}
      </p>
      <div className="zep-w-full zep-mx-auto zep-bg-greyscale-0 zep-p-1 sm:zep-p-1.5 md:zep-p-2.5 lg:zep-p-7.5 zep-flex zep-flex-col md:zep-flex-row sm:zep-gap-2 md:zep-gap-2.5 lg:zep-gap-5 zep-overflow-auto">
        <div className='md:zep-min-w-[387px] md:zep-max-w-[387px] lg:zep-min-w-[543px] lg:zep-max-w-[543px]'>
          <h3 className="zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-mb-1 sm:zep-mb-1.5">
            Unser Ansprechpartner für Sie
          </h3>
          <ContactCard
            fullName={fullName}
            address={address}
            email={email}
            fax={fax}
            phone={phone}
            image={image}
            role={role}
            languages={languages}
          />
        </div>
        <div className="zep-w-full">
          <h3 className="zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-mb-1.5 zep-mt-2 sm:zep-mt-[unset]">
            Nehmen Sie direkt Kontakt auf
          </h3>
          <form onSubmit={handleSubmit(submitFunction)}>
            <p className="zep-mb-0.5 zep-text-typography-dark-100">Anrede</p>
            <div className="zep-flex zep-gap-1 sm:zep-gap-2 zep-mb-1.5">
              <Radio id={'Frau'} label={'Frau'} {...register('sex')} error={!!errors['sex']?.message} />
              <Radio id={'Herr'} label={'Herr'} {...register('sex')} error={!!errors['sex']?.message} />
              <Radio id={'Divers'} label={'Divers'} {...register('sex')} error={!!errors['sex']?.message} />
            </div>
            <div className="zep-flex zep-flex-col lg:zep-flex-row lg:zep-gap-1.5">
              <Input
                className="zep-w-full"
                label={'Vorname'}
                {...register('lastName')}
                error={errors['lastName']?.message}
                required
              />
              <Input
                className="zep-w-full"
                label={'Name'}
                {...register('firstName')}
                error={errors['firstName']?.message}
                required
              />
            </div>
            <Input
              className="zep-w-full"
              label={'Firma'}
              {...register('company')}
              error={errors['company']?.message}
              required
            />
            <Input
              error={errors['email']?.message}
              className="zep-w-full"
              label={'E-Mail-Adresse'}
              {...register('email')}
              required
            />
            <TextArea label={'Nachricht'} {...register('message')} className="zep-h-[126px]" />
            <Checkbox
              {...register('privacyCheck')}
              error={errors['privacyCheck']?.message}
              labelhtml={`<p>Ich habe die <u><a href="datensuc" target="_blank">Datenschutzerklärung</a></u> gelesen  und willige in die Verwendung meiner Daten ein.</p>`}
            />
            <Button variant={ZsdButtonVariant.PrimaryDark} className="!zep-w-full" type="submit">
              Nachricht absenden
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export { ContactForm };
