import { StoryObj } from '@storybook/react';
import { SmallHeroProps } from './small-hero.interface';

declare const meta: {
    title: string;
    component: ({ imageSrc, imageAlt, headline, subline, description, primaryButtonLabel, secondaryButtonLabel, onClickPrimaryButton, onClickSecondaryButton, backgroundVariant, }: SmallHeroProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const GradientWithoutImage: Story;
export declare const PlainFullBackground: Story;
//# sourceMappingURL=SmallHero.stories.d.ts.map