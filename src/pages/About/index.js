import React,{useState} from 'react';
import './style.css'; // Import the CSS file

function AboutSection() {
  const birthdate = new Date('1997-12-25');

  // Current date
  const currentDate = new Date();
  
  // Calculate the difference in years and months
  const years = currentDate.getFullYear() - birthdate.getFullYear();
  const months = (currentDate.getMonth() - birthdate.getMonth() + 12) % 12;
  
  
  return (
    <section id="about" className="about justify-content-center align-items-center">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            I am a UI/UX Designer and Android App Developer. I have a passion
            for developing Mobile applications and I love to create beautiful
            and functional user interfaces. I have a strong background in web
            development and I am always looking for new ways to improve my
            skills.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="../assets/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Android App Developer.</h3>
            <p className="fst-italic">Wanna know about me?</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong> <span>25 december 1997</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong><a href="https://noumanhayat.online/" target="https://noumanhayat.online/" rel="noopener noreferrer">noumanhayat.online</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+923056719020</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>islamabad, Pakistan</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Age:</strong>
                    <span>{years} years {months} months</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>Bachelor</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <span>muhammadnoumanhayat@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Joiner Mobile Developer specializing in backend and front end
              development. Experienced with all stages of the development
              cycle for mobile projects. Well-versed in numerous programming
              languages including PHP OOP, JavaScript, CSS, JAVA, Python.
              Strong background in project management and customer relations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
