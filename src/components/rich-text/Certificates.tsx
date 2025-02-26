import { FC } from 'react';
import { CertificatesProps } from './RichText.interface';

export const Certificates: FC<CertificatesProps> = ({ certificateImages, title }) => {
  return (
    <div className="zep-flex zep-w-full zep-flex-col zep-gap-1.5">
      <h4 className="zep-text-typography-dark-100 zep-typography-headlineSM-fluid-cqi">{title}</h4>
      <div className="zep-flex zep-flex-wrap zep-gap-1">
        {certificateImages.map(({ src, alt }) => (
          <img className="zep-w-[120px] zep-h-[68px] zep-object-cover" src={src} alt={alt} />
        ))}
      </div>
    </div>
  )
}
