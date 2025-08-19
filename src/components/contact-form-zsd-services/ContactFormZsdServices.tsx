import { FC, useEffect, useRef } from 'react';
import { ContactFormZsdServicesProps } from './ContactFormZsdServices.interface';
import { z } from 'zod';
import clsx from 'clsx';
import { contactFormZsdLocales } from '@/components/contact-form-zsd/contact-form-zsd-locales';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getDataLayer } from '../../utils/getDataLayer';
import { Layout } from '@/components/layout';
import { HeaderShortComponent } from '@/components/header-short-component';
import { contactFormLocales } from '@/components/contact-form/contact-form-locales';
import { Input } from '@/components/form-fields/input';
import { PhoneInput } from '@/components/form-fields/phone-input';
import { DropdownFilter } from '@/components/form-fields/drop-down-filter';
import { countries } from '../../constants/countries';
import { TextArea } from '@/components/form-fields/text-area';
import { Checkbox } from '@/components/form-fields/checkbox';
import { Button, ZsdButtonVariant } from '@/components/zsd-button';
import { FunctionalIcon } from '@zepdev/design-system-component-library-react';

export const ContactFormZsdServices: FC<ContactFormZsdServicesProps> = ({
  locale,
  loading,
  tagline,
  onSubmit,
  success,
  isLightbox = false,
  privacyPolicyUrl,
  headline,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const Schema = z.object({
    // sex: z.string().min(1, { message: 'Req' }),
    company: z.string().min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired }),
    vorname: z.string().min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired }),
    nachname: z.string().min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired }),
    countryCode: z.string().min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired }),
    areaCode: z.string().min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired }),
    addressNumber: z.string().min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired }),
    location: z.string().min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired }),
    country: z.string().min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired }),
    technicianAssignment: z.boolean().optional(),
    quotation: z.boolean().optional(),
    placeOrder: z.boolean().optional(),
    callback: z.boolean().optional(),
    reportMalfunction: z.boolean().optional(),
    machineNumber: z.string().optional(),
    email: z
      .string()
      .min(1, { message: contactFormZsdLocales[locale].thisFieldIsRequired })
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

  useEffect(() => {
    if (success && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [success]);

  return (
    <Layout className={clsx({ '!zep-px-[0] sm:!zep-px-[0] md:!zep-px-[0] lg:!zep-px-[0]': isLightbox })}>
      <div data-testid="zep-contact-form-wrapper">
        <div
          className={`zep-flex ${!success && !isLightbox && 'md:zep-flex-row'} zep-flex-col md:zep-items-start md:zep-gap-3 sm:zep-gap-2 zep-gap-1.5`}
        >
          <HeaderShortComponent
            headline={headline}
            tagline={tagline}
            className={clsx({ 'md:zep-w-[30%] xl:zep-w-[50%]': !isLightbox, 'zep-w-full': isLightbox })}
          />
          {success ? (
            <div
              ref={targetRef}
              className="zep-p-1 zep-border-primary-default zep-bg-[#3D2D81] zep-text-typography-light-100 zep-w-full zep-flex zep-gap-2"
            >
              <FunctionalIcon name="check-circle" />
              <p>{contactFormZsdLocales[locale].successMessage}</p>
            </div>
          ) : (
            <div className={clsx({ 'md:zep-w-[70%] xl:zep-w-[50%]': !isLightbox, 'zep-w-full': isLightbox })}>
              <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1.5 zep-text-typography-dark-100">
                {contactFormLocales[locale].contactInformation}
              </p>

              <form onSubmit={handleSubmit(submitFunction)}>
                <input type="text" style={{ display: 'none' }} {...register('honeypot')} />

                <Input
                  className="zep-w-full"
                  label={contactFormZsdLocales[locale].company}
                  {...register('company')}
                  error={errors['company']?.message}
                  required
                />

                <div className="zep-flex zep-flex-col sm:zep-flex-row sm:zep-gap-2 zep-mb-1">
                  <Input
                    className="zep-w-full"
                    label={contactFormZsdLocales[locale].firstName}
                    {...register('vorname')}
                    error={errors['vorname']?.message}
                    required
                  />
                  <Input
                    className="zep-w-full"
                    label={contactFormZsdLocales[locale].lastName}
                    {...register('nachname')}
                    error={errors['nachname']?.message}
                    required
                  />
                </div>

                <Input
                  error={errors['email']?.message}
                  className="zep-w-full"
                  label={contactFormZsdLocales[locale].emailAddress}
                  {...register('email')}
                  required
                />
                <PhoneInput
                  required
                  {...register('phone')}
                  label={contactFormZsdLocales[locale].phoneNumber}
                  error={errors['phone']?.message && contactFormZsdLocales[locale].thisFieldIsRequired}
                  defaultCountry={'DE'}
                />

                <p className="zep-typography-headlineSM-fluid-cqi zep-mb-1 zep-text-typography-dark-100">
                  {contactFormZsdLocales[locale].address}
                </p>

                <div className="zep-flex zep-flex-col sm:zep-flex-row sm:zep-gap-2 zep-mb-1">
                  <Input
                    className="zep-w-full"
                    label={contactFormZsdLocales[locale].areaCode}
                    {...register('addressNumber')}
                    error={errors['addressNumber']?.message}
                    required
                  />
                  <Input
                    className="zep-w-full"
                    label={contactFormZsdLocales[locale].city}
                    {...register('location')}
                    error={errors['location']?.message}
                    required
                  />
                </div>

                <DropdownFilter
                  {...register('country')}
                  options={countries}
                  required
                  label={contactFormZsdLocales[locale].country}
                />

                <TextArea
                  label={contactFormZsdLocales[locale].yourMessage}
                  {...register('message')}
                  className="zep-h-[126px]"
                />

                <div className="zep-flex zep-text-typography-dark-100">
                  <Checkbox {...register('technicianAssignment')} error={errors['technicianAssignment']?.message} />
                  <p>{` ${contactFormZsdLocales[locale].technicianAssignment}`}</p>
                </div>
                <div className="zep-flex zep-text-typography-dark-100">
                  <Checkbox {...register('quotation')} error={errors['quotation']?.message} />
                  <p>{` ${contactFormZsdLocales[locale].quotationForServiceCheckOrSpareParts}`}</p>
                </div>
                <div className="zep-flex zep-text-typography-dark-100">
                  <Checkbox {...register('placeOrder')} error={errors['placeOrder']?.message} />
                  <p>{` ${contactFormZsdLocales[locale].orderForServiceCheckOrSpareParts}`}</p>
                </div>

                <div className="zep-flex zep-text-typography-dark-100">
                  <Checkbox {...register('reportMalfunction')} error={errors['reportMalfunction']?.message} />
                  <p>{` ${contactFormZsdLocales[locale].reportMalfunction}`}</p>
                </div>

                <div className="zep-flex zep-text-typography-dark-100 zep-mb-1">
                  <Checkbox {...register('callback')} error={errors['callback']?.message} />
                  <p>{` ${contactFormZsdLocales[locale].callback}`}</p>
                </div>

                <TextArea
                  label={contactFormZsdLocales[locale].machineNumber}
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
                  {loading ? contactFormZsdLocales[locale].submitting : contactFormZsdLocales[locale].sendRequest}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
