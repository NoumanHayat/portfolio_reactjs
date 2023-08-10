import React, { useEffect ,useState } from 'react';
import './style.css'
import HeroBackground from '../../assets/img/hero-bg.jpg'
import Typed from 'react-typed';
function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  const handleResize = () => {

    setIsMobile(window.innerWidth <= 1199);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section
      id="hero"
      // style={sectionStyle}
      style={{backgroundImage: `url(${HeroBackground})`}}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1 style={isMobile?{fontSize:40}:{}}>Nouman Hayat</h1>
        <p style={{fontSize:19}}>
          I'm{' '}
         
            <Typed
              strings={['Designer', 'Developer', 'Freelancer', 'Photographer']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          
        </p>

      </div>
    </section>
  );
}

export default HeroSection;
