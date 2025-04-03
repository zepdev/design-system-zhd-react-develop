import { FC } from 'react';
import clsx from 'clsx';
import { UsedMachineCardProps } from './UsedMachineCard.interface';
import { UsedMachineDescription } from './UsedMachineDescription';
import { getUrlWithTrailingSlash } from '../../../utils/getUrlWithTrailingSlash';

export const UsedMachineCard: FC<UsedMachineCardProps> = ({
  imageSrc,
  url,
  ...rest
}) => {
  return (
    <a href={getUrlWithTrailingSlash(url)} target="_self">
      <div
        className={clsx(
          'zep-bg-greyscale-0',
          'xl:zep-p-2.5 zep-p-1',
          'zep-flex',
          'sm:zep-flex-row zep-flex-col',
          'xl:zep-gap-2.5 zep-gap-1',
          'zep-w-full',
          'md:zep-max-w-[1066px] sm:zep-max-w-[720px]',
        )}
        data-testid="zep-used-machine-card"
      >
        <div className={clsx('md:zep-w-[35%] sm:zep-w-[30%] zep-w-full')}>
          <img
            className="zep-w-full zep-object-cover zep-aspect-[16/9]"
            data-testid="zep-used-machine-card-image"
            src={imageSrc}
            alt={rest.name}
          />
        </div>
        <UsedMachineDescription {...rest} />
      </div>
    </a>
  );
}
