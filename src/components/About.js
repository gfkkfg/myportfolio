import React, { useEffect } from 'react';
import './About.css';

function About() {
  useEffect(() => {
    const titles = document.querySelectorAll('.section-title');

    const handleScroll = () => {
      titles.forEach((title) => {
        const rect = title.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          title.classList.add('in-view'); // Add 'in-view' class when the title is in view
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check for titles that might be in view on page load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={require('../assets/profile.jpg')} alt="Profile" />
          </div>
          <p className="about-text">
            Hello! I'm <strong>Thangaraj M</strong>, currently pursuing an MCA degree. I am passionate about
            software development and problem-solving, with expertise in Java, Python, web development, machine learning, and image processing.
          </p>
          <p className="about-text">
            I enjoy building creative projects, learning new technologies, and applying my skills
            to solve real-world problems. With a strong focus on quality and innovation, I aim to contribute meaningfully to every project I undertake.
          </p>
          <a href="/path/to/resume.pdf" className="about-button" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default About;
