import { HeaderLongComponent } from '@/components/header-long-component';
import { Layout } from '@/components/layout';
import { RichText } from '@/components/rich-text';
import { Button } from '@/components/zsd-button';
import { TableThemes, Table as ZepTable } from '@zepdev/design-system-component-library-react';
import { FC } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { TablePatternProps } from './TablePattern.interface';

export const TablePattern: FC<TablePatternProps> = ({
  variant = GlobalVariants.Zps,
  content,
  tableButtonIcon,
  tableButtonLabel,
  tableButtonOnClick,
  tableButtonIconPosition,
  tableButtonUrl,
  tableButtonVariant,
  headline,
  columns,
  dataSource,
  id,
  message,
  ...headerLongProps
}) => {
  return (
    <Layout
      id={id}
      className="zep-flex zep-flex-col zep-items-start zep-justify-start zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4"
    >
      <HeaderLongComponent variant={variant} headline={headline} {...headerLongProps} />
      <ZepTable
        variant={variant as unknown as TableThemes}
        columns={columns}
        dataSource={dataSource}
        fullWidth
        descriptionBottom={message}
      />
      {content && <RichText content={content} />}
      {tableButtonLabel && (
        <Button
          variant={tableButtonVariant}
          icon={tableButtonIcon}
          href={tableButtonUrl}
          iconPosition={tableButtonIconPosition}
          onClick={tableButtonOnClick}
        >
          {tableButtonLabel}
        </Button>
      )}
    </Layout>
  );
};
