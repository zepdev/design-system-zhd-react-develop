import { StoryObj } from '@storybook/react';
import { LightboxContactFormZsdProps } from '.';

declare const meta: {
    title: string;
    component: import('react').FC<LightboxContactFormZsdProps>;
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
//# sourceMappingURL=LightboxContactFormZsd.stories.d.ts.map