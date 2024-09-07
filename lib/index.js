import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./ModalComponent.css";
Modal.setAppElement("#root");

/**
 * ModalComponent - Displays a modal with fade effect
 * @param {Object} props - The props passed to the component
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Function to close the modal
 * @param {ReactNode} props.children - The content to display inside the modal
 * @returns {JSX.Element} The ModalComponent
 */
const ModalComponent = ({ isOpen, onClose, children }) => {
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setFadeClass("open"), 10);
    } else {
      setFadeClass("");
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={`modal-overlay ${fadeClass}`}
      className="modal-content"
      contentLabel="Employee Created"
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
