import React from 'react';
import './Education.css';

function Education() {
  const educationDetails = [
    {
      title: 'Higher Secondary',
      institution: 'Government Boys Higher Secondary School, Vandavasi',
      percentage: '66%',
      year: '2020'
    },
    {
      title: 'Undergraduate',
      institution: 'Arignar Anna Government Arts College, Cheyyar',
      degree: 'B.Sc. Mathematics',
      percentage: '89.5%',
      year: '2020 - 2023'
    },
    {
      title: 'Postgraduate',
      institution: 'The Gandhigram Rural Institute (Deemed to be University), Dindigul',
      degree: 'MCA (Pursuing)',
      year: '2023 - 2025'
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationDetails.map((education, index) => (
            <div key={index} className="education-item">
              <h3 className="education-title">{education.title}</h3>
              <p className="education-institution">{education.institution}</p>
              {education.degree && <p className="education-degree">{education.degree}</p>}
              <p className="education-details">
                <p>{education.percentage && `Percentage: ${education.percentage}`}</p>
                <p>{education.year && `Year: ${education.year}`}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
