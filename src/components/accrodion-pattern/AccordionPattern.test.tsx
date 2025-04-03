import { render, screen } from '@testing-library/react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';
import { AccordionPattern } from './AccordionPattern';

const mockTopDescription: BlocksContent = [
    {
      type: 'paragraph',
      children: [
        {
          text: 'This is the top description',
          type: 'text',
        },
      ],
    },
  ];

  const mockBottomDescription: BlocksContent = [
    {
      type: 'paragraph',
      children: [
        {
          text: 'This is the bottom description',
          type: 'text',
        },
      ],
    },
  ];

  const mockContent: BlocksContent = [
    {
      type: 'paragraph',
      children: [
        {
          text: 'This is just a content description',
          type: 'text',
        },
      ],
    },
  ];

const mockContentData = 
    [
        {
          title: 'Title one',
          accordionContent: mockContent,
        },
        {
          title: 'Title two',
          accordionContent: mockContent,
        },
      ];

describe('Accordion Pattern Component', () => {
  const renderComponent = () =>
    render(
      <AccordionPattern
        topDescription={mockTopDescription}
        bottomDescription={mockBottomDescription}
        contents={mockContentData}
        variant={GlobalVariants.Zps}
      />
    );

  it('renders top description', () => {
    renderComponent();
    expect(screen.getByTestId('accordion-pattern-topDescription')).toHaveTextContent(
      'This is the top description'
    );
  });

  it('renders accordion items with titles', () => {
    renderComponent();
    const titles = screen.getByTestId('accordion-pattern-titleContent');
    expect(titles).toHaveTextContent('Title one');
    expect(titles).toHaveTextContent('Title two');
  });

  it('renders bottom description', () => {
    renderComponent();
    expect(screen.getByTestId('accordion-pattern-bottomDescription')).toHaveTextContent(
      'This is the bottom description'
    );
  });
});
