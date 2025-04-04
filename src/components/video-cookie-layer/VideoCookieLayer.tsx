// import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { VideoCookieLayerProps } from './video-cookie-layer-.interface';

export const VideoCookieLayer = ({ description, label, onClickCookies, className }: VideoCookieLayerProps) => {
  return (
    <div
      className={clsx('zep-bg-greyscale-800', 'zep-px-1', 'zep-py-[200px]', 'sm:zep-px-2', className)}
      data-testid="video-cookie-layer"
    >
      <div className="zep-w-full zep-flex zep-flex-col zep-gap-2 zep-items-center zep-justify-center">
        <p
          className={clsx(
            'zep-typography-tagline',
            'zep-hyphens-auto',
            'zep-break-normal',
            'zep-text-typography-light-100',
            'zep-mb-2',
          )}
        >
          {description}
        </p>

        <Button
          className="zep-w-full sm:zep-w-[258px]"
          onClick={onClickCookies}
          label={label}
          variant={ZsdButtonVariant.SecondaryLight}
        />
      </div>
    </div>
  );
};
