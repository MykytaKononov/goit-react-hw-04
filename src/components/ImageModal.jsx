import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
  },
};

export default function ImageModal({ image, isOpen, onRequestClose }) {
  if (!image) {
    return null;
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <button onClick={onRequestClose}>close</button>
        <img src={image.urls.regular} alt={image.alt_description} />
      </Modal>
    </div>
  );
}
