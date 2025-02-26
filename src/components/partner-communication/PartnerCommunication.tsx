import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GlobalVariants } from '../../interfaces/global-variants';
import { PartnerCommunicationProps } from './partner-communication.interface';

export const PartnerCommunication = ({ headline, children, variant }: PartnerCommunicationProps) => {
  const partnerCommunciationVariant = {
    [GlobalVariants.Zps]: ['zep-text-typography-primary-default'],
    [GlobalVariants.Cat]: ['zep-text-typography-dark-100'],
  };

  const partnerCommunciationCva = cva(
    [
      `zep-py-2
       zep-px-1 
       sm:zep-py-2.5 
       sm:zep-px-1.5 
       md:zep-px-[66px] 
       md:zep-py-2 
       lg:zep-px-[122px] 
       lg:zep-py-3 
       zep-gap-1.5 
       sm:zep-gap-2 
       lg:zep-gap-3.5 
       zep-bg-background-medium 
       zep-max-w-[1920px] 
       zep-mx-auto 
       zep-flex-col 
       zep-flex 
       zep-items-center 
       md:zep-flex-row`,
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
    <div className={twMerge(partnerCommunciationCva({ variant }))} data-testid="zep-partner-communication">
      <h2
        className={clsx('md:zep-w-1/3', 'zep-text-center', 'md:zep-text-left', 'zep-typography-headlineMD-fluid-cqi')}
      >
        {headline}
      </h2>
      {/* partner communiations logos */}
      <div className={clsx('zep-w-full', 'zep-flex-1', 'md:zep-flex-wrap')}>{children}</div>
    </div>
  );
};
