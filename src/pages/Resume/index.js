import React from 'react';
import './style.css'; // Import your CSS file

function ResumeSection() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Do you really want to know about me ?</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Nouman Hayat</h4>
              <p>
                <em>
                  I am Android mobile developer with 1.5+ years of experience designing and developing beautiful fully functional applications.
                </em>
              </p>
              <ul>
                <li>Kakaywala Jhawarian Shahpur Sargodha, Punjab Pakistan</li>
                <li>+92305-6719020</li>
                <li>me@noumanhayat.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Intermediate &amp; Computer Science (ICS)</h4>
              <h5>2015 - 2017</h5>
              <p><em>Dar-e-Arqam College Sargodha</em></p>
              <p>
                I passed 12th from Dar-e-Araqam college with over 80% numbers. My main subjects were:
                <ul>
                  <li>Computer Science</li>
                  <li>Math</li>
                  <li>Statistics</li>
                </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Software Engineering</h4>
              <h5>2018 - 2022</h5>
              <p><em>COMSATS University Islamabad</em></p>
              <p>
                I graduated in Software Engineering from Comsats University Islamabad with a 2.7 GPA.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Android App Developer</h4>
              <h5>2019 - Present</h5>
              <p><em>Islamabad, Pakistan</em></p>
              <ul>
                <li>Lead in the design, development, and App development</li>
                <li>Delegate tasks to the 3 members of the developer team and provide counsel on all aspects of the project.</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Work on the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
