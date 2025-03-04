import { StoryObj } from '@storybook/react';
import { DownloadCardProps } from './download-card.interface';

declare const meta: {
    title: string;
    component: import('react').FC<DownloadCardProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=DownloadCard.stories.d.ts.map