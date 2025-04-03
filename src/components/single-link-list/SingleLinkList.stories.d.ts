import { StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';

declare const meta: {
    title: string;
    component: import('react').FC<import('./SingleLinkList.interface').SingleLinkListProps>;
    tags: string[];
    argTypes: {
        variant: {
            children: {
                control: {
                    type: string;
                    options: GlobalVariants[];
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=SingleLinkList.stories.d.ts.map