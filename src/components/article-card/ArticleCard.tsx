import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { FC } from 'react';
import { ArticleCardProps } from './article-card.interface';

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const { image, title, chipText, description, linkUrl, linkText } = article;
  return (
    <div data-testid="zep-article-card" className="zep-w-full zep-border-1 zep-border-greyscale-400">
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <div className="zep-flex zep-flex-col md:zep-items-center md:zep-flex-row zep-w-full">
          <img
            src={image}
            alt={title}
            className="zep-object-cover zep-w-full zep-max-h-[183px] md:zep-max-h-[292px] sm:zep-max-h-[385px] lg:zep-max-h-[331px] md:zep-max-w-[438px] lg:zep-max-w-[589px]"
          />
          <div className="zep-p-1 sm:zep-p-1.5 lg:zep-px-5">
            <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-1 sm:zep-mb-0.5 md:zep-mb-1 lg:zep-mb-0.5">
              {chipText}
            </p>
            <h3 className="zep-typography-headlineMD-fluid-cqi zep-mb-0.5 zep-text-greyscale-900 zep-break-all">
              {title}
            </h3>
            <p className="zep-typography-bodyText zep-text-greyscale-900 zep-line-clamp-2 lg:zep-line-clamp-3 zep-mb-1 lg:zep-mb-1.5">
              {description}
            </p>
            <Link label={linkText} mode={LinkMode.Standalone} className="zep-text-primary-default" />
          </div>
        </div>
      </a>
    </div>
  );
};
export { ArticleCard };
