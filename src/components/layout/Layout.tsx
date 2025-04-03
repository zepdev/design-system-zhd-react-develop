import clsx from 'clsx';
import { LayoutProps } from './layout.interface';

const Layout = ({ id, wrapperClassname, children, className, testId = 'zep-layout' }: LayoutProps) => {
  return (
    <div
      id={id}
      className={clsx(wrapperClassname, 'zep-w-full', 'zep-flex zep-justify-center')}
      data-testid={`${testId}-wrapper`}
    >
      <div
        className={clsx(
          'zep-max-w-[1728px]',
          'zep-w-full',
          'zep-px-1',
          'sm:zep-px-1.5',
          'md:zep-px-[66px]',
          'lg:zep-px-[120px]',
          className,
        )}
        data-testid={testId}
      >
        {children}
      </div>
    </div>
  );
};

export { Layout };
