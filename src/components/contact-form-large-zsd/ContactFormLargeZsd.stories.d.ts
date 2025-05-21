import { StoryObj } from '@storybook/react';
import { ContactFormLargeZsdProps } from './contact-form-large-zsd-interface';

declare const meta: {
    title: string;
    component: import('react').FC<ContactFormLargeZsdProps>;
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
//# sourceMappingURL=ContactFormLargeZsd.stories.d.ts.map