import CloseImage from "../../assets/img/close.png";
import "./Modal.css";

const Modal = ({ title, children, closeModal }) => {
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <button className="modal-close-btn" onClick={closeModal}>
            <img src={CloseImage} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
