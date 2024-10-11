import React from 'react';
import '../modal.css';

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, handleClose, title = 'Modal Title', children }) => {
  if (!show) {
    return null; // Không render Modal nếu `show` là false
  }

  // Hàm xử lý sự kiện click trên overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      handleClose(); // Chỉ đóng Modal nếu click vào lớp overlay
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h4>{title}</h4>
          <button onClick={handleClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={handleClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;