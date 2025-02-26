import { render,screen } from '@testing-library/react';
import { PartnerCommunication } from './PartnerCommunication';
import { PartnerCommunicationProps } from './partner-communication.interface';

describe('Partner Communication Component', () => {

  const headline = 'Test Headline';
  const childrenContent = 'Test Children Content';

  const defaultProps: PartnerCommunicationProps = {
    headline,
    children: <div>{childrenContent}</div>,
  };
  it('should render', () => {
    const { getByTestId } = render(
      <PartnerCommunication headline='Test headline'>
        <div></div>
      </PartnerCommunication>,
    );
    const PartnerCommunicationElement = getByTestId('zep-partner-communication');
    expect(PartnerCommunicationElement).toBeInTheDocument();
    expect(PartnerCommunicationElement).toHaveClass('zep-bg-background-medium');
  });

  it('should render the headline', () => {
    render(<PartnerCommunication {...defaultProps} />);
    
    const headlineElement = screen.getByText(headline);
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveClass('zep-typography-headlineMD-fluid-cqi');
  });



  it('should render the children content', () => {
    render(<PartnerCommunication {...defaultProps} />);

    const childrenElement = screen.getByText(childrenContent);
    expect(childrenElement).toBeInTheDocument();
  });

});