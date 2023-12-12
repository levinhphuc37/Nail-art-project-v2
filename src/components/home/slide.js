import React, { useState, useEffect } from 'react';
import './slide.css';
const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text:
        "We provide exquisite service with some of the most talented and experienced artists in the industry. My team and I compliment the face using stunning hairdressing techniques, from up-do's to fishtails. Whether you're attending a red carpet event or hosting a TV show, my makeup services will ensure you look flawless.",
      image: 'images/bg-slider-index3.png',
      author: 'Pamela Adams',
    },
    {
      text:
        "Treat yourself to one of our signature services. Our beauty experts will make you look more beautiful and feel better than ever before. The royal treatment for the hands of a queen. Join our membership for extra benefit. Get discount monthly. Charming, bubbly, relaxing atmosphere Extraordinary nail art designs",
      image: 'images/nail_art/index_page/testimonial-2.webp',
      author: 'Kelley Miles',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel-inner" style={{ margin: 'auto', overflow: 'hidden'}}>
      {slides.map((slide, index) => (
        <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: 'url("/images/bg-testimonial.png")', paddingBottom: '100px', paddingTop: '50px'}}>
            <div className="testimonial-item" style={{ backgroundColor: '#efcec9', textAlign: 'center'}}>
              <p style={{color: 'black'}}>{slide.text}</p>
              <img src={slide.image} alt={`Testimonial${index + 1}`} />
              <h4 style={{color: 'black'}}><b>{slide.author}</b></h4>
            </div>
          </div>
        </div>
      ))}
      <a className="carousel-control-prev" role="button" onClick={goToPrevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" role="button" onClick={goToNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
   
  );
};

export default TextSlider;
