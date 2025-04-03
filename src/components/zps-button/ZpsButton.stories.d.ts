import { StoryObj } from '@storybook/react';
import { ZpsButtonProps, ZpsButtonVariant } from './zps-button.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ZpsButtonProps>;
    tags: string[];
    argTypes: {
        disabled: {
            control: {
                type: string;
            };
        };
        isLoading: {
            control: {
                type: string;
            };
        };
        variant: {
            control: {
                type: string;
                options: ZpsButtonVariant[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const IconButton: Story;
//# sourceMappingURL=ZpsButton.stories.d.ts.map