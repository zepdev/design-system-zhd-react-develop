import { render } from '@testing-library/react';
import { ContactCardPattern } from './ContactCardPattern';

describe('Contact Card Pattern', () => {
    const tabs = [{
        linkLabel: 'label',
        scrollToIdLink: 'label',
        contacts: [{
            fullName: 'Michael Pfrieger',
            image:
                'https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Beautiful-African-American-Brown-Skin-Woman-Avatar-47788434-1.png',
            role: 'Business Unit Leiter Polyolefin Plants',
            phone: '+49 7541 202 1861',
            fax: '+49 7541 202 1861',
            email: 'michaell.pfrieger@zeppelin.com',
            address: 'Zeppelin Systems GmbH Musteradresse Rödermark',
            languages: ['Deutsch', 'English'],
        }],
    }];
    const headline = 'Headline';
    const tagline = 'Tagline';
    const description = 'Description';
    it('should render contact card pattern with HeaderLong and ContactCard component', () => {
        const { getByTestId } = render(<ContactCardPattern tabs={tabs} headline={headline} tagline={tagline} description={description} />);
        const ContactCardPatternElement = getByTestId('contact-cardpattern');
        expect(ContactCardPatternElement).toBeInTheDocument();
        const HeaderLongComponentElement = getByTestId('header-long');
        expect(HeaderLongComponentElement).toBeInTheDocument();
        const ContactCardComponentElement = getByTestId('zep-contact-card');
        expect(ContactCardComponentElement).toBeInTheDocument();
    });
});
