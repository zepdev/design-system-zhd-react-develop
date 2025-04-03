import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('./ContactSection.interface').ContactSectionProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Single: Story;
export declare const Multi: Story;
//# sourceMappingURL=ContactSection.stories.d.ts.map