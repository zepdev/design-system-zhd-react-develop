import { StoryObj } from '@storybook/react';
import { DownloadsProps } from './downloads.interface';

declare const meta: {
    title: string;
    component: import('react').FC<DownloadsProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Downloads.stories.d.ts.map