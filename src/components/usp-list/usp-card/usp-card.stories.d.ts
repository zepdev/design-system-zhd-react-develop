import { StoryObj } from '@storybook/react';
import { USPProps } from './usp-card.interface';

declare const meta: {
    title: string;
    component: import('react').FC<USPProps>;
    tags: string[];
    argTypes: {
        iconName: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=usp-card.stories.d.ts.map