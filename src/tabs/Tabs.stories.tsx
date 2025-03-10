import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './Tab';
import { TabProps } from './tab.interface';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

const meta = {
  title: 'Components/Tabs',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
        <Tab.Panel>Panel 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  ),
};

export const TabDisabled: Story = {
  render: () => (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab disabled>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
        <Tab.Panel>Panel 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  ),
};

export const TabVariableLength: Story = {
  render: () => (
    <Tab.Group>
      <span></span>
      <Tab.List>
        <Tab>Short tab 1</Tab>
        <Tab>Medium text tab 2</Tab>
        <Tab>Long text for the great tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 1 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 2 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 3 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  ),
};

const testTabPanelItem = `zep-tab-panel`;

export const SwitchPanel: Story = {
  args: {} as TabProps,
  render: (args, context) => {
    return (
      <Tab.Group>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Panel 1</Tab.Panel>
          <Tab.Panel>Panel 2</Tab.Panel>
          <Tab.Panel>Panel 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('Tab 2'));
    await expect(canvas.getByTestId(testTabPanelItem)).toHaveTextContent('Panel 2');
  },
};
