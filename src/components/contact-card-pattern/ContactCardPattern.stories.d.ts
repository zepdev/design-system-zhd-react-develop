import { StoryObj } from '@storybook/react';
import { ContactCardPatternProps } from './contact-card-pattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ContactCardPatternProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const With6Cards: Story;
//# sourceMappingURL=ContactCardPattern.stories.d.ts.map