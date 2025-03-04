import { StoryObj } from '@storybook/react';
import { USPListProps } from './usp-list.interface';

declare const meta: {
    title: string;
    component: import('react').FC<USPListProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const With3Items: Story;
export declare const With4Items: Story;
export declare const With5Items: Story;
export declare const With6Items: Story;
//# sourceMappingURL=UspList.stories.d.ts.map