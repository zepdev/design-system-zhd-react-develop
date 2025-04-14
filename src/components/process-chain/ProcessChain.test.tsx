import { render, screen } from '@testing-library/react';
import { ProcessChain } from './ProcessChain';
import { ProcessChainItem } from './processChain.interface';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('ProcessChain component', () => {
  const contentItems: ProcessChainItem[] = [
    {
      headline: 'Test Headline 1',
      listItems: ['List item 1'],
    },
    {
      headline: 'Test Headline 2',
      listItems: ['List item 2'],
    },
  ];

  test('renders list items', () => {
    render(<ProcessChain contentItems={contentItems} linkChain={false} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements.length).toBe(2);
    expect(listItemElements[0]).toHaveTextContent('List item 1');
    expect(listItemElements[1]).toHaveTextContent('List item 2');
  });
});
