
import { useState } from 'react';
import { CardEvent } from './card-event';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { Button, ZpsButtonVariant } from '../zps-button';
import { CardEventPatternProps } from './card-event-pattern.interface';

export const CardEventPattern: React.FC<CardEventPatternProps> = ({
  items,
  variant,
  headline,
  buttonLabel,
  ...headerLongComponentProps
}: CardEventPatternProps) => {
  const itemsPerPage = 10;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 10, items.length));
  };

  const cardEventItems = items.slice(0, visibleItems);

  return (
    <Layout className="zep-inline-grid zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-justify-center zep-bg-greyscale-100">
      <HeaderLongComponent
        headline={headline}
        variant={variant}
        {...headerLongComponentProps}
      />
      <div data-testid="zep-card-event">
        {cardEventItems.map((item, index) => (
          <div
            key={index}
            className="zep-mb-1 sm:zep-mb-1.5 xl:zep-mb-2  zep-bg-greyscale-0"
          >
            <CardEvent
              key={index}
              headline={item.headline}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              description={item.description}
              location={item.location}
              date={item.date}
              variant={variant}
              linkSrc={item.linkSrc}
              linkLabel={item.linkLabel}
            />
          </div>
        ))}
      </div>

      {/* Show button only if items exceed 10 */}
      {visibleItems < items.length && (
        <div className="zep-justify-center zep-items-center zep-flex">
          <Button label={buttonLabel} onClick={handleShowMore} variant={ZpsButtonVariant.SecondaryZps} />
        </div>
      )}
    </Layout>
  );
};
