import React from 'react';
import './Children.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
const Childen = () => {
    return (
        <section>
<<<<<<< HEAD
            <div className="wrapper">
            <h1 style={{ color: '#911429' }}>Childen Nail-art Service</h1>
            </div>
        </section>

        {/* children about */}
        <div className="blog-wraper-one">
            <div>
            <h5 style={{ color: '#911429' }}>About Childen Nail-art Service</h5>
            <p>
                Welcome to <span><a href="index.html">CherryBlossomNail</a></span>, where creativity meets precision to
                redefine the art of nail design. At <span><a href="index.html">CherryBlossomNail</a></span>, we believe that
                every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the
                ordinary into the extraordinary, we are your premier destination for professional nail art services.
            </p>
            <h3>What is children Nail-art?</h3>
            <p>
                Children Nail Art at [Salon Name] is a specialized service designed to bring joy and excitement to the little
                ones. Our skilled nail artists are experts in creating whimsical and age-appropriate designs that cater to the
                imagination of children. From playful patterns and cute characters to glittery finishes, our Children Nail Art
                transforms little fingers into works of art.
            </p>
            <h3>Why Choose Us?</h3>
            <p>
                <b>Kid-Friendly Environment: </b>Our salon is designed with children in mind, featuring a vibrant and
                welcoming atmosphere that makes getting a manicure a delightful experience.
            </p>
            <p>
                <b>Safe and Non-Toxic Products: </b>We prioritize the health and safety of your little ones. Our nail
                products are carefully selected to be non-toxic and safe for children, ensuring a worry-free nail art
                experience.
            </p>
            <p>
                <b>Experienced Artists: </b>Our talented nail artists specialize in children's nail art. They have the
                expertise to create intricate designs that capture the imagination of young minds.
            </p>
            <div>
                <a href="appointment.html" className="banner-btn">
                <div>
                    <span>Make An Appointment</span>
                </div>
                </a>
            </div>
            </div>
            <div style={{ padding: '30px' }}>
            <img src="images/nail_art/about_us/about-us-side-pic.jpg" alt="img" />
            </div>
        </div>

        {/* children nail-art showcase */}
        <section>
                <div className="gellary-head">
                <h5>Our Children Nail-art Categories</h5>
                <h3>"Tiny Hands, Big Dreams: Nails as Unique as Your Imagination!"</h3>
                </div>
            <div className="gellary-grid-wrapper">
            <div className="container">
                <div className="row">
                <div className="column">
                    <a href="images/service/gellary-1.jpg" title="image" className="img-link">
                    <img src="images/service/gellary-1.jpg" alt="img" />
                    </a>
                    <a href="images/service/gellary-4.jpg" title="image-4" className="img-link">
                    <img src="images/service/gellary-4.jpg" alt="img" />
                    </a>
                </div>
                <div className="column">
                    <a href="images/service/gellary-2.jpg" title="image-2" className="img-link">
                    <img src="images/service/gellary-2.jpg" alt="img" />
                    </a>
                    <a href="images/service/gellary-5.jpg" title="image-5" className="img-link">
                    <img src="images/service/gellary-5.jpg" alt="img" className="last-img" />
                    </a>
                </div>
                <div className="column">
                    <a href="images/service/gellary-3.jpg" title="image-3" className="img-link">
                    <img src="images/service/gellary-3.jpg" alt="img" />
                    </a>
                    <a href="images/service/gellary-6.jpg" title="image-6" className="img-link">
                    <img src="images/service/gellary-6.jpg" alt="img" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* children nail-art service */}
        <section>
            <div className="service-about">
            <div className="service-content">
                <h2>Our Childen Nail-Art Services</h2>
                <h3>What We Offer</h3>
            </div>
            </div>
            <div className="services">
            <div className="service">
                <img src="images/service/service-two.jpg" alt="Service 2" />
                <Link to="/acrylic">
                    <div className="service-button">
                        <button>Acrylic Nail-Art</button>
=======
            <Header />
            <body>
                {/* children banner */}
                <section>
                    <div className="wrapper">
                        <h1 style={{ color: '#911429' }}>Childen Nail-art Service</h1>
>>>>>>> master
                    </div>
                </section>

                {/* children about */}
                <div className="blog-wraper-one">
                    <div>
                        <h5 style={{ color: '#911429' }}>About Childen Nail-art Service</h5>
                        <p>Welcome to <span><Link to="/home">CherryBlossomNail</Link></span>, where creativity meets precision to redefine the art of nail design. At <span><a href="index.html">CherryBlossomNail</a></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>
                        <h3>What is children Nail-art?</h3>
                        <p>
                            Children Nail Art at [Salon Name] is a specialized service designed to bring joy and excitement to the little
                            ones. Our skilled nail artists are experts in creating whimsical and age-appropriate designs that cater to the
                            imagination of children. From playful patterns and cute characters to glittery finishes, our Children Nail Art
                            transforms little fingers into works of art.
                        </p>
                        <h3>Why Choose Us?</h3>
                        <p>
                            <b>Kid-Friendly Environment: </b>Our salon is designed with children in mind, featuring a vibrant and
                            welcoming atmosphere that makes getting a manicure a delightful experience.
                        </p>
                        <p>
                            <b>Safe and Non-Toxic Products: </b>We prioritize the health and safety of your little ones. Our nail
                            products are carefully selected to be non-toxic and safe for children, ensuring a worry-free nail art
                            experience.
                        </p>
                        <p>
                            <b>Experienced Artists: </b>Our talented nail artists specialize in children's nail art. They have the
                            expertise to create intricate designs that capture the imagination of young minds.
                        </p>
                        <div>
                            <Link to="/appointment" className="banner-btn">
                                <div><span>Make An Appointment</span></div>
                            </Link>
                        </div>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <img src="images/nail_art/about_us/about-us-side-pic.jpg" alt="img" />
                    </div>
                </div>

                {/* children nail-art showcase */}
                <section>
                    <div className="gellary-head">
                        <h5>Our Children Nail-art Categories</h5>
                        <h3>"Tiny Hands, Big Dreams: Nails as Unique as Your Imagination!"</h3>
                    </div>
                    <div className="gellary-grid-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="column">
                                    <a href="images/service/gellary-1.jpg" title="image" className="img-link">
                                        <img src="images/service/gellary-1.jpg" alt="img" />
                                    </a>
                                    <a href="images/service/gellary-4.jpg" title="image-4" className="img-link">
                                        <img src="images/service/gellary-4.jpg" alt="img" />
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="images/service/gellary-2.jpg" title="image-2" className="img-link">
                                        <img src="images/service/gellary-2.jpg" alt="img" />
                                    </a>
                                    <a href="images/service/gellary-5.jpg" title="image-5" className="img-link">
                                        <img src="images/service/gellary-5.jpg" alt="img" className="last-img" />
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="images/service/gellary-3.jpg" title="image-3" className="img-link">
                                        <img src="images/service/gellary-3.jpg" alt="img" />
                                    </a>
                                    <a href="images/service/gellary-6.jpg" title="image-6" className="img-link">
                                        <img src="images/service/gellary-6.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* children nail-art service */}
                <section>
                    <div>
                        <div className="children-service-title">
                            <h2>Our Childen Nail-Art Services</h2>
                            <h3>What We Offer</h3>
                        </div>
                    </div>
                    <div className="services">
                        <div className="service">
                            <img src="images/service/service-two.jpg" alt="Service 2" />
                            <Link to="/acrylic">
                                <div className="service-button">
                                    <button>Acrylic Nail-Art</button>
                                </div>
                            </Link>
                        </div>
                        <div className="service">
                            <img src="images/service/service-three.jpg" alt="Service 3" />
                            <Link to="/geometric">
                                <div className="service-button">
                                    <button>Geomatric Nail-Art</button>
                                </div>
                            </Link>
                        </div>
                        <div className="service">
                            <img src="images/service/service-four.jpg" alt="Service 4" />
                            <Link to="/polish">
                                <div className="service-button">
                                    <button>Polishing Nail-Art</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* children feedback title */}
                <section>
                    <div className="children-service-title">
                        <h2>Our customer Feedback</h2>
                    </div>
                </section>

                {/* children feedback comment */}
                <section>
                    <div className="testimonial">
                        <h2>Testimonial</h2>
                        <h3>What our client's say</h3>
                        <div className="testimonials">
                            <div className="testimonial-item">
                                <p>
                                    We provide exquisite service with some of the most talented and experienced artists in the industry. My
                                    team and I compliment the face using stunning hairdressing techniques, from up-do's to fishtails. Whether
                                    you're attending a red carpet event or hosting a TV show, my makeup services will ensure you look
                                    flawless.
                                </p>
                                <img src="images/service/testimonial-1.webp" alt="Testimonial 1" />
                                <h4>Pamela Adams</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    Treat yourself to one of our signature services. Our beauty experts will make you look more beautiful and
                                    feel better than ever before. The royal treatment for the hands of a queen. Join our membership for extra
                                    benefit. Get discount monthly. Charming, bubbly, relaxing atmosphere Extraordinary nail art designs
                                </p>
                                <img src="images/service/testimonial-2.webp" alt="Testimonial 2" />
                                <h4>Kelley Miles</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* news and subscribe section */}
                <section>
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <h3>LATEST NAIL TRENDS AND DESIGNS FOR YOU</h3>
                        <form className="subscribe-form">
                            <input type="email" placeholder="Enter Your Email" />
                            <button type="submit">Subscribe Now</button>
                        </form>
                    </div>
                </section>
            </body>
            <Footer />
        </section>
    );
};

export default Childen;
