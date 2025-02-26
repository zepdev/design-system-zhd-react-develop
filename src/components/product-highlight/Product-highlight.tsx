import { Button } from '@/components/zsd-button/ZsdButton';
import clsx from 'clsx';
import { ProductHighLightProps } from './product-highlight.interface';
export const ProductHighLight: React.FC<ProductHighLightProps> = ({
  productDetails,
  imageAlt,
  productImageSrc,
  buttonTitle,
  buttonText,
  imageAlignment,
  buttonVariant,
  onClick,
}) => {
  const directionClass = imageAlignment === 'right' ? 'md:zep-order-1' : '';
  const marginLeft =
    imageAlignment === 'right' ? 'md:-zep-mr-[160px] xl:zep-mr-auto' : 'md:-zep-ml-[160px] xl:zep-ml-auto';
  return (
    <>
      <div
        className={clsx(
          marginLeft,
          'zep-grid md:zep-gap-2 zep-grid-cols-1 md:zep-grid-cols-16 xl:zep-max-w-[2042px] zep-mx-auto',
        )}
      >
        <div className={clsx(directionClass, 'zep-mb-1 sm:zep-mb-1.5 md:zep-col-span-10')}>
          <img className={clsx('zep-aspect-[4/3]')} src={productImageSrc} alt={imageAlt} />
        </div>

        <div
          className={clsx(
            'zep-px-1 zep-pt-1 sm:zep-px-1.5 sm:zep-pt-1.5 md:zep-px-1.5 md:zep-pt-1.5 lg:zep-px-2 lg:zep-pt-2  md:zep-col-span-6',
          )}
        >
          <div className="zep-mb-2">
            {productDetails.map((item, index) => {
              const { title, content } = item;
              return (
                <div
                  key={index}
                  className={clsx(
                    'zep-border-b-1 zep-border-b-greyscale-400 last:zep-border-b-[0] sm:zep-mb-1 md:zep-mb-1.5 zep-mb-1  md:last:zep-mb-3',
                  )}
                >
                  {title && (
                    <h2 data-testid="headline" className={clsx('zep-typography-headlineXS-fluid-cqi zep-mb-1')}>
                      {title}
                    </h2>
                  )}
                  <p className={clsx('zep-typography-bodyText zep-my-1 md:zep-my-1.5')}>{content}</p>
                </div>
              );
            })}
          </div>
          <Button variant={buttonVariant} label={buttonText} title={buttonTitle} onClick={onClick} />
        </div>
      </div>
    </>
  );
};
