import React, { useState } from "react";
import Modal from "../Modal/index";
function PortfolioItem({ imageSrc, title, filter }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
      <div className={`col-lg-4 col-md-6 portfolio-item filter-all ${filter}`}>
        <div className="portfolio-wrap">
          <img
            width="100%"
            height="400"
            src={imageSrc}
            className="img-fluid"
            alt={title}
          />
          <div className="portfolio-links">
            <a
              href={imageSrc} 
              data-gallery="portfolioGallery"
              className="portfolio-lightbox"
              title={title}
            >
              <i className="bx bx-arrow-to-right"></i>
            </a>
            <a onClick={()=>{openModal()}} title="More Details">
              <i className="bx bx-laptop"></i>
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default PortfolioItem;
