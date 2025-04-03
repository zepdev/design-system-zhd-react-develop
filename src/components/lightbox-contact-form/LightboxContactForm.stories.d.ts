import { StoryObj } from '@storybook/react';
import { LightboxContactFormProps } from './lightbox-contact-form.interface';

declare const meta: {
    title: string;
    component: import('react').FC<LightboxContactFormProps>;
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
//# sourceMappingURL=LightboxContactForm.stories.d.ts.map