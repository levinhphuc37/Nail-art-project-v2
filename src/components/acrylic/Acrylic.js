import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Acrylic.css';
import Step from '../step';
const Acrylic = () => {
    const steps = [
        {
            stepNumber: 1,
            title: "Step 1: Prep the nails",
            description: "The first step in the acrylic application process is preparing the natural nails. This involves removing any existing nail polish, trimming and filing the nails, and pushing back the cuticles. The nails are then buffed to remove the natural shine, which allows the acrylic material to better adhere to the nails.",
            imgSrc: "/images/Acrylic/step1.png"
        },
        {
            stepNumber: 2,
            title: "Step 2: Cleanse the nail",
            description: "Cleaning the nails ensures that they are free from any natural oils, dirt, or residue. This clean surface provides a better foundation for the adhesion of the acrylic material, allowing it to bond more securely to the natural nails.",
            imgSrc: "/images/Acrylic/step2.png"
        },
        {
            stepNumber: 3,
            title: "Step 3: Remove the natural shine",
            description: "It's important to note that excessive buffing or filing can weaken the natural nails, so it should be done carefully and in moderation. Additionally, after the acrylic application and shaping, a topcoat or sealant is usually applied to restore shine and protect the acrylic nails. Proper nail preparation is a key step in the overall process, ensuring the best results for both the appearance and durability of the acrylic nail art.",
            imgSrc: "/images/Acrylic/step3.png"
        },
        {
            stepNumber: 4,
            title: "Step 4: Tapered cuticle bit",
            description: "It's important to note that using these tools requires skill and experience, as improper use can potentially damage the natural nails or cuticles. Nail technicians should be trained in the correct techniques and safety practices when using tapered cuticle bits or any other rotary tools.",
            imgSrc: "/images/Acrylic/step4.png"
        },
        {
            stepNumber: 5,
            title: "Step 5: Apply nail tip",
            description: "Applying a nail tip is a common technique in the process of creating artificial nails, especially when working with techniques like acrylic or gel extensions.",
            imgSrc: "/images/Acrylic/step5.png"
        },
    ];
    return (
        <section>
            <Header />
            <div>
                <br /><br /><br /><br /><br />
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
                            <p>Welcome to <span><a href="index.html">CherryBlossomNail</a></span>, where creativity meets precision to redefine the art of nail design. At <span><a href="index.html">CherryBlossomNail</a></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>
                            <p>Acrylic nail art refers to a form of artificial nail enhancement that involves the application of acrylic powder and liquid to the natural nails. This technique allows for the creation of durable and customizable artificial nails that can be shaped, extended, and adorned with various designs. </p>
                            <div>
                                <a href="appointment.html" className="banner-btn">
                                    <div><span>Make An Appointment</span></div>
                                </a>
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
