// import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { CookieLayerProps } from './cookie-layer.interface';

export const CookieLayer = ({ description, label, onClickCookies, className }: CookieLayerProps) => {
  return (
    <div
      className={clsx(
        'zep-bg-greyscale-800',
        'zep-px-1',
        'zep-flex',
        'zep-items-center',
        'zep-justify-center',
        'zep-h-full',
        'zep-py-[200px]',
        'sm:zep-px-2',
        className,
      )}
      data-testid="video-cookie-layer"
    >
      <div className="zep-w-full zep-flex zep-flex-col zep-gap-2 zep-items-center zep-justify-center">
        <p
          className={clsx(
            'zep-text-primary-default',
            'zep-hyphens-auto',
            'zep-break-normal',
            'zep-text-typography-light-100',
          )}
        >
          {description}
        </p>

        <Button
          className="zep-w-full zep-text-primary-default sm:zep-w-[258px]"
          onClick={onClickCookies}
          label={label}
          variant={ZsdButtonVariant.SecondaryLight}
        />
      </div>
    </div>
  );
};
