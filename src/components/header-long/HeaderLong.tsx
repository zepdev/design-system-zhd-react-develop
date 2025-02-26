import React from 'react';
import { HeaderLongProps } from './headerlong.interface';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';

// Header Long Pattern
export const HeaderLong = (props: HeaderLongProps) => {
  return (
    <Layout testId="zep-header-long">
      <HeaderLongComponent {...props} />
    </Layout>
  );
};
