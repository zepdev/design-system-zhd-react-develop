import { StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';

declare const meta: {
    title: string;
    component: import('react').FC<import('./MultiLinkList.interface').MultiLinkListProps>;
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
export declare const ThreeItems: Story;
export declare const FourItems: Story;
export declare const FiveItems: Story;
export declare const SixItems: Story;
export declare const SevenItems: Story;
export declare const EightItems: Story;
export declare const NineItems: Story;
export declare const TenItems: Story;
export declare const ElevenItems: Story;
export declare const TwelveItems: Story;
export declare const ThirteenItems: Story;
export declare const FourteenItems: Story;
export declare const FifteenItems: Story;
//# sourceMappingURL=MultiLinkList.stories.d.ts.map