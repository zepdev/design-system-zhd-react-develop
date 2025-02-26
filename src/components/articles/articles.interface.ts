import { Article } from '../article-card';
import { HeaderLongProps } from '../header-long';

export interface ArticlesProps extends HeaderLongProps {
  articles: Article[];
}
