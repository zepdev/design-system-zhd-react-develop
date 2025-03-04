import { StoryObj } from '@storybook/react';
import { ZpsButtonProps, ZsdButtonVariant } from './zsd-button.interface';

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
                options: ZsdButtonVariant[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const IconButton: Story;
//# sourceMappingURL=ZsdButton.stories.d.ts.map