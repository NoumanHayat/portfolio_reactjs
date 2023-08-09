import React from 'react';
import './styles.css'; // Import your CSS file
import PortfolioItem from '../../component/PortfolioItem/index';
import Test from '../../assets/img/hero-bg1.jpg';
function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Here are some examples of the projects I have worked on.</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter=".filter-all" className="filter-active">All</li>
              <li data-filter=".filter-AppFrontend">App Frontend</li>
              <li data-filter=".filter-Web">Web</li>
              <li data-filter=".filter-backend">Backend</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          {/* Portfolio items go here */}
          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-Web'} />
          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-AppFrontend'} />
          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-Web'} />
          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-AppFrontend'}/>
          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-backend'}/>

          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-backend'}/>
          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-Web'} />
          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-backend'}/>
          <PortfolioItem imageSrc={Test} title={'Title'} filter={'filter-AppFrontend'}/>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
