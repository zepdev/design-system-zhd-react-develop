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
      className="zep-flex md:zep-flex-row zep-flex-col zep-items-start zep-gap-2.5 sm:zep-gap-3 lg:zep-gap-4 xl:zep-gap-5"
    >
      {headline && <HeaderShortComponent headline={headline} className="zep-w-full md:zep-w-[45%] zep-flex-shrink-0" {...headerProps} />}
      <div className="md:zep-w-[55%] zep-w-full">
        <RichText
          content={content}
          button={button}
          buttonIcon={buttonIcon}
          buttonIconPosition={buttonIconPosition}
          buttonUrl={buttonUrl}
          buttonAction={buttonAction}
        />
      </div>
    </Layout>
  );
};
