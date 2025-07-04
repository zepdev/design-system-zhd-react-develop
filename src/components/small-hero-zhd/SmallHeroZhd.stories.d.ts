import { StoryObj } from '@storybook/react';
import { SmallHeroZhdProps } from './small-hero-zhd.interface';

declare const meta: {
    title: string;
    component: import('react').FC<SmallHeroZhdProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const NoImage: Story;
export declare const WithIndigo: Story;
//# sourceMappingURL=SmallHeroZhd.stories.d.ts.map