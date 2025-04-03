import { StoryObj } from '@storybook/react';
import { CardEventProps } from './card-event.interface';

declare const meta: {
    title: string;
    component: import('react').FC<CardEventProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=CardEvent.stories.d.ts.map