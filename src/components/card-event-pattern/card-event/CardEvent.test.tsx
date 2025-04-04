import { render } from '@testing-library/react';
import { CardEvent } from './CardEvent';

const mockEventData = {
    imageSrc:
      'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'construction site',
    headline: 'Testing',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer',
    location: 'Berlin',
    date: '19.09.2024',
    linkSrc: 'https://www.zeppelin.com',
    linkLabel: 'Click me',
  } 

describe('Card Event component', () => {

  it('renders correctly', () => {
    const Child = (
      <CardEvent
        imageSrc={mockEventData.imageSrc}
        imageAlt={mockEventData.imageAlt}
        headline={mockEventData.headline}
        description={mockEventData.description}
        linkSrc={mockEventData.linkSrc}
        linkLabel={mockEventData.linkLabel}
        date={mockEventData.date}
        location={mockEventData.location}
      />
    );
    const { getByTestId } = render(Child);
    const cardElement = getByTestId('zep-card-event');
    const headlineElement = getByTestId('zep-card-event-headline');
    const descriptionElement = getByTestId('zep-card-event-description');
    const linkElement = getByTestId('zep-event-link');
    const imageElement = getByTestId('zep-card-event-image');

    expect(imageElement).toBeInTheDocument();
    expect(cardElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(headlineElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();

    expect(headlineElement).toHaveTextContent(mockEventData.headline);
    expect(descriptionElement).toHaveTextContent(mockEventData.description);
  });
});
