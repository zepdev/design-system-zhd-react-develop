import { Pagination } from '@zepdev/design-system-component-library-react';
import { FC, useState } from 'react';
import { ArticleCard } from '../article-card';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { ArticlesProps } from './articles.interface';

const Articles: FC<ArticlesProps> = ({
  articles,
  headline,
  tagline,
  description,
  linkHref,
  linkText,
}: ArticlesProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;

  return (
    <Layout testId="zep-articles-section">
      <HeaderLongComponent
        type="link"
        headline={headline}
        tagline={tagline}
        description={description}
        linkText={linkText}
        linkHref={linkHref}
      />

      <div className="zep-mt-2.5 sm:zep-mt-3 md:zep-mt-4 lg:zep-mt-5 zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 zep-mb-[40px] sm:zep-mb-3 md:zep-mb-4 lg:zep-mb-5">
        {articles?.slice(startIndex, endIndex).map((article) => <ArticleCard article={article} />)}
      </div>
      {articles.length > 10 && (
        <Pagination
          currentPage={currentPage}
          totalElements={articles.length}
          setCurrentPage={setCurrentPage}
          itemsPerPage={10}
        />
      )}
    </Layout>
  );
};

export { Articles };
