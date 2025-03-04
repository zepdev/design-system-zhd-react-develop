import { StoryObj } from '@storybook/react';
import { ContactFormProps } from './contact-form.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ContactFormProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=ContactForm.stories.d.ts.map