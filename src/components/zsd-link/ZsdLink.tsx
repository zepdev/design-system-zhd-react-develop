import React, { FC } from 'react';
import { clsx } from 'clsx';
import { Link as ZepLink, LinkMode } from '@zepdev/design-system-component-library-react';
import { LinkProps } from './ZsdLink.interface';

export const Link: FC<LinkProps> = ({ className, variant = 'dark', ...props }) => {
  return (
    <ZepLink
      className={clsx(
        'zep-h-fit',
        'zep-whitespace-nowrap',
        'enabled:hover:zep-underline',
        'enabled:hover:zep-font-500',
        'zep-cursor-pointer',
        'disabled:zep-opacity-disabled',
        {
          'zep-text-typography-primary-default enabled:hover:zep-text-typography-primary-hover enabled:active:zep-text-typography-primary-active': variant === 'dark',
          'zep-text-typography-light-100 enabled:hover:zep-text-typography-light-100 enabled:active:zep-text-neutral-light-active': variant === 'light',
          'zep-underline': props.mode === LinkMode.Inline,
        },
        className,
      )}
      {...props}
    />
  )
};
