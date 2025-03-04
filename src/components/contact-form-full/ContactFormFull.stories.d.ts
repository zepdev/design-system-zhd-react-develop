import { StoryObj } from '@storybook/react';
import { ContactFormProps } from './contact-form-full-interface';

declare const meta: {
    title: string;
    component: import('react').FC<ContactFormProps>;
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
//# sourceMappingURL=ContactFormFull.stories.d.ts.map