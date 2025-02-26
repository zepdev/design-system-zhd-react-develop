import { FC } from 'react';
import { Accordion as ZepAccordion } from '@zepdev/design-system-component-library-react';
import { BlocksRichText } from './BlocksRichText';
import { AccordionProps } from './RichText.interface';

export const Accordion: FC<AccordionProps> = ({ contents }) => {
  return (
    <div className="zep-w-full">
      <ZepAccordion
        className="zep-text-typography-dark-100"
        items={contents.map((item) => ({
          title: item.title,
          content: (
            <div className="zep-relative">
              <BlocksRichText content={item.accordionContent} />
            </div>
          ),
        }))}
      />
    </div>
  )
}
