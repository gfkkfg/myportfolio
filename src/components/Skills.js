import React, { useEffect } from 'react';
import './Skills.css';

// Move the function above the component to avoid the warning
const getProgressPercentage = (level) => {
  switch (level) {
    case 'Expert':
      return 100;
    case 'Advanced':
      return 80;
    case 'Intermediate':
      return 60;
    default:
      return 40;
  }
};

function Skills() {
  const skills = [
    { name: 'Java', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'Problem Solving', level: 'Expert' },
    { name: 'Web Development', level: 'Intermediate' },
    // { name: 'Image Processing', level: 'Intermediate' },
    { name: 'Machine Learning', level: 'Intermediate' },
    { name: 'Android', level: 'Intermediate' },
    { name: 'IoT', level: 'Intermediate' },
    { name: 'MS Office', level: 'Intermediate' }
  ];

  useEffect(() => {
    const skillCards = document.querySelectorAll('.skill-card');
    const handleScroll = () => {
      skillCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          card.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSkillLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return '#16a34a'; // Green for Expert
      case 'Advanced':
        return '#3b82f6'; // Blue for Advanced
      case 'Intermediate':
        return '#f59e0b'; // Yellow for Intermediate
      default:
        return '#e5e7eb'; // Gray for undefined
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <div className="skill-level-container">
                <div className="progress-bar" style={{ width: `${getProgressPercentage(skill.level)}%`, backgroundColor: getSkillLevelColor(skill.level) }}></div>
                <p className="skill-level">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
