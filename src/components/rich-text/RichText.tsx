import { Table } from '@zepdev/design-system-component-library-react';
import { RichTextProps } from './RichText.interface';
import { BlocksRichText } from './BlocksRichText';
import { Images } from './Images';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { Accordion } from './Accordion';
import { Certificates } from './Certificates';
import { Button, ZsdButtonVariant } from '../zsd-button';

const RichText = ({ children, onDownload, description, buttonText, ...headerProps }: RichTextProps) => {
  return (
    <Layout className="zep-flex zep-justify-center xl:zep-justify-start" testId="zep-rich-text">
      <div className="zep-flex xl:zep-max-w-[1920px] zep-max-w-[894px] zep-w-full xl:zep-flex-row xl:zep-gap-5 sm:zep-gap-2.5 zep-gap-2 zep-flex-col xl:zep-items-start">
        <HeaderShortComponent
          className="xl:zep-min-w-[42%] zep-w-full"
          {...headerProps}
        />
        <div className="zep-grow zep-flex zep-flex-col zep-gap-3 zep-items-center">
          {children}
          <div className="zep-flex zep-w-full zep-flex-col zep-gap-1">
            <p className="zep-text-typography-dark-100 zep-typography-bodyText">{description}</p>
            <Button className="sm:zep-w-fit" icon="download" iconPosition="right" variant={ZsdButtonVariant.SecondaryDark} onClick={onDownload}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

RichText.BlocksRichText = BlocksRichText;
RichText.Images = Images;
RichText.Accordion = Accordion;
RichText.Table = Table;
RichText.Certificates = Certificates;

export { RichText };
