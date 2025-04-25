import { StoryObj } from '@storybook/react';
import { SmallHeroProps } from './small-hero.interface';

declare const meta: {
    title: string;
    component: import('react').FC<SmallHeroProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithIndigo: Story;
//# sourceMappingURL=SmallHero.stories.d.ts.map