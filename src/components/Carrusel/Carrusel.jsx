import React, { useState, useEffect } from 'react';
import './Carrusel.css';

const Carousel = () => {
  const images = Object.values(import.meta.glob('../../assets/portada/*.{jpg,webp,png}', { eager: true })).map(
    (module) => module.default || module
  );
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="custom-carousel">
      <button className="carousel-button prev" onClick={goToPrev}>
        &#10094;
      </button>
      <div className="carousel-images">
        <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
    {images.map((image, index) => (
        <img
        key={index}
        src={image}
        alt={`portada-${index}`}
        className={index === currentIndex ? 'visible' : 'hidden'}
        />
       ))}
        </div>

      </div>
      <button className="carousel-button next" onClick={goToNext}>
        &#10095;
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;


