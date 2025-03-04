import { StoryObj } from '@storybook/react';
import { HeroProps } from './hero.interface';

declare const meta: {
    title: string;
    component: import('react').FC<HeroProps>;
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Hero.stories.d.ts.map