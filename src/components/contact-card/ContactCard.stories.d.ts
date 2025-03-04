import { StoryObj } from '@storybook/react';
import { ContactCardProps } from './contact-card.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ContactCardProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const MinimalPhone: Story;
export declare const MinimalEmail: Story;
export declare const NoImage: Story;
export declare const OnlyMobil: Story;
export declare const MobilFax: Story;
export declare const MobilFaxEmail: Story;
//# sourceMappingURL=ContactCard.stories.d.ts.map