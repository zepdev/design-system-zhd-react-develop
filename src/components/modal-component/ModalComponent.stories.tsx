import { Meta, StoryFn } from '@storybook/react';
import { Button } from '@zepdev/design-system-component-library-react';
import { useState } from 'react';
import { ModalComponent } from './ModalComponent';
import { ModalProps } from './modal-component.interface';

const meta: Meta<typeof ModalComponent> = {
  title: 'Components/ModalComponent',
  component: ModalComponent,
  tags: ['autodocs'],
};
export default meta;

const Template: StoryFn<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (args.onClose) args.onClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <ModalComponent isOpen={open} label='Close' onClose={handleClose}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ModalComponent>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  onClose: () => {},
};
