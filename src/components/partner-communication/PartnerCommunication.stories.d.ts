import { StoryObj } from '@storybook/react';
import { PartnerCommunicationProps } from './partner-communication.interface';

declare const meta: {
    title: string;
    component: ({ id, headline, partners, variant }: PartnerCommunicationProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        variant: {
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
export declare const With10Logos: Story;
//# sourceMappingURL=PartnerCommunication.stories.d.ts.map