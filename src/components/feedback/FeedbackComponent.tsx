import clsx from 'clsx';
import { FC } from 'react';
import ThumbsDown from '../../assets/ThumbsDown';
import ThumbsUp from '../../assets/ThumbsUp';
import { GlobalVariants } from '../../interfaces/global-variants';
import { Layout } from '../layout';
import { FeedbackProps } from './feedback.interface';

export const FeedbackComponent: FC<FeedbackProps> = ({ id, headline, likeText, dislikeText, variant }: FeedbackProps) => {
  return (
    <Layout
      id={id}
      testId="feedback-component"
      className="zep-py-2 sm:zep-py-2.5 md:zep-py-2 lg:zep-py-3 zep-bg-background-medium"
    >
      <div className="zep-flex zep-flex-col md:zep-flex-row zep-justify-center zep-items-center zep-gap-2 md:zep-gap-6">
        <h3
          className={clsx(
            'zep-text-center md:zep-text-start',
            'zep-typography-headlineMD-fluid-cqi',
            'zep-w-auto',
            variant === GlobalVariants.Zps ? 'zep-text-primary-default' : 'zep-text-typography-dark-100',
          )}
        >
          {headline}
        </h3>
        <div className="zep-flex zep-gap-4">
          <div className="zep-flex zep-flex-col zep-items-center md:hover:zep-scale-110 zep-transition-all md:zep-cursor-pointer">
            <ThumbsUp fill={variant === GlobalVariants.Zps ? '#27166F' : '#262626'} />
            <p
              className={clsx(
                variant === GlobalVariants.Zps ? 'zep-text-primary-default' : 'zep-text-typography-dark-100',
              )}
            >
              {likeText}
            </p>
          </div>
          <div className="zep-flex zep-flex-col zep-items-center md:hover:zep-scale-110 zep-transition-all md:zep-cursor-pointer">
            <ThumbsDown fill={variant === GlobalVariants.Zps ? '#27166F' : '#262626'} />
            <p
              className={clsx(
                variant === GlobalVariants.Zps ? 'zep-text-primary-default' : 'zep-text-typography-dark-100',
              )}
            >
              {dislikeText}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
