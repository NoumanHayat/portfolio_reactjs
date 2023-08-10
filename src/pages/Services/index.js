import React from 'react';
import './styles.css';
function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            If you are Looking for someone Who can really Work then you are at the Right
            Place The services I can provide are given below:
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className="bi bi-briefcase"></i></div>
            <h4 className="title"><a href="">Android applications</a></h4>
            <p className="description">
              We create android Applications using react Native. We provide all types and size of app from 1 screen app
              to a complete functional app.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Backend server</a></h4>
            <p className="description">
              We create a backend server for web apps and mobile applications using Node.js/Express.js and Firebase.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon"><i className="bi bi-bar-chart"></i></div>
            <h4 className="title"><a href="">Database</a></h4>
            <p className="description">
              We provide services for database management using MySQL, MsSQL, and MongoDB.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon"><i className="bi bi-binoculars"></i></div>
            <h4 className="title"><a href="">Google Map</a></h4>
            <p className="description">
              We provide services for Google Map integration using React Native.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon"><i className="bi bi-brightness-high"></i></div>
            <h4 className="title"><a href="">Artificial Intelligence</a></h4>
            <p className="description">
              We provide services for Artificial Intelligence using Tensorflow and Keras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
