import { StoryObj } from '@storybook/react';
import { ContactFormZsdServicesProps } from './ContactFormZsdServices.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ContactFormZsdServicesProps>;
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
//# sourceMappingURL=ContactFormZsdServices.stories.d.ts.map