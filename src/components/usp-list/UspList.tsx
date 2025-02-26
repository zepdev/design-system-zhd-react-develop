import { FC } from 'react';
import { UspCard } from './usp-card';
import { USPListProps } from './usp-list.interface';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';

export const USPList: FC<USPListProps> = ({
  uspCards,
  ...props
}: USPListProps) => {

  return (
    <Layout className="zep-bg-greyscale-200 zep-py-3 sm:zep-py-4 md:zep-py-5 xl:zep-py-7.5 zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-gap-5" testId="zep-usp-list">
      <HeaderLongComponent {...props} />
      <div className="zep-flex zep-flex-col sm:zep-flex-row sm:zep-flex-wrap zep-w-full zep-gap-2.5 sm:zep-gap-y-3 sm:zep-gap-x-2.5 md:zep-gap-y-4 xl:zep-gap-y-5">
        {uspCards?.map((card, index) => (
          <UspCard
            count={card?.count || `${ index + 1}.`}
            headline={card.headline}
            description={card.description}
            iconName={card.iconName}
            className={[1, 2, 3, 5, 6].includes(uspCards?.length) ? 'md:zep-max-w-[calc((100%-80px)/3)]' : 'md:zep-max-w-[calc(25%-30px)]'}
          />
        ))}
      </div>
    </Layout>
  );
};
