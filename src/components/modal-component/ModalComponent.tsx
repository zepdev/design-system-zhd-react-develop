// import { Link, LinkMode, LinkSize } from '@zepdev/design-system-component-library-react';
import { FC, MouseEvent } from 'react';
import { Button, ZpsButtonVariant } from '../zps-button';
import { ModalProps } from './modal-component.interface';

export const ModalComponent: FC<ModalProps> = ({ isOpen, onClose, label, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      data-testid="zep-modal-component"
      onClick={handleOverlayClick}
      className="zep-fixed zep-inset-[0] zep-w-full zep-h-full zep-z-[1500] zep-bg-darkgrey-500/40 zep-flex zep-items-center zep-justify-center"
    >
      <div className="zep-relative zep-h-auto zep-w-full sm:zep-max-w-[768px] md:zep-max-w-[819px] xl:zep-w-[960px] zep-bg-greyscale-0 zep-max-h-[90vh] zep-overflow-y-auto">
        <div className="zep-flex zep-justify-center zep-flex-col zep-px-1 zep-pt-1 zep-pb-2.5 sm:zep-px-1.5 sm:zep-pt-1.5 sm:zep-pb-2 lg:zep-p-3 xl:zep-p-4 zep-bg-greyscale-0">
          <div className="zep-flex zep-justify-end zep-mb-[4px] zep-right-[0]">
            <Button
              icon="close"
              className="zep-max-h-3 zep-max-w-3 zep-mb-0.25 zep-cursor-pointer"
              label=""
              onClick={onClose}
              title="Button title"
              variant={ZpsButtonVariant.SecondaryZps}
            />
          </div>
          <div>{children}</div>

          <span className="zep-float-right zep-mt-1">
                 <button
              className="zep-float-right zep-underline zep-cursor-pointer zep-decoration-[1px] zep-font-500 zep-text-0.875 zep-underline-offset-2 zep-mt-1"
              onClick={onClose}
            >{label as string}</button>
          </span>
        </div>
      </div>
    </div>
  );
};
