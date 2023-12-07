import React from 'react';
import Step from '../step';
import './Polish.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const Polish = () => {
    const steps = [
        {
            stepNumber: 1,
            title: "Step 1: Clean nails",
            description: "Buffing your nails is a simple process that can help improve their appearance by smoothing the surface and enhancing shine.",
            imgSrc: "../images/polish/step1.png"
        },
        {
            stepNumber: 2,
            title: "Step 2: Apply base coat",
            description: "Cleaning the nails ensures that they are free from any natural oils, dirt, or residue. This clean surface provides a better foundation for the adhesion , allowing it to bond more securely to the natural nails.",
            imgSrc: "../images/polish/step2.png"
        },
        {
            stepNumber: 3,
            title: "Step 3: Apply liquid latex nail tape",
            description: "",
            imgSrc: "../images/polish/step3.png"
        },
        {
            stepNumber: 4,
            title: "Step 4: Choose paint color",
            description: "Choose desired nail polish color.",
            imgSrc: "../images/polish/step4.png"
        },
        {
            stepNumber: 5,
            title: "Step 5: Paint color",
            description: "Choose desired nail polish color.",
            imgSrc: "../images/polish/step5.png"
        },
        {
            stepNumber: 6,
            title: "Step 6: Peel liquid latex nail tape",
            description: "",
            imgSrc: "../images/polish/step6.png"
        },
        {
            stepNumber: 7,
            title: "Step 7: Apply overlay",
            description: "Use topcoat to protect paint color and increase shine. Do this carefully to avoid creating smudges.",
            imgSrc: "../images/polish/step7.png"
        },
        {
            stepNumber: 8,
            title: "Step 8: Clean off excess coating",
            description: "Dùng bông tẩy nhẹ và nước cất để lau sạch lớp phủ dư thừa và làm cho móng trở nên sáng bóng.",
            imgSrc: "../images/polish/step8.png"
        },
        {
            stepNumber: 9,
            title: "Step 9: Use nail conditioner",
            description: "Apply nail oil to keep the nail and surrounding skin soft and supple.",
            imgSrc: "../images/polish/step9.png"
        }
    ];
    return (
        <section>
            <Header />
            <div>
                <br /><br /><br /><br /><br />
                {/* Polish banner */}
                <section>
                    <div className="wrapper">
                        <h1>Polish Categories</h1>
                    </div>
                </section>
                {/* Polish about */}
                <section>
                    <div className="blog-wraper-one">
                        <div>
                            <h5 style={{ color: '#911429' }}>What is Polish art</h5>
                            <h3>AND WHY WE ARE THE BEST AT IT?</h3>
                            <p>Welcome to <span><a href="index.html">CherryBlossomNail</a></span>, where creativity meets precision to redefine the art of nail design. At <span><a href="index.html">CherryBlossomNail</a></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>
                            <p>Nail polish is a lacquer that can be applied to the human fingernail or toenails to decorate and protect the nail plates. The formula has been revised repeatedly to enhance its decorative properties, to be safer for the consumer to use, and to suppress cracking or peeling. Nail polish consists of a mix of an organic polymer and several other components that give it colors and textures.</p>
                            <div>
                                <a href="../appointment.html" className="banner-btn">
                                    <div><span>Make An Appointment</span></div>
                                </a>
                            </div>
                        </div>
                        <div style={{ padding: '30px' }}><img src="../images/staff-2.png" alt="img" /></div>
                    </div>
                </section>
                {/* Polish nailart showcase */}
                <section>
                    <div className="gellary-head">
                        <h5>Our Polish art Categories</h5>
                        <h3>"Nail the Art, Embrace the Glam: Polish Your Look, Nail Your Style!"</h3>
                    </div>
                    <div className="gellary-grid-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="column">
                                    <a href="../images/gellary-1.png" title="image" className="img-link">
                                        <img src="../images/polish/img1.png" alt="img" />
                                    </a>
                                    <a href="../images/gellary-4.png" title="image-4" className="img-link">
                                        <img src="../images/polish/img2.png" alt="img" />
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="../images/gellary-2.png" title="image-2" className="img-link">
                                        <img src="../images/polish/img3.png" alt="img" />
                                    </a>
                                    <a href="../images/gellary-5.png" title="image-5" className="img-link">
                                        <img src="../images/polish/img4.png" alt="img" className="last-img" />
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="../images/gellary-3.png" title="image-3" className="img-link">
                                        <img src="../images/polish/img5.png" alt="img" />
                                    </a>
                                    <a href="../images/gellary-6.png" title="image-6" className="img-link">
                                        <img src="../images/polish/img6.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Polish nail-art step by step banner */}
                <div className="geomatric-step-title">
                    <h2>Polish art process</h2>
                    <p>A brief showcase of our professional nail artist on Polish art</p>
                </div>
                {/* Polish nail-art process step by step */}
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

export default Polish;
