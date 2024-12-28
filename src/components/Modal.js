import React, { useState } from 'react';
import './Modal.css';

function Modal({ showModal, setShowModal, project }) {
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current image index

  // Handle next image in the gallery
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous image in the gallery
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  if (!showModal) return null; // Don't render the modal if showModal is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setShowModal(false)}>
          X
        </button>
        <div className="modal-header">
          <h3>{project.title}</h3>
        </div>
        <p className="modal-description">{project.description}</p>

        <h4>Technologies:</h4>
        <ul className="tech-list">
          {project.technologies.map((tech, index) => (
            <li key={index} className="tech-item">
              {tech}
            </li>
          ))}
        </ul>

        {/* Gallery Section for Multiple Images */}
        <h4>Project Images:</h4>
        <div className="image-gallery">
          {/* Previous Image Icon (Less Than) */}
          <div className="prev-icon" onClick={prevImage}>
            &#60; {/* Less Than Symbol */}
          </div>

          {/* Image Slider */}
          <div className="image-slider">
            {/* Image Title */}
            <p className="image-title">{project.images[currentIndex].title}</p>
            <img
              src={project.images[currentIndex].src}
              alt={project.images[currentIndex].title}
              className="modal-image"
            />
          </div>

          {/* Next Image Icon (Greater Than) */}
          <div className="next-icon" onClick={nextImage}>
            &#62; {/* Greater Than Symbol */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
