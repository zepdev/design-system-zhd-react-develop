import { BlocksContent } from '@strapi/blocks-react-renderer';
import { render } from '@testing-library/react';
import { MediaText } from './MediaText';

describe('MediaText component', () => {
  const content: BlocksContent = [
    {
      type: 'paragraph',
      children: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          type: 'text',
        },
      ],
    },
  ]

  const src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zeppelin-cat.de%2Fgebrauchtmaschinen%2F&psig=AOvVaw0W0iRUwyBSo_kxc0ECc-3F&ust=1732287406586000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDa6s_X7YkDFQAAAAAdAAAAABAE';

  it('should render', () => {
    const { getByTestId } = render(
      <MediaText src={src} alt="alt" content={content} labelSecondary="secondary" labelPrimary="primary" />
    );
    const MediaTextElement = getByTestId('zep-mediaText-simple');
    expect(MediaTextElement).toBeInTheDocument();
  });
});
