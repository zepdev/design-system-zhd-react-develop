import { StoryObj } from '@storybook/react';
import { ContactFormLargeProps } from './contact-form-large-interface';

declare const meta: {
    title: string;
    component: import('react').FC<ContactFormLargeProps>;
    tags: string[];
    argTypes: {
        locale: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=ContactFormLarge.stories.d.ts.map