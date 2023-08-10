// src/components/Modal.js
import React,{useEffect,useState} from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1199);

  const handleResize = () => {

    setIsMobile(window.innerWidth <= 1199);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling on the body
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling on the body
    }

    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled when the component is unmounted
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={isMobile?{    justifyContent: "center"    }:{justifyContent: "right"}}>
      <div className="modalClass" style={isMobile?{width: '80%'}:{width: '75%'}}>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
