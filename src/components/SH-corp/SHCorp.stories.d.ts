import { StoryObj } from '@storybook/react';
import { SHCorpProps } from './SHCorp-interface';

declare const meta: {
    title: string;
    component: import('react').FC<SHCorpProps>;
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=SHCorp.stories.d.ts.map