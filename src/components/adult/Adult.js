import React from 'react';
import { Link } from 'react-router-dom';
import './Adult.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const Adult = () => {
  return (
    <section>
        <Header />
        <body>
        {/* adult banner */}
        <section>
            <div className="wrapper">
            <h1 style={{ color: '#911429' }}>Grown-up Nail-art Service</h1>
            </div>
        </section>

        {/* adult about */}
        <div className="blog-wraper-one">
            <div>
            <h5 style={{ color: '#911429' }}>About Grown-up Nail-art Service</h5>
            <p>
                Welcome to{' '}
                <span>
                <Link to="/">CherryBlossomNail</Link>
                </span>
                , where creativity meets precision to redefine the art of nail design. At{' '}
                <span>
                <Link to="/">CherryBlossomNail</Link>
                </span>
                , we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion
                for transforming the ordinary into the extraordinary, we are your premier destination for professional
                nail art services.
            </p>
            <h3>What is Grown-up Nail-art?</h3>
            <p>
                Grown-Up Nail Art at CherryBlossomNail is a specialized service tailored for those who appreciate the finer
                details of nail aesthetics. From classic designs to trendy and avant-garde styles, our nail artists bring a
                touch of luxury and creativity to every manicure.
            </p>
            <h3>Why Choose Us?</h3>
            <p>
                <b>Expert Nail Artists: </b>Our highly trained and experienced nail artists at CherryBlossomNail are
                skilled in the latest techniques and trends. They have an eye for detail and a passion for transforming
                nails into works of art.
            </p>
            <p>
                <b>Premium Products: </b>WWe believe in using the best products for our clients. Our premium selection of
                polishes, gels, and accessories at CherryBlossomNail ensures a flawless finish and long-lasting results.
            </p>
            <p>
                <b>Personalized Consultations: </b>Your style is unique, and so should be your nails. Our personalized
                consultations at CherryBlossomNail allow you to collaborate with our artists to create a bespoke design that
                complements your personality and preferences.
            </p>
            <div>
                <Link to="/appointment" className="banner-btn">
                <div>
                    <span>Make An Appointment</span>
                </div>
                </Link>
            </div>
            </div>
            <div style={{ padding: '30px' }}>
            <img src="images/nail_art/about_us/about-us-side-pic.jpg" alt="img" />
            </div>
        </div>

        {/* adult nail-art showcase */}
        <section>
            <div className="gellary-head">
            <h5>Our Grown-up Nail-art Categories</h5>
            <h3>"Elevate Your Elegance: Where Nails Become a Canvas of Sophistication!"</h3>
            </div>
            <div className="gellary-grid-wrapper">
            <div className="container">
                <div className="row">
                <div className="column">
                    <Link to="images/service/gellary-11.jpg" title="image" className="img-link">
                    <img src="images/service/gellary-11.jpg" alt="img" />
                    </Link>
                    <Link to="images/service/gellary-44.jpg" title="image-4" className="img-link">
                    <img src="images/service/gellary-44.jpg" alt="img" />
                    </Link>
                </div>
                <div className="column">
                    <Link to="images/service/gellary-22.jpg" title="image-2" className="img-link">
                    <img src="images/service/gellary-22.jpg" alt="img" />
                    </Link>
                    <Link to="images/service/gellary-55.jpg" title="image-5" className="img-link">
                    <img src="images/service/gellary-55.jpg" alt="img" className="last-img" />
                    </Link>
                </div>
                <div className="column">
                    <Link to="images/service/gellary-33.jpg" title="image-3" className="img-link">
                    <img src="images/service/gellary-33.jpg" alt="img" />
                    </Link>
                    <Link to="images/service/gellary-66.jpg" title="image-6" className="img-link">
                    <img src="images/service/gellary-66.jpg" alt="img" />
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* adult nail-art service */}
        <section>
            <div className="service-about">
            <div className="service-content">
                <h2>Our Grown-Up Nail-Art Services</h2>
                <h3>What We Offer</h3>
            </div>
            </div>
            <div className="services">
            <div className="service">
                <img src="images/service/service-two.jpg" alt="Service 2" />
                <Link to="catalog/crystal">
                <div className="service-button">
                    <button>Crystal Nail-Art</button>
                </div>
                </Link>
            </div>
            <div className="service">
                <img src="images/service/service-three.jpg" alt="Service 3" />
                <Link to="catalog/polish">
                <div className="service-button">
                    <button>Polish Nail-Art</button>
                </div>
                </Link>
            </div>
            <div className="service">
                <img src="images/service/service-four.jpg" alt="Service 4" />
                <Link to="catalog/flower">
                <div className="service-button">
                    <button>Flower Nail-Art</button>
                </div>
                </Link>
            </div>
            </div>
        </section>

        {/* adult feedback title */}
        <section>
            <div className="children-service-title">
            <h2>Our customer Feedback</h2>
            </div>
        </section>

        {/* adult feedback comment */}
        <section>
            <div className="testimonial">
            <h2>Testimonial</h2>
            <h3>What our client's say</h3>
            <div className="testimonials">
                <div className="testimonial-item">
                <p>
                    We provide exquisite service with some of the most talented and experienced artists in the industry. My
                    team and I compliment the face using stunning hairdressing techniques, from up-do's to fishtails.
                    Whether you're attending a red carpet event or hosting a TV show, my makeup services will ensure you
                    look flawless.
                </p>
                <img src="images/service/testimonial-1.webp" alt="Testimonial 1" />
                <h4>Pamela Adams</h4>
                </div>
                <div className="testimonial-item">
                <p>
                    Treat yourself to one of our signature services. Our beauty experts will make you look more beautiful
                    and feel better than ever before. The royal treatment for the hands of a queen. Join our membership for
                    extra benefit. Get discount monthly. Charming, bubbly, relaxing atmosphere Extraordinary nail art
                    designs
                </p>
                <img src="images/service/testimonial-2.webp" alt="Testimonial 2" />
                <h4>Kelley Miles</h4>
                </div>
            </div>
            </div>
        </section>

        {/* news and subscribe section*/}
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

export default Adult;
