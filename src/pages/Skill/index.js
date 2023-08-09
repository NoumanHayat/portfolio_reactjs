import React from 'react';
import './styles.css'; // Import your CSS file

function SkillsSection() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p></p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">React Native <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                    role="progressbar"
                    style={{ width: `${80}%` }}
                    aria-valuenow={80}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Node Js <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${90}%` }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Python <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${75}%` }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">Firebase <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${80}%` }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Database Management <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${90}%` }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
