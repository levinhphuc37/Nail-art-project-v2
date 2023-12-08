import React, {useState, useEffect} from 'react';
import Step from '../step';
import './Polish.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import stepsData from './data.json'
import { Link } from 'react-router-dom';
const Polish = () => {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        setSteps(stepsData);
    }, []);
    return (
        <section>
            <Header />
            <div>
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
                            <p>Welcome to <span><Link to="/home">CherryBlossomNail</Link></span>, where creativity meets precision to redefine the art of nail design. At <span><Link to="/home">CherryBlossomNail</Link></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>                            
                            <p>Nail polish is a lacquer that can be applied to the human fingernail or toenails to decorate and protect the nail plates. The formula has been revised repeatedly to enhance its decorative properties, to be safer for the consumer to use, and to suppress cracking or peeling. Nail polish consists of a mix of an organic polymer and several other components that give it colors and textures.</p>
                            <div>
                                <Link to="/appointment" className="banner-btn">
                                    <div><span>Make An Appointment</span></div>
                                </Link>
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
