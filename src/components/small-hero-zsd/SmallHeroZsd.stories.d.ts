import { StoryObj } from '@storybook/react';
import { SmallHeroZsdProps } from './small-hero-zsd.interface';

declare const meta: {
    title: string;
    component: ({ headline, subline, description, imageSrc, imageAlt, buttonPrimary, buttonSecondary, buttonPrimaryUrl, buttonSecondaryUrl, buttonPrimaryIcon, buttonSecondaryIcon, buttonPrimaryIconPosition, buttonSecondaryIconPosition, buttonPrimaryAction, buttonSecondaryAction, buttonPrimaryOnClick, backgroundVariant, }: SmallHeroZsdProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=SmallHeroZsd.stories.d.ts.map