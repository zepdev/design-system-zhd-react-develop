import { StoryObj } from '@storybook/react';
import { PageEntryProps } from './page-entry.interface';

declare const meta: {
    title: string;
    component: import('react').FC<PageEntryProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const OneItemImage: Story;
export declare const OneItemVideo: Story;
//# sourceMappingURL=PageEntry.stories.d.ts.map