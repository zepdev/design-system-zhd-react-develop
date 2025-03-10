import { render } from '@testing-library/react';

import { Tab } from './Tab';

describe('Tab.Group component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Tab.Group></Tab.Group>);
    const gridElement = getByTestId('zep-tab-group');
    expect(gridElement).toBeInTheDocument();
  });
});

describe('Tab.List component', () => {
  it('renders correctly inside Tab.Group', () => {
    const { getByTestId } = render(
      <Tab.Group>
        <Tab.List></Tab.List>
      </Tab.Group>,
    );
    const gridElement = getByTestId('zep-tab-list');
    expect(gridElement).toBeInTheDocument();
  });
});

describe('Tab component', () => {
  it('renders correctly inside Tab.Group', () => {
    const { getByTestId } = render(
      <Tab.Group>
        <Tab>Tab name</Tab>
      </Tab.Group>,
    );
    const gridElement = getByTestId('zep-tab');
    expect(gridElement).toBeInTheDocument();
  });

  it('renders correctly inside Tab.Group > Tab.List', () => {
    const { getByTestId } = render(
      <Tab.Group>
        <Tab.List>
          <Tab>Tab name</Tab>
        </Tab.List>
      </Tab.Group>,
    );
    const gridElement = getByTestId('zep-tab');
    expect(gridElement).toBeInTheDocument();
  });
});

describe('Tab.Panels component', () => {
  it('renders correctly inside Tab.Group', () => {
    const { getByTestId } = render(
      <Tab.Group>
        <Tab.Panels></Tab.Panels>
      </Tab.Group>,
    );
    const gridElement = getByTestId('zep-tab-panels');
    expect(gridElement).toBeInTheDocument();
  });
});

describe('Tab.Panel component', () => {
  it('renders correctly inside Tab.Group', () => {
    const { getByTestId } = render(
      <Tab.Group>
        <Tab.Panel></Tab.Panel>
      </Tab.Group>,
    );
    const gridElement = getByTestId('zep-tab-panel');
    expect(gridElement).toBeInTheDocument();
  });

  it('renders correctly inside Tab.Group > Tab.Panels', () => {
    const { getByTestId } = render(
      <Tab.Group>
        <Tab.Panels>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>,
    );
    const gridElement = getByTestId('zep-tab-panel');
    expect(gridElement).toBeInTheDocument();
  });
});
