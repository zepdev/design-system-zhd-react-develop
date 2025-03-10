import { StoryObj } from '@storybook/react';
import { TabProps } from './tab.interface';

declare const meta: {
    title: string;
    component: {
        ({ disabled, children }: TabProps): import("react/jsx-dev-runtime").JSX.Element;
        Group: ({ children }: import('./tab.interface').TabGroupProps) => import("react/jsx-dev-runtime").JSX.Element;
        List: ({ children }: import('./tab.interface').TabListProps) => import("react/jsx-dev-runtime").JSX.Element;
        Panel: ({ children }: import('./tab.interface').TabPanelProps) => import("react/jsx-dev-runtime").JSX.Element;
        Panels: ({ children }: import('./tab.interface').TabPanelsProps) => import("react/jsx-dev-runtime").JSX.Element;
    };
    tags: string[];
    argTypes: {
        disabled: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const TabDisabled: Story;
export declare const TabVariableLength: Story;
export declare const SwitchPanel: Story;
//# sourceMappingURL=Tabs.stories.d.ts.map