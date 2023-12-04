import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const Home = () => {
  return (
    <div>
        <Header />
    <body>
      {/* Index banner */}
      <section>
        <div className="banner-wrapper">
          <img src="images/nail_art/index_page/bg-slider-2.jpg" alt="img" />
          <div className="carousel-caption">
            <div className="banner-head">
              <h1>
                Choose The <span>Best Attitude</span> And Services
              </h1>
              <p>Change Your Nails Look With Our Talented Stylists.</p>
              <Link to="/appointment" className="banner-btn">
                <div>
                  <span>Get An Appointment</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Index readmore */}
      <section>
        <div className="readmore">
          <h2>Extraordinary Experience In Nail Care</h2>
          <h1>OUR NAIL SALON IS THE MOST POPULAR, CLEAN AND RECOMMENDED NAIL SALON</h1>
          <Link to="/aboutus" className="readmore-btn">
            <div>
              <span>Read More</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Service index */}
      <section>
        <div className="service-about">
          <div className="service-content">
            <h2>Our Services</h2>
            <h3>What We Offer</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page...</p>
          </div>
          <Link to="/aboutus" className="service-btn">
            Read More
          </Link>
        </div>
        <div className="services">
          <div className="service">
            <img src="images/nail_art/index_page/service-two.jpg" alt="Service 2" />
            <Link to="/children">
              <div className="service-button">
                <button>Childen Nail-Art</button>
              </div>
            </Link>
          </div>
          <div className="service">
            <img src="images/nail_art/index_page/service-three.jpg" alt="Service 3" />
            <Link to="/adult">
              <div className="service-button">
                <button>Adult Nail-Art</button>
              </div>
            </Link>
          </div>
          <div className="service">
            <img src="images/nail_art/index_page/service-four.jpg" alt="Service 4" />
            <Link to="/product">
              <div className="service-button">
                <button>Product and Accessories</button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About index */}
      <section>
        <div className="about">
          <div className="about-content">
            <h2>About US</h2>
            <h3>Why We Are The Best?</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making it look like readable English
            </p>
            <Link to="/about">
              Find Out More
            </Link>
          </div>
          <div className="about-img">
            <img src="images/nail_art/index_page/about-1.jpg" alt="About us" />
          </div>
        </div>
      </section>

      {/* Team Index */}
      <section>
        <div className="team-title">
          <h2>Our Team</h2>
          <p>Meet Our Team</p>
        </div>
        <div className="team">
          <div className="team-member">
            <img src="images/nail_art/index_page/team-1.jpg" alt="Jordan Mike" />
            <Link to="/appointment">
              <div>
                <span>Jordan Mikes</span>
              </div>
            </Link>
            <span>Manager</span>
          </div>
          <div className="team-member">
            <img src="images/nail_art/index_page/team-2.jpg" alt="Kelley Miles" />
            <Link to="/appointment">
              <div>
                <span>Kelley Miles</span>
              </div>
            </Link>
            <span>Director</span>
          </div>
          <div className="team-member">
            <img src="images/nail_art/index_page/team-3.jpg" alt="Smith Dan" />
            <Link to="/appointment">
              <div>
                <span>Smith Dan</span>
              </div>
            </Link>
            <span>Stylist</span>
          </div>
          <div className="team-member">
            <img src="images/nail_art/index_page/team-4.jpg" alt="Carolyn Olson" />
            <Link to="/appointment">
              <div>
                <span>Carolyn Olson</span>
              </div>
            </Link>
            <span>Stylist</span>
          </div>
        </div>
      </section>

      {/* Gallery Index */}
      <section>
        <div className="gellary-head">
          <h5>Our Gallery</h5>
          <h3>AN INC</h3>
        </div>
      </section>

      {/* Testimonial section */}
      <section>
        <div className="testimonial">
          <h2>Testimonial</h2>
          <h3>What our client's say</h3>
          <div className="testimonials">
            <div className="testimonial-item">
              <p>
                We provide exquisite service with some of the most talented and experienced artists in the industry.
                My team and I compliment the face using stunning hairdressing techniques, from up-do's to fishtails.
                Whether you're attending a red carpet event or hosting a TV show, my makeup services will ensure you
                look flawless.
              </p>
              <img src="images/nail_art/index_page/testimonial-1.webp" alt="Testimonial 1" />
              <h4>Pamela Adams</h4>
            </div>
            <div className="testimonial-item">
              <p>
                Treat yourself to one of our signature services. Our beauty experts will make you look more beautiful
                and feel better than ever before. The royal treatment for the hands of a queen. Join our membership for
                extra benefit. Get discount monthly. Charming, bubbly, relaxing atmosphere. Extraordinary nail art
                designs
              </p>
              <img src="images/nail_art/index_page/testimonial-2.webp" alt="Testimonial 2" />
              <h4>Kelley Miles</h4>
            </div>
          </div>
        </div>
      </section>

      {/* News section */}
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
    </div>
  );
};

export default Home;
