import { StoryObj } from '@storybook/react';
import { FooterProps } from './Footer.interface';
import { GlobalVariants } from '../../interfaces/global-variants';

declare const meta: {
    title: string;
    component: import('react').FC<FooterProps>;
    tags: string[];
    argTypes: {
        prominentSocialIcons: {
            control: string;
            description: string;
        };
        variant: {
            control: string;
            options: GlobalVariants[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ProminentSocialIcons: Story;
//# sourceMappingURL=Footer.stories.d.ts.map