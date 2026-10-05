import { StoryObj } from '@storybook/react';
import { HeroSlideData } from './hero-slider.interface';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('./hero-slider.interface').HeroSliderProps & import('react').RefAttributes<HTMLElement>>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        slides: HeroSlideData[];
        label: string;
        autoplay: true;
        interval: number;
        headingLevel: 1;
    };
    argTypes: {
        autoplay: {
            control: {
                type: string;
            };
        };
        interval: {
            control: {
                type: string;
            };
        };
        headingLevel: {
            control: {
                type: string;
            };
            options: number[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
/** Autoplay off — manual navigation only. */
export declare const NoAutoplay: Story;
/** German control labels. */
export declare const Localised: Story;
/** A single slide — controls hide automatically. */
export declare const SingleSlide: Story;
//# sourceMappingURL=HeroSlider.stories.d.ts.map