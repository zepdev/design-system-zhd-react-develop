import { clsx } from 'clsx';
import { GlobalVariants } from '../../interfaces/global-variants';
import { backgroundColor } from '../../utils/commonCSS';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { HeaderLongProps } from './headerlong.interface';

// Header Long Pattern
export const HeaderLong = ({ variant = GlobalVariants.Zps, ...rest }: HeaderLongProps) => {
  return (
    <Layout className={clsx(backgroundColor[variant])} testId="zep-header-long">
      <HeaderLongComponent {...rest} variant={variant} />
    </Layout>
  );
};
