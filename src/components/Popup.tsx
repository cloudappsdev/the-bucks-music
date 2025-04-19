import { useState, useEffect } from "react";
import "./Popup.scss";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Popup({ isOpen, onClose, title, children }: PopupProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match this with your CSS transition time

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`popup-overlay ${isOpen ? "open" : "closing"}`}
      onClick={onClose}
    >
      <div
        className={`popup-container ${isOpen ? "open" : "closing"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
}

export default Popup;
