import { StoryObj } from '@storybook/react';
import { ArticleCardProps } from './article-card.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ArticleCardProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=ArticleCard.stories.d.ts.map