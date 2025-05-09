import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GlobalVariants } from '../../interfaces/global-variants';
import { Layout } from '../layout';
import { PartnerCommunicationProps } from './partner-communication.interface';

export const PartnerCommunication = ({ id, headline, partners, variant }: PartnerCommunicationProps) => {
  const partnerCommunciationVariant = {
    [GlobalVariants.Zps]: ['zep-text-typography-primary-default'],
    [GlobalVariants.Cat]: ['zep-text-typography-dark-100'],
    [GlobalVariants.Zsd]: ['zep-text-typography-dark-100'],
  };

  const partnerCommunciationCva = cva(
    [
      `zep-py-2
       sm:zep-py-2.5 
       md:zep-py-2 
       lg:zep-py-3 
       zep-gap-1.5 
       sm:zep-gap-2 
       lg:zep-gap-3.5
       zep-flex-col 
       zep-flex 
       zep-items-center 
       md:zep-flex-row
       `,
    ],
    {
      variants: {
        variant: partnerCommunciationVariant,
      },
      defaultVariants: {
        variant: GlobalVariants.Zps,
      },
    },
  );

  return (
    <Layout
      id={id}
      testId="zep-partner-communication"
      wrapperClassname="zep-bg-background-medium"
      className={twMerge(partnerCommunciationCva({ variant }))}
    >
      <h4
        className={clsx('md:zep-w-1/3', 'zep-text-center', 'md:zep-text-left', 'zep-typography-headlineMD-fluid-cqi')}
      >
        {headline}
      </h4>
      <div className={clsx('zep-w-full', 'zep-flex-1', 'md:zep-flex-wrap')}>
        <div className="zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2">
          {partners?.map((partner, index) => (
            <div key={index} className="zep-flex zep-items-center zep-justify-center">
              <img
                alt={partner?.imageAlt}
                className="zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]"
                src={partner?.image}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
