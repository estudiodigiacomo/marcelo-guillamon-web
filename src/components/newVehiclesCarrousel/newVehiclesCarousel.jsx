import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './newVehiclesCarrousel.scss';

const NewVehiclesCarousel = () => {
  const images = [
    'https://storage.googleapis.com/guillamon-img/RT_V_c41962031074483799cc0ef149b4fe0c.jpg',
    'https://storage.googleapis.com/guillamon-img/1709242271605.jpg',
    'https://storage.googleapis.com/guillamon-img/raptor.png',
  ];

  return (
    <>
      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <img src={img} className="d-block w-100 carousel-image" alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='content-button-okm'>
      <button className="contact-button-okm">
      Consultanos
      </button>
    </div>
    </>
  );
};

export default NewVehiclesCarousel;
