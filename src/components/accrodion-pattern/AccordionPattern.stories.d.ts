import { StoryObj } from '@storybook/react';
import { AccordionPatternProps } from './accordion.interface';

declare const meta: {
    title: string;
    component: import('react').FC<AccordionPatternProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=AccordionPattern.stories.d.ts.map