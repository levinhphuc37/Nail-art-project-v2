
import React, { useState } from 'react';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <section>
      <div className="testimonial">
        <h2>Testimonial</h2>
        <h3>What our clients say</h3>

        <div id="demo1" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo1" data-slide-to="0" className={currentSlide === 0 ? 'active' : ''}></li>
            <li data-target="#demo1" data-slide-to="1" className={currentSlide === 1 ? 'active' : ''}></li>
          </ul>

          {/* The slideshow */}
          <div className="carousel-inner">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonials">
                <div className="testimonial-item">
                  <p>
                    We provide exquisite service with some of the most talented and
                    experienced artists in the industry. My team and I compliment the face using
                    stunning hairdressing techniques, from up-do's to fishtails. Whether you're
                    attending a red carpet event or hosting a TV show, my makeup services will
                    ensure you look flawless.
                  </p>
                  <img
                    src="images/nail_art/index_page/testimonial-1.webp"
                    alt="Testimonial 1 - Pamela Adams"
                  />
                  <h4>Pamela Adams</h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonials">
                <div className="testimonial-item">
                  <p>
                    Treat yourself to one of our signature services. Our beauty experts will make
                    you look more beautiful and feel better than ever before. The royal treatment
                    for the hands of a queen. Join our membership for extra benefit. Get discount
                    monthly. Charming, bubbly, relaxing atmosphere Extraordinary nail art designs
                  </p>
                  <img
                    src="images/nail_art/index_page/testimonial-2.webp"
                    alt="Testimonial 2 - Kelley Miles"
                  />
                  <h4>Kelley Miles</h4>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#demo1" role="button" data-slide="prev" tabIndex="0" aria-label="Previous Testimonial" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#demo1" role="button" data-slide="next" tabIndex="0" aria-label="Next Testimonial" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  );
};



export default TestimonialSection;
