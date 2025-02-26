import clsx from 'clsx';
import { LayoutProps } from './layout.interface';

export const Layout = ({ wrapperClassname, children, className, testId = 'zep-layout' }: LayoutProps) => {
  return (
    <div
      className={clsx(wrapperClassname, 'zep-w-full', 'zep-flex', 'zep-justify-center')}
      data-testid={`${testId}-wrapper`}
    >
      <div
        className={clsx(
          'zep-max-w-[1920px]',
          'zep-w-full',
          'zep-px-1',
          'zep-py-3',
          'sm:zep-px-2.5',
          'sm:zep-py-4',
          'md:zep-px-[65px]',
          'md:zep-py-5',
          'xl:zep-py-7.5',
          'xl:zep-px-[121px]',
          className,
        )}
        data-testid={testId}
      >
        {children}
      </div>
    </div>
  );
};
