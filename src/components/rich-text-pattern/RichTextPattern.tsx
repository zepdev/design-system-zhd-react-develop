import { FC } from 'react';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { RichText } from '../rich-text';
import { RichTextPatternProps } from './RichTextPattern.interface';

export const RichTextPattern: FC<RichTextPatternProps> = ({
  content,
  headline,
  id,
  button,
  buttonIcon,
  buttonIconPosition,
  buttonUrl,
  buttonAction,
  ...headerProps
}) => {
  return (
    <Layout
      id={id}
      className="zep-flex md:zep-flex-row zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5"
    >
      {headline && <HeaderShortComponent headline={headline} className="zep-w-full" {...headerProps} />}
      <RichText
        content={content}
        button={button}
        buttonIcon={buttonIcon}
        buttonIconPosition={buttonIconPosition}
        buttonUrl={buttonUrl}
        buttonAction={buttonAction}
      />
    </Layout>
  );
};
