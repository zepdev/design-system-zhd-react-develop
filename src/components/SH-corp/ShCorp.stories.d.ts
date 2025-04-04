import { StoryObj } from '@storybook/react';
import { ShCorpProps } from './sh-corp-interface';

declare const meta: {
    title: string;
    component: import('react').FC<ShCorpProps>;
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=ShCorp.stories.d.ts.map