import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Slider = () => {
    const slides = [
        {
            image: 'images/bg-slider-index3.png',
            text: 'CHOOSE THE BEST ATTITUDE AND SERVICES',
        },
        {
            image: 'images/nail_art/index_page/bg-slider-2.jpg',
            text: 'SHINE THAT BRIGHTENS YOUR LIFE',
        },
        {
            image: 'images/bg-slider-index1.png',
            text: 'GET YOUR NAILS DONE BY A SKILLED NAIL ARTIST',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="simple-slider">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index} style={{ backgroundImage: `url(${slide.image})` }}>
                        <div className='content'>
                            <h2 className="slide-text">{slide.text}</h2>
                            <button className='app-button'>
                                <Link to="/appointment">Get An Appointment</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}>&lt;</button>
            <button className="next" onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}>&gt;</button>
        </div>
    );
};

export default Slider;