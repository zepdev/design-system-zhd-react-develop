import { render, screen } from '@testing-library/react';
import { PartnerCommunication } from './PartnerCommunication';
import { PartnerCommunicationProps } from './partner-communication.interface';

describe('Partner Communication Component', () => {
  const headline = 'Test Headline';
  const defaultProps: PartnerCommunicationProps = {
    headline,
  };
  it('should render', () => {
    const { getByTestId } = render(<PartnerCommunication headline="Test headline" partners={[]} />);
    const PartnerCommunicationElement = getByTestId('zep-partner-communication-wrapper');
    expect(PartnerCommunicationElement).toBeInTheDocument();
    expect(PartnerCommunicationElement).toHaveClass('zep-bg-background-medium');
  });

  it('should render the headline', () => {
    render(<PartnerCommunication {...defaultProps} />);

    const headlineElement = screen.getByText(headline);
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveClass('zep-typography-headlineMD-fluid-cqi');
  });
});
