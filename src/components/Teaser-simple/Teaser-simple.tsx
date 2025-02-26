import { Button } from '@/components/zsd-button/ZsdButton';
import { ZsdButtonVariant } from '@/components/zsd-button/zsd-button.interface';
import { TeaserSimpleProps } from './teaser-simple.interface';
import clsx from 'clsx';

export const TeaserSimple: React.FC<TeaserSimpleProps> = ({ teaserText, buttonText, onClick }) => {
  return (

    <div
      className={clsx(
        'zep-flex',
        'zep-flex-col',
        'zep-w-[360px]',
        'zep-px-1.5',
        'zep-py-2.5',
        'zep-items-center',
        'zep-justify-center',
        'zep-bg-indigo-500',
        'zep-w-full',
        'md:zep-flex-row',
        'md:zep-py-4',
        'xl:zep-py-5',
      )}
    >
        <h1
          className={clsx(
            'zep-text-typography-light-100',
            'zep-typography-headlineMD-fluid-cqi',
            'zep-w-auto',
          )}
        >
          {teaserText}
        </h1>

        <Button
          className={clsx(
            'zep-mt-1.5',
            'md:zep-ml-[80px]',
            'md:zep-mt-[0]',
            'xl:zep-ml-[120px]',
            'sm:zep-max-w-max',
            'md:zep-whitespace-nowrap',
          )}
          label={buttonText}
          title={buttonText}
          variant={ZsdButtonVariant.PrimaryLight}
          onClick={onClick}
        />
      </div>
  );
};
