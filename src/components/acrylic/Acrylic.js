import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Acrylic.css';
import Step from '../step';
import stepsData from './data.json';
import { Link } from 'react-router-dom';
const Acrylic = () => {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        setSteps(stepsData);
    }, []);
    return (
        <section>
            <Header />
            <div>
                {/* Acrylic banner */}
                <section>
                    <div className="wrapper">
                        <h1 style={{ color: '#911429' }}>Acrylic Categories</h1>
                    </div>
                </section>
                {/* Acrylic about */}
                <section>
                    <div className="blog-wraper-one">
                        <div>
                            <h5 style={{ color: '#911429' }}>What is Acrylic art</h5>
                            <h3>AND WHY WE ARE THE BEST AT IT?</h3>
                            <p>Welcome to <span><Link to="/home">CherryBlossomNail</Link></span>, where creativity meets precision to redefine the art of nail design. At <span><Link to="/home">CherryBlossomNail</Link></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>
                            <p>Acrylic nail art refers to a form of artificial nail enhancement that involves the application of acrylic powder and liquid to the natural nails. This technique allows for the creation of durable and customizable artificial nails that can be shaped, extended, and adorned with various designs. </p>
                            <div>
                                <Link to="/appointment" className="banner-btn">
                                    <div><span>Make An Appointment</span></div>
                                </Link>
                            </div>
                        </div>
                        <div style={{ padding: '30px' }}><img src="/images/Acrylic/bn1.jpg" alt="img" /></div>
                    </div>
                </section>
                {/* Acrylic nailart showcase */}
                <section>
                    <div className="gellary-head">
                        <h5>Our Acrylic art Categories</h5>
                        <h3>"Nail the Art, Embrace the Glam: Acrylic Elegance in Every Brushstroke!"</h3>
                    </div>
                    <div className="gellary-grid-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="column">
                                    <a href="/images/gellary-1.png" title="image" className="img-link">
                                        <img src="/images/Acrylic/gellary-1.jpg" alt="img" />
                                    </a>
                                    <a href="/images/gellary-4.png" title="image-4" className="img-link">
                                        <img src="/images/Acrylic/gellary-4.png" alt="img" />
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="/images/gellary-2.png" title="image-2" className="img-link">
                                        <img src="/images/Acrylic/gellary-2.jpeg" alt="img" />
                                    </a>
                                    <a href="/images/gellary-5.png" title="image-5" className="img-link">
                                        <img src="/images/Acrylic/gellary-2.jpg" alt="img" className="last-img" />
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="/images/gellary-3.png" title="image-3" className="img-link">
                                        <img src="/images/Acrylic/gellary-3.jpg" alt="img" />
                                    </a>
                                    <a href="/images/gellary-6.png" title="image-6" className="img-link">
                                        <img src="/images/Acrylic/gellary-6.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Acrylic nail-art step by step banner */}
                <div className="acrylic-step-title">
                    <h2>Acrylic art process</h2>
                    <p>A brief showcase of our professional nail artist on Acrylic art</p>
                </div>
                {/* Acrylic nail-art process step by step */}
                <section>
                    <div className="container">
                        {steps.map((step) => (
                            <Step
                                stepNumber={step.stepNumber}
                                title={step.title}
                                description={step.description}
                                imgSrc={step.imgSrc}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </section>
    );
}

export default Acrylic;
