import { render } from '@testing-library/react';
import { LeadText } from './LeadText';
import { mockRichText } from '../../utils/mocks';

describe('Lead Text component', () => {
  const testHeading = 'Lead Text test content';

  it('renders component without headline', () => {
    const { getByTestId, queryByTestId } = render(<LeadText content={mockRichText} />);
    const leadTextContent = getByTestId('zep-richtext');
    const leadTextHeadline = queryByTestId('header-short');
    expect(leadTextContent).toBeInTheDocument();
    expect(leadTextHeadline).not.toBeInTheDocument();
  });
  it('renders component with headline', () => {
    const { getByTestId } = render(<LeadText content={mockRichText} headline={testHeading} />);
    const leadTextContent = getByTestId('zep-richtext');
    const leadTextHeadline = getByTestId('header-short-component');
    expect(leadTextContent).toBeInTheDocument();
    expect(leadTextHeadline).toBeInTheDocument();
  });
});
