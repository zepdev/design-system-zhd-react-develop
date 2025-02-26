import { render } from '@testing-library/react';
import { MediaText } from './MediaText';

describe('MediaText component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MediaText>
        <div></div>
      </MediaText>,
    );
    const MediaTextElement = getByTestId('zep-mediaText-simple');
    expect(MediaTextElement).toBeInTheDocument();
    expect(MediaTextElement).toHaveClass('zep-grid');
  });

  it('should render MediaText.Image properly', () => {
    const { getByTestId } = render(
      <MediaText>
        <MediaText.Image src="test" alt="test"></MediaText.Image>
      </MediaText>,
    );
    const MediaTextElement = getByTestId('zep-mediaText-image');
    expect(MediaTextElement).toBeInTheDocument();
    expect(MediaTextElement).toHaveClass('zep-col-start-5');
  });

  it('should render MediaText.Body properly', () => {
    const { getByTestId } = render(
      <MediaText>
        <MediaText.Body>
          <div></div>
        </MediaText.Body>
      </MediaText>,
    );
    const MediaTextElement = getByTestId('zep-mediaText-body');
    expect(MediaTextElement).toBeInTheDocument();
    expect(MediaTextElement).toHaveClass('zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]');
  });

  it('should render MediaText.Tagline properly', () => {
    const { getByTestId } = render(
      <MediaText>
        <MediaText.Body>
          <MediaText.Tagline />
        </MediaText.Body>
      </MediaText>,
    );
    const MediaTextElement = getByTestId('zep-MediaText-tagline');
    expect(MediaTextElement).toBeInTheDocument();
    expect(MediaTextElement).toHaveClass('zep-typography-taglineMD');
  });

  it('should render MediaText.Headline properly', () => {
    const { getByTestId } = render(
      <MediaText>
        <MediaText.Body>
          <MediaText.Headline />
        </MediaText.Body>
      </MediaText>,
    );
    const MediaTextElement = getByTestId('zep-MediaText-headline');
    expect(MediaTextElement).toBeInTheDocument();
    expect(MediaTextElement).toHaveClass('zep-typography-headlineMD-fluid-cqi');
  });

  it('should render Hero.Description properly', () => {
    const { getByTestId } = render(
      <MediaText>
        <MediaText.Body>
          <MediaText.Description />
        </MediaText.Body>
      </MediaText>,
    );
    const MediaTextElement = getByTestId('zep-MediaText-description');
    expect(MediaTextElement).toBeInTheDocument();
    expect(MediaTextElement).toHaveClass('zep-text-typography-light-100');
  });

  it('should render Hero.Button properly', () => {
    const { getByTestId } = render(
      <MediaText>
        <MediaText.Body>
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </MediaText>,
    );
    const MediaTextElement = getByTestId('zep-mediatext-buttons');
    expect(MediaTextElement).toBeInTheDocument();
    expect(MediaTextElement).toHaveClass('zep-block');
  });
});
