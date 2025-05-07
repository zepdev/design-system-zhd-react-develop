import { twMerge } from 'tailwind-merge';
import { USPProps } from './usp.interface';
export const USP: React.FC<USPProps> = ({ icon, count, headline, description, className, ...props }: USPProps) => {
  return (
    <div
      className={twMerge('zep-block zep-min-w-[330px] zep-max-w-[550px]', className)}
      data-testid="zep-usp"
      {...props}
    >
      {icon && <img src={icon} alt={headline} className="zep-mb-1 zep-w-[64px] zep-h-[64px]" />}
      <span className="zep-typography-headline2XL-fluid-cqi zep-mb-0.25 zep-text-primary-default">{count}</span>
      <h4 className="zep-typography-headlineMD-fluid-cqi zep-mb-1 zep-text-typography-dark-100">{headline}</h4>
      <p className="zep-typography-bodyText zep-text-typography-dark-100">{description}</p>
    </div>
  );
};
