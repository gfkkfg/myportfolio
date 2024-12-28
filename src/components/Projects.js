import React, { useState } from 'react';
import './Projects.css';
import Modal from './Modal'; // Import the modal component

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all'); // Adding state for filter

  const projects = [
    {
      title: 'Sweet Shop Management System',
      description:
        'Developed using Java Swing with MS Access database. This application manages inventory, billing, and customer orders efficiently.',
      technologies: ['Java', 'MS Access'],
      images: [
        { src: '/SSMS/actdetails.png', title: 'Account Details' },
        { src: '/SSMS/acttable.png', title: 'Account Table in MS Access' },
        { src: '/SSMS/addtocartmsg.png', title: 'Add to Cart Message' },
        { src: '/SSMS/admin.png', title: 'Admin' },
        { src: '/SSMS/adminitems.png', title: 'Admin Items' },
        { src: '/SSMS/bladdu.png', title: 'Boondhi Laddu' },
        { src: '/SSMS/card.png', title: 'Card' },
        { src: '/SSMS/cart.png', title: 'Cart' },
        { src: '/SSMS/cashewswt.png', title: 'Cashew Sweet' },
        { src: '/SSMS/drfswt.png', title: 'Dry Fruit Sweet' },
        { src: '/SSMS/findtotal.png', title: 'Find Total' },
        { src: '/SSMS/gheeswt.png', title: 'Ghee Sweet' },
        { src: '/SSMS/karupattiswt.png', title: 'Karupatti Sweet' },
        { src: '/SSMS/login.png', title: 'Login' },
        { src: '/SSMS/loginmsg.png', title: 'Login Message' },
        { src: '/SSMS/milkswt.png', title: 'Milk Sweet' },
        { src: '/SSMS/netbanking.png', title: 'Net Banking' },
        { src: '/SSMS/payment.png', title: 'Payment' },
        { src: '/SSMS/paymentmsg.png', title: 'Payment Message' },
        { src: '/SSMS/paymentsuccessmessage.png', title: 'Payment Success Message' },
        { src: '/SSMS/signup.png', title: 'Signup' },
        { src: '/SSMS/signupmsg.png', title: 'Signup Message' },
        { src: '/SSMS/totaltable.png', title: 'Total Table' },
        { src: '/SSMS/upi.png', title: 'UPI' },
        { src: '/SSMS/userlgn.png', title: 'User Login' },
      ]
    },
    {
      title: 'Paddy Leaf Disease Finder',
      description:
        'An Android app that uses machine learning to identify diseases in paddy leaves, improving agricultural productivity.',
      technologies: ['Android', 'Machine Learning'],
      images: [
        { src: '/PLDF/1.png', title: 'Login' },
        { src: '/PLDF/2.png', title: 'Sign up' },
        { src: '/PLDF/3.png', title: 'Home' },
        { src: '/PLDF/4.png', title: 'Settings' },
        { src: '/PLDF/5.png', title: 'APP Info' },
        { src: '/PLDF/6.png', title: 'History' },
        { src: '/PLDF/7.png', title: 'Additional Details' },
        { src: '/PLDF/8.png', title: 'Additional Details (Hindi)' },
        { src: '/PLDF/9.png', title: 'Share PDF' },
        { src: '/PLDF/10.png', title: 'Home (Tamil)' },
        { src: '/PLDF/11.png', title: 'Additional Details (Tamil)' },
        { src: '/PLDF/12.png', title: 'Disease Detection' },
        { src: '/PLDF/13.png', title: 'Disease Detection (Tamil)' },
        { src: '/PLDF/14.png', title: 'History (Tamil)' },
        { src: '/PLDF/15.png', title: 'Home (Tamil)' },
        { src: '/PLDF/16.png', title: 'Disease Detection (Hindi)' },
      ]
    },
    {
      title: 'Society Labor Management App',
      description:
        'An Android app that connects unemployed laborers to customers directly under a society management system.',
      technologies: ['Android', 'User Management'],
      images: [
        { src: '/images/society-labor.jpg', title: 'Labor Management System' }
      ]
    },
    {
      title: 'Sustainable Fertilizer Usage Optimizer',
      description:
        'An IoT-based solution using machine learning to optimize fertilizer usage. Includes an Android app for end-users.',
      technologies: ['IoT', 'Machine Learning', 'Android'],
      images: [
        { src: '/images/fertilizer-optimizer.jpg', title: 'Fertilizer Optimization' }
      ]
    },
  ];

  // Filter projects based on selected filter
  const filteredProjects = filter === 'all' ? projects : projects.filter((project) =>
    project.technologies.includes(filter)
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="filters">
          <button className="filter-btn" onClick={() => setFilter('all')}>All</button>
          <button className="filter-btn" onClick={() => setFilter('Java')}>Java</button>
          <button className="filter-btn" onClick={() => setFilter('Android')}>Android</button>
          <button className="filter-btn" onClick={() => setFilter('Machine Learning')}>Machine Learning</button>
          <button className="filter-btn" onClick={() => setFilter('IoT')}>IoT</button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => openModal(project)}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} project={selectedProject} />}
    </section>
  );
}

export default Projects;
