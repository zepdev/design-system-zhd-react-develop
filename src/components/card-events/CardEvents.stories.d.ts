import { StoryObj } from '@storybook/react';
import { CardEventsProps } from './CardEvents.interface';

declare const meta: {
    title: string;
    component: import('react').FC<CardEventsProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=CardEvents.stories.d.ts.map