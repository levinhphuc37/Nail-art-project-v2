import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Step from '../step';
import './Crystal.css';
const Crystal = () => {
    const steps = [
        {
            stepNumber: 1,
            title: "Step 1: Base coat",
            description: "Buffing your nails is a simple process that can help improve their appearance by smoothing the surface and enhancing shine.",
            imgSrc: "../images/crystal/step1.png"
        },
        {
            stepNumber: 2,
            title: "Step 2: Base colour",
            description: "Cleaning the nails ensures that they are free from any natural oils, dirt, or residue. This clean surface provides a better foundation for the adhesion , allowing it to bond more securely to the natural nails.",
            imgSrc: "../images/crystal/step3.png"
        },
        {
            stepNumber: 3,
            title: "Step 3: First layer",
            description: "\"Priming\" the nails prepares them for nail polish or other nail enhancements.",
            imgSrc: "../images/crystal/step5.png"
        },
        {
            stepNumber: 4,
            title: "Step 4: Second layer",
            description: "Base coat application and maintenance are intended to protect your natural nails.",
            imgSrc: "../images/crystal/step7.png"
        },
        {
            stepNumber: 5,
            title: "Step 5: Glitter",
            description: "This is the step to evenly distribute the shapes on the nail.",
            imgSrc: "../images/crystal/step9.png"
        },

        {
            stepNumber: 6,
            title: "Step 6: Foil",
            description: "\"Lamp cure\" is the process of using UV or LED lamps to cure (harden or set) gel nail polish and improve gel nails.",
            imgSrc: "../images/crystal/step11.png"
        },
        {
            stepNumber: 7,
            title: "Step 7: Top coat",
            description: "In the context of gel nail polish or gel nail enhancements, a \"sticky layer\" often refers to the residual tacky or sticky residue that remains on the nails after curing the final layer (usually the top coat) under a UV or LED lamp. This sticky layer is also known as the \"inhibition layer\" or \"uncured layer.",
            imgSrc: "../images/crystal/step12.png"
        },
        {
            stepNumber: 8,
            title: "Step 8: Cure",
            description: "Always work with caution and patience to avoid over-filing or damaging the artificial nails. If you're unsure or uncomfortable doing this yourself, consider seeking the assistance of a professional nail technician who can address the issue effectively.",
            imgSrc: "../images/crystal/step13.png"
        },
        {
            stepNumber: 9,
            title: "Step 9: Finished",
            description: "Dehydrator is a solution used in the nail care and nail enhancement process to remove excess oils and moisture from the natural nails. It helps improve adhesion when applying artificial materials like acrylic or gel.",
            imgSrc: "../images/crystal/step14.png"
        }

    ];
    return (
        <section>
            <Header />
        <div>
            <br /><br /><br /><br /><br />
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
