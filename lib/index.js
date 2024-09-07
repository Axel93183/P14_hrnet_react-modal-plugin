import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

/**
 * ModalComponent - Displays a modal for confirming employee creation
 * @param {Object} props - The props passed to the component
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Function to close the modal
 * @returns {JSX.Element} The ModalComponent
 */
const ModalComponent = ({
  isOpen,
  onClose
}) => {
  return /*#__PURE__*/React.createElement(Modal, {
    isOpen: isOpen,
    onRequestClose: onClose,
    contentLabel: "Employee Created"
  }, /*#__PURE__*/React.createElement("h2", null, "Employee Created!"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose
  }, "Close"));
};
export default ModalComponent;