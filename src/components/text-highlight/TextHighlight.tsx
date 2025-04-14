import {
  Link,
  LinkMode,
  LinkTarget,
  Accordion as ZepAccordion,
  Table as ZepTable,
} from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import { FC, createContext, useContext } from 'react';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { RichText as ZepRichText } from '../rich-text';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { AccordionProps, RichTextProps, THContext, TableProps, TextHighlightProps } from './TextHighlight.interface';

const TextHighlightContext = createContext<THContext>({
  message: '',
  buttonText: '',
  buttonOnClick: () => {},
  buttonUrl: '',
  buttonVariant: ZsdButtonVariant.PrimaryDark,
  buttonType: 'default',
  buttonIconPosition: 'left',
});
export const useTextHighlightContext = () => useContext(TextHighlightContext);

const RichText: FC<RichTextProps> = ({ content }) => {
  const { message, buttonText, buttonVariant, buttonIconPosition, buttonType, buttonOnClick, buttonUrl, buttonIcon } =
    useTextHighlightContext();

  return (
    <div className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1.5', 'md:zep-px-[0px]', 'sm:zep-px-1.5', 'zep-px-1')}>
      <ZepRichText content={content} />
      <div
        className={clsx(
          'zep-flex',
          'zep-flex-col',
          'zep-gap-2',
          'zep-pt-1.5',
          'zep-border-t-1',
          'zep-border-t-greyscale-400',
        )}
      >
        <p className={'zep-text-typography-dark-100 zep-typography-bodyText'}>{message}</p>
        {buttonText && buttonVariant === 'link' && (
          <Link
            target={buttonUrl?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
            className={'zep-text-typography-dark-100'}
            label={buttonText}
            mode={LinkMode.Inline}
            icon={buttonIcon}
            iconPlacement={buttonIconPosition === 'left' ? 'before' : 'after'}
            download={buttonType === 'download'}
            href={getUrlWithTrailingSlash(buttonUrl)}
          />
        )}
        {buttonText && buttonVariant !== 'link' && (
          <Button
            icon={buttonIcon}
            iconPosition={buttonIconPosition}
            label={buttonText}
            buttonType={buttonType}
            onClick={buttonOnClick}
            variant={buttonVariant}
            href={buttonUrl}
          />
        )}
      </div>
    </div>
  );
};

const Accordion: FC<AccordionProps> = ({ contents }) => {
  const { message, buttonText, buttonVariant, buttonIconPosition, buttonType, buttonOnClick, buttonUrl, buttonIcon } =
    useTextHighlightContext();

  return (
    <div className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1.5', 'md:zep-px-[0px]', 'sm:zep-px-1.5', 'zep-px-1')}>
      <div>
        <ZepAccordion
          className={'zep-text-typography-dark-100'}
          items={contents.map((item) => ({
            title: item.title,
            content: (
              <div className="zep-relative">
                <ZepRichText className="lg:zep-mx-[0]" content={item.accordionContent} />
              </div>
            ),
          }))}
        />
      </div>
      <div className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1.5')}>
        <p className={'zep-typography-bodyText zep-text-typography-dark-100'}>{message}</p>
        {buttonText && buttonVariant === 'link' && (
          <Link
            target={buttonUrl?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
            className={'zep-text-typography-dark-100'}
            label={buttonText}
            mode={LinkMode.Inline}
            icon={buttonIcon}
            iconPlacement={buttonIconPosition === 'left' ? 'before' : 'after'}
            download={buttonType === 'download'}
            href={getUrlWithTrailingSlash(buttonUrl)}
          />
        )}
        {buttonText && buttonVariant !== 'link' && (
          <Button
            icon={buttonIcon}
            iconPosition={buttonIconPosition}
            label={buttonText}
            buttonType={buttonType}
            onClick={buttonOnClick}
            variant={ZsdButtonVariant.SecondaryDark}
            href={buttonUrl}
            className="zep-max-w-max"
          />
        )}
      </div>
    </div>
  );
};

const Table: FC<TableProps> = ({ columns, dataSource, tableMessage }) => {
  const { message, buttonText, buttonVariant, buttonIconPosition, buttonType, buttonOnClick, buttonUrl, buttonIcon } =
    useTextHighlightContext();

  return (
    <div className={clsx('md:zep-px-[0px]', 'sm:zep-px-1.5', 'zep-px-1', 'zep-flex', 'zep-flex-col', 'zep-gap-1.5')}>
      <ZepTable columns={columns} dataSource={dataSource} descriptionBottom={tableMessage} fullWidth />
      <div className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1.5')}>
        <p className={'zep-typography-bodyText zep-text-typography-dark-100'}>{message}</p>
        {buttonText && buttonVariant === 'link' && (
          <Link
            target={buttonUrl?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
            className={'zep-text-typography-dark-100'}
            label={buttonText}
            mode={LinkMode.Inline}
            icon={buttonIcon}
            iconPlacement={buttonIconPosition === 'left' ? 'before' : 'after'}
            download={buttonType === 'download'}
            href={getUrlWithTrailingSlash(buttonUrl)}
          />
        )}
        {buttonText && buttonVariant !== 'link' && (
          <Button
            icon={buttonIcon}
            iconPosition={buttonIconPosition}
            label={buttonText}
            buttonType={buttonType}
            onClick={buttonOnClick}
            variant={buttonVariant}
            href={buttonUrl}
          />
        )}
      </div>
    </div>
  );
};

const TextHighlight = ({
  buttonText,
  children,
  imageAlt,
  imageSrc,
  message,
  buttonOnClick,
  imageAlignment = 'left',
  headline,
  bottomDescription,
  topDescription,
  id,
  buttonType,
  buttonVariant,
  buttonUrl,
  buttonIcon,
  buttonIconPosition,
  ...headerLongProps
}: TextHighlightProps) => {
  const directionClass = imageAlignment === 'right' ? 'md:zep-flex-row-reverse' : 'md:zep-flex-row';
  const paddingDiv =
    imageAlignment === 'right'
      ? '!zep-pr-[0] zep-pl-1 sm:zep-pl-1.5 md:zep-pl-[66px] lg:zep-pl-[122px]'
      : '!zep-pl-[0] zep-pr-1 sm:zep-pr-1.5 md:zep-pr-[66px] lg:zep-pr-[122px]';

  return (
    <div className="xl:zep-overflow-clip">
      <Layout
        id={id}
        className={clsx(
          'zep-flex',
          'zep-flex-col',
          'zep-gap-2.5',
          'sm:zep-gap-3',
          'md:zep-gap-4',
          'lg:zep-overflow-x-visible',
          'layout-text-highlight',
          paddingDiv,
        )}
        testId="text-highlight"
      >
        {headline && (
          <div
            className={clsx(
              'zep-max-w-[1728px]',
              'zep-w-full',
              'zep-px-1',
              'sm:zep-px-1.5',
              'md:zep-px-[66px]',
              'lg:zep-px-[122px]',
            )}
          >
            <HeaderLongComponent headline={headline} {...headerLongProps} />
          </div>
        )}
        <div
          className={clsx(
            'zep-flex',
            'zep-relative',
            directionClass,
            'zep-flex-col',
            'lg:zep-gap-4',
            'sm:zep-gap-2',
            'md:zep-gap-3',
            'zep-gap-1.5',
          )}
        >
          <div className="zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] zep-overscroll-none xl:zep-relative">
            <div
              className={clsx(
                'xl:zep-absolute',
                imageAlignment === 'left' ? 'xl:zep-right-[0]' : 'xl:zep-left-[0]',
                'zep-h-full',
                'xl:zep-w-fit',
                'zep-w-full',
                'xl:zep-aspect-[4/3]',
              )}
            >
              <img
                className={clsx(
                  'zep-w-full',
                  'zep-h-full',
                  'zep-aspect-[4/3]',
                  'zep-object-cover',
                  imageAlignment === 'left' ? 'md:zep-object-right' : 'md:zep-object-left',
                )}
                src={imageSrc}
                alt={imageAlt}
              />
            </div>
          </div>
          <TextHighlightContext.Provider
            value={{
              buttonText,
              message,
              buttonOnClick,
              buttonVariant,
              buttonType,
              buttonUrl,
              buttonIcon,
              buttonIconPosition,
            }}
          >
            <div className="zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 md:zep-w-[calc(70%-48px)] md:zep-mt-2 lg:zep-w-[calc(70%-64px)]">
              {topDescription && (
                <div className="zep-block" data-testid="texthighlight-pattern-topDescription">
                  <ZepRichText content={topDescription} />
                </div>
              )}
              {children}
              {bottomDescription && (
                <div className="zep-block" data-testid="texthighlight-pattern-bottomDescription">
                  <ZepRichText content={bottomDescription} />
                </div>
              )}
            </div>
          </TextHighlightContext.Provider>
        </div>
      </Layout>
    </div>
  );
};

TextHighlight.Accordion = Accordion;
TextHighlight.Table = Table;
TextHighlight.RichText = RichText;

export { TextHighlight };
