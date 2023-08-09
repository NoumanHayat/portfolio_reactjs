import React, { useState } from "react";

function PortfolioItem({ imageSrc, title, filter }) {
  return (
    <>
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
            <a onClick={()=>{alert("Ok")}} title="More Details">
              <i className="bx bx-laptop"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
