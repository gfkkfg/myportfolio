import React from 'react';
import './Certificates.css';

function Certificates() {
  const certificates = [
    {
      title: 'The Joy of Computing Using Python',
      institution: 'SWAYAM NPTEL',
      score: '75%',
      link: '/certificates/The_Joy_of_Computing_using_Python.pdf', 
    },
    {
      title: 'Data Structures and Algorithms in Java',
      institution: 'SWAYAM NPTEL',
      score: '66%',
      link: '/certificates/Data_Structure_and_Algorithms_using_Java.pdf', 
    },
    {
      title: 'Data Science Webinar',
      institution: 'SLA',
      description: 'Three-day webinar on Data Science.',
      link: '/certificates/data-science-webinar.pdf', 
    },
    {
      title: 'Typewriting Senior Level Certification (English & Tamil)',
      institution: 'Private Institution',
      link: '/certificates/typewriting-certification.pdf', 
    },
    {
      title: 'Salesforce Workshop',
      institution: 'Salesforce CRM Consultant',
      date: '15th and 16th July 2024',
      link: '/certificates/salesforce-workshop.pdf', 
    },
  ];  

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-list">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-card">
              <h3 className="certificate-title">{certificate.title}</h3>
              <p className="certificate-details">
                {certificate.institution} 
                {certificate.score && ` | Score: ${certificate.score}`} 
                {certificate.date && ` | Date: ${certificate.date}`}
              </p>
              <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
