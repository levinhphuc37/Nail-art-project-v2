import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Flower.css';
import Step from '../step';
const Flower = () => {
    const steps = [
        {
            stepNumber: 1,
            title: "Step 1: Cover with base coat cure in lamp",
            description: "Apply a base coat: Paint a layer of base coat to create a smooth surface for your flower nail art.",
            imgSrc: "../images/flower/step1.png"
        },
        {
            stepNumber: 2,
            title: "Step 2: Choose nail polish colors",
            description: "Select nail polish colors for your flower design. Pastel colors are often popular for floral nail art.",
            imgSrc: "../images/flower/step2.png"
        },
        {
            stepNumber: 3,
            title: "Step 3: Basic flower shapes",
            description: "Draw basic flowers: Use a small, precise brush to paint flower shapes or grassy leaves.",
            imgSrc: "../images/flower/step3.png"
        },
        {
            stepNumber: 4,
            title: "Step 4: Add details",
            description: "Add details: Use an even smaller brush to add intricate details to your design, such as flower petals, lines, or small dots to make the flowers more vibrant.",
            imgSrc: "../images/flower/step4.png"
        },
        {
            stepNumber: 5,
            title: "Step 5: Top coat",
            description: "Apply a top coat: Once the nail art is dry, apply a top coat to protect and prolong the durability of your design.",
            imgSrc: "../images/flower/step5.png"
        },
        {
            stepNumber: 6,
            title: "Step 6: Final touches",
            description: "Check and perfect: Examine your work closely to ensure all details are perfect. If needed, add extra details or make corrections.",
            imgSrc: "../images/flower/step6.png"
        },
        {
            stepNumber: 7,
            title: "Step 7: Nail care",
            description: "Nail care: Finally, use nail oil or a moisturizing cream to keep your nails healthy and beautiful after completing your flower nail art.",
            imgSrc: "../images/crystal/step2.png"
        }
    ];
    return (
        <section>
            <Header />
            <div>
                <br /><br /><br /><br /><br />
                {/* Flower banner */}
                <section>
                    <div className="wrapper">
                        <h1>Flower Categories</h1>
                    </div>
                </section>
                {/* Flower about */}
                <section>
                    <div className="blog-wraper-one">
                        <div>
                            <h5 style={{ color: '#911429' }}>What is Flower art</h5>
                            <h3>AND WHY WE ARE THE BEST AT IT?</h3>
                            <p>Welcome to <span><a href="index.html">CherryBlossomNail</a></span>, where creativity meets precision to redefine the art of nail design. At <span><a href="index.html">CherryBlossomNail</a></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>
                            <p>
                                Flower nail art is a creative and expressive form of nail decoration that involves painting intricate floral designs on the nails. This popular nail art style allows individuals to showcase their artistic flair and add a touch of nature and beauty to their fingertips. Whether done at home or by a professional nail artist, flower nail art offers a wide range of possibilities for customization and personalization.</p>
                            <div>
                                <a href="appointment.html" className="banner-btn">
                                    <div><span>Make An Appointment</span></div>
                                </a>
                            </div>
                        </div>
                        <div style={{ padding: '30px' }}><img src="../images/staff-2.png" alt="img" /></div>
                    </div>
                </section>
                {/* Flower nailart showcase */}
                <section>
                    <div className="gellary-head">
                        <h5>Our Flower art Categories</h5>
                        <h3>"Nail the Art, Embrace the Glam: "Flower Nail: Blooming Beauty at Your Fingertips!"</h3>
                    </div>
                    <div className="gellary-grid-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="column">
                                    <a href="../images/gellary-1.png" title="image" className="img-link">
                                        <img src="../images/flower/img2.png" alt="img" />
                                    </a>
                                    <a href="../images/gellary-4.png" title="image-4" className="img-link">
                                        <img src="../images/flower/img1.png" alt="img" />
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="../images/gellary-2.png" title="image-2" className="img-link">
                                        <img src="../images/flower/img3.png" alt="img" />
                                    </a>
                                    <a href="../images/gellary-5.png" title="image-5" className="img-link">
                                        <img src="../images/flower/img4.png" alt="img" className="last-img" />
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="../images/gellary-3.png" title="image-3" className="img-link">
                                        <img src="../images/flower/img5.png" alt="img" />
                                    </a>
                                    <a href="../images/gellary-6.png" title="image-6" className="img-link">
                                        <img src="../images/flower/img6.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Flower nail-art step by step banner */}
                <div className="geomatric-step-title">
                    <h2>Flower art process</h2>
                    <p>A brief showcase of our professional nail artist on Flower art</p>
                </div>
                {/* Flower nail-art process step by step */}
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

export default Flower;
