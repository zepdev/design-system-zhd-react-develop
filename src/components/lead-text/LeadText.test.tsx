import { render } from '@testing-library/react';
import { LeadText } from '@/components/lead-text/LeadText';
import { BlocksContent } from '@strapi/blocks-react-renderer';

describe('Lead Text component', () => {
  const testHeading = 'Lead Text test content';
  const testContent: BlocksContent = [
    {
      type: 'paragraph',
      children: [
        {
          text: 'Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.',
          type: 'text'
        }
      ]
    },
  ];

  it('renders component without headline', () => {
    const { getByTestId, queryByTestId } = render(<LeadText content={testContent} />);
    const leadTextContent = getByTestId('lead-text-body');
    const leadTextHeadline = queryByTestId('lead-text-headline');
    expect(leadTextContent).toBeInTheDocument();
    expect(leadTextHeadline).not.toBeInTheDocument();
  });
  it('renders component with headline', () => {
    const { getByTestId } = render(<LeadText content={testContent} headline={testHeading} />);
    const leadTextContent = getByTestId('lead-text-body');
    const leadTextHeadline = getByTestId('lead-text-headline');
    expect(leadTextContent).toBeInTheDocument();
    expect(leadTextHeadline).toBeInTheDocument();
  });
  it('renders component with cat theme', () => {
    const { getByTestId } = render(<LeadText content={testContent} theme="cat" />);
    const leadTextElement = getByTestId('lead-text');
    expect(leadTextElement).toHaveClass('zep-text-typography-dark-100');
  });
  it('renders component with power systems theme', () => {
    const { getByTestId } = render(<LeadText content={testContent} />);
    const leadTextElement = getByTestId('lead-text');
    expect(leadTextElement).toHaveClass('zep-text-primary-default');
  });
});
