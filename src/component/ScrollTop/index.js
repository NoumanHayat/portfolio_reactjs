import React, { useState, useEffect } from 'react';
import './style.css'
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? '' : 'hidden'} d-flex align-items-center justify-content-center`} onClick={handleBackToTop}>
      <i className="bi bi-arrow-up-short"></i>
    </div>
  );
}

export default BackToTopButton;
