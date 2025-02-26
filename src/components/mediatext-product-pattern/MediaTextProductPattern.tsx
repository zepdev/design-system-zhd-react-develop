import { HeaderLongComponent } from '../header-long-component';
import { MediaTextProduct } from '../mediatext-product/MediaTextProduct';
import { MediaTextProductPatternProps } from './mediatext-product-pattern.interface';

export const MediaTextProductPattern: React.FC<MediaTextProductPatternProps> = ({
  items,
  headline,
  hasButton,
  ...headerProps
}) => {
  return (
    <div
      data-testid="zep-mediatext-pattern"
      className="zep-px-1 zep-py-3 sm:zep-px-2.5 sm:zep-py-4 md:zep-px-[65px] md:zep-py-5 xl:zep-px-[121px] xl:zep-py-[120px]"
    >
      <div className="zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5">{headline && <HeaderLongComponent headline={headline} {...headerProps} />}</div>
      <div className="zep-inline-grid md:zep-grid zep-gap-2.5 sm:zep-gap-4 xl:zep-gap-5">
        {items.map((item, index) => (
          <MediaTextProduct key={index} {...item } hasButton={hasButton} />
        ))}
      </div>
    </div>
  );
};
