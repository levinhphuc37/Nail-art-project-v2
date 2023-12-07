import React, {useState, useEffect} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Step from '../step';
import './Crystal.css';
import stepsData from './data.json';
const Crystal = () => {
    const [steps, setSteps] = useState([]);
    useEffect(() => {
        setSteps(stepsData);
    }, []);
    return (
        <section>
            <Header />
        <div>
            {/* Crystal banner */}
            <section>
                <div className="wrapper">
                    <h1>Crystal Categories</h1>
                </div>
            </section>
            {/* Crystal about */}
            <section>
                <div className="blog-wraper-one">
                    <div>
                        <h5 style={{ color: '#911429' }}>What is Crystal art</h5>
                        <h3>AND WHY WE ARE THE BEST AT IT?</h3>
                        <p>Welcome to <span><a href="index.html">CherryBlossomNail</a></span>, where creativity meets precision to redefine the art of nail design. At <span><a href="index.html">CherryBlossomNail</a></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>
                        <p>Crystal nails are a popular nail art trend, known for using Crystal shapes such as lines, squares, triangles and curves to create artistic nail designs. This creates a modern, elegant and sometimes even sophisticated look, depending on the nail technician's creativity.</p>
                        <div>
                            <a href="appointment.html" className="banner-btn">
                                <div><span>Make An Appointment</span></div>
                            </a>
                        </div>
                    </div>
                    <div style={{ padding: '30px' }}><img src="../images/staff-2.png" alt="img" /></div>
                </div>
            </section>
            {/* Crystal nailart showcase */}
            <section>
                <div className="gellary-head">
                    <h5>Our Crystal art Categories</h5>
                    <h3>"Nail the Art, Embrace the Glam: "Sparkle Every Day with Crystal Nail Magic."</h3>
                </div>
                <div className="gellary-grid-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <a href="../images/gellary-1.png" title="image" className="img-link">
                                    <img src="../images/crystal/Untitled1.png" alt="img" />
                                </a>
                                <a href="../images/gellary-4.png" title="image-4" className="img-link">
                                    <img src="../images/crystal/Untitled2.png" alt="img" />
                                </a>
                            </div>
                            <div className="column">
                                <a href="../images/gellary-2.png" title="image-2" className="img-link">
                                    <img src="../images/crystal/Untitled3.png" alt="img" />
                                </a>
                                <a href="../images/gellary-5.png" title="image-5" className="img-link">
                                    <img src="../images/crystal/Untitled4.png" alt="img" className="last-img" />
                                </a>
                            </div>
                            <div className="column">
                                <a href="../images/gellary-3.png" title="image-3" className="img-link">
                                    <img src="../images/crystal/Untitled5.png" alt="img" />
                                </a>
                                <a href="../images/gellary-6.png" title="image-6" className="img-link">
                                    <img src="../images/crystal/Untitled6.png" alt="img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Geometric nail-art step by step banner */}
            <div className="geomatric-step-title">
                <h2>Crystal art process</h2>
                <p>A brief showcase of our professional nail artist on Crystal art</p>
            </div>
            {/* Geometric nail-art process step by step */}
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

export default Crystal;
