import { FC } from 'react';
import { ContactCardProps } from './contact-card.interface';

const ContactCard: FC<ContactCardProps> = ({ address, email, role, fullName, fax, phone, image, languages }) => {
  const ContactSeparator = () => <div className="zep-w-full zep-h-[1px] zep-bg-greyscale-400 zep-my-1"></div>;

  return (
    <div
      data-testid="zep-contact-card"
      className="zep-p-1.5 zep-w-full zep-border-1 zep-border-solid zep-border-[#C3C3C3]"
    >
      <div className="zep-flex zep-gap-1.5 zep-pb-0.5 zep-items-center">
        {image && (
          <img
            src={image}
            alt={fullName}
            className="zep-max-w-[80px] sm:zep-max-w-[105px] zep-object-cover zep-rounded-full"
          />
        )}
        <div>
          <p className="zep-text-headlineXS-fluid-cqi zep-text-typography-dark-100">{fullName}</p>
          {role && (
            <p className="zep-typography-bodyText zep-text-typography-dark-100 zep-mb-0.5 zep-break-word">{role}</p>
          )}
          {languages?.length && (
            <div className="zep-flex zep-gap-0.5">
              {languages.map((lang) => (
                <div className="zep-px-0.25 zep-bg-greyscale-300 zep-rounded-4 zep-typography-supportText zep-text-typography-dark-70/70 zep-max-w-max">
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {phone && (
        <div>
          <ContactSeparator />
          <div className="zep-border-greyscale-400 zep-border-solid zep-flex zep-gap-2">
            <p className="zep-typography-bodyStrong zep-text-typography-dark-100 zep-max-w-[60px] zep-w-full">Mobil</p>
            <p className="zep-typography-bodyText zep-text-typography-dark-100">{phone}</p>
          </div>
        </div>
      )}
      {fax && (
        <div>
          <ContactSeparator />
          <div className="zep-border-greyscale-400 zep-border-solid zep-flex zep-gap-2">
            <p className="zep-typography-bodyStrong zep-text-typography-dark-100 zep-max-w-[60px] zep-w-full">Fax</p>
            <p className="zep-typography-bodyText zep-text-typography-dark-100">{fax}</p>
          </div>
        </div>
      )}
      {email && (
        <div>
          <ContactSeparator />
          <div className="zep-border-greyscale-400 zep-border-solid zep-flex zep-gap-2">
            <p className="zep-typography-bodyStrong zep-text-typography-dark-100 zep-max-w-[60px] zep-w-full">E-Mail</p>
            <p className="zep-typography-bodyText zep-text-typography-dark-100 zep-break-all">{email}</p>
          </div>
        </div>
      )}
      {address && (
        <div>
          <ContactSeparator />
          <div className="zep-flex zep-gap-2">
            <p className="zep-typography-bodyStrong zep-text-typography-dark-100 zep-max-w-[60px] zep-w-full">
              Adresse
            </p>
            <p className="zep-typography-bodyText zep-text-typography-dark-100 zep-break-all">{address}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export { ContactCard };
