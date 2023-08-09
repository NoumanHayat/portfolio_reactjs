import React, { useEffect, useState } from "react";
import "./nevbarStyle.css";
export default function Nevbar() {
  const [openNevBar, setOpenNevBar] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sections = ['hero', 'about','resume', 'portfolio', 'services','contact']; // Replace with your section IDs

  useEffect(() => {
    const handleScroll = () => {
      const observerOptions = {
        rootMargin: '-50% 0px -50% 0px', // Adjust the root margin as needed
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <i
        onClick={() => {
          //   alert("work");
          setOpenNevBar(!openNevBar);
        }}
        className={`bi  mobile-nav-toggle d-xl-none ${
          openNevBar ? "bi-x" : "bi-list"
        }`}
      ></i>

      <div className={` ${openNevBar ? "mobile-nav-active" : "nevBar"}`}>
        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img
                src="assets/img/size-photo.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <h1 className="text-light">
                <a href="index.html">Nouman hayat</a>
              </h1>
              <div className="social-links mt-3 text-center">
                <a
                  href="https://twitter.com/NoumanH80869450"
                  className="twitter"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
                <a
                  href="https://web.facebook.com/iinomihl"
                  className="facebook"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://web.facebook.com/nhweb.xyz"
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://web.facebook.com/nhweb.xyz"
                  className="google-plus"
                >
                  <i className="bx bxl-skype"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nouman-hayat-092171241/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li>
                  <a href="#hero" className={`nav-link scrollto ${activeSection === 'hero' ? 'active' : ''}`}>
                    <i className="bx bx-home"></i> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className={`nav-link scrollto ${activeSection === 'about' ? 'active' : ''}`}>
                    <i className="bx bx-user"></i> <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#resume" className={`nav-link scrollto ${activeSection === 'resume' ? 'active' : ''}`}>
                    <i className="bx bx-file-blank"></i> <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className={`nav-link scrollto ${activeSection === 'portfolio' ? 'active' : ''}`}>
                    <i className="bx bx-book-content"></i>{" "}
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className={`nav-link scrollto ${activeSection === 'services' ? 'active' : ''}`}>
                    <i className="bx bx-server"></i> <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className={`nav-link scrollto ${activeSection === 'contact' ? 'active' : ''}`}>
                    <i className="bx bx-envelope"></i> <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
