import { fireEvent, render, screen } from '@testing-library/react';
import { ModalComponent } from './ModalComponent';

describe('ModalComponent', () => {
  const mockOnClose = jest.fn();

  const renderModal = (isOpen: boolean, onClose?: () => void) =>
    render(
      <ModalComponent isOpen={isOpen} onClose={onClose}>
        <div data-testid="modal-content">Modal Content</div>
      </ModalComponent>,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not render when isOpen is false', () => {
    renderModal(false);
    expect(screen.queryByTestId('zep-modal-component')).not.toBeInTheDocument();
  });

  test('should render when isOpen is true', () => {
    renderModal(true);
    expect(screen.getByTestId('zep-modal-component')).toBeInTheDocument();
  });

  test('should call onClose when clicking on overlay', () => {
    renderModal(true, mockOnClose);
    const overlay = screen.getByTestId('zep-modal-component');
    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
