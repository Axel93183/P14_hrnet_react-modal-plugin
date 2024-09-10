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
 * @param {string} props.customOverlayClassName - Custom class for overlay
 * @param {string} props.customContentClassName - Custom class for modal content
 * @param {Object} props.customOverlayStyle - Custom styles for overlay (inline)
 * @param {Object} props.customContentStyle - Custom styles for modal content (inline)
 * @returns {JSX.Element} The ModalComponent
 */
const ModalComponent = ({
  isOpen,
  onClose,
  children,
  customOverlayClassName = "",
  customContentClassName = "",
  customOverlayStyle = {},
  customContentStyle = {},
}) => {
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
      overlayClassName={`modal-overlay ${fadeClass} ${customOverlayClassName}`}
      className={`modal-content ${customContentClassName}`}
      overlayStyle={{ ...customOverlayStyle }}
      style={{ content: { ...customContentStyle } }}
      contentLabel="Employee Created"
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
