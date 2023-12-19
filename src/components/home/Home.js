import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Home.css';
import { Link } from 'react-router-dom';
import TextSlider from './Slide';
import Slider from './BannerSlide';

const Home = () => {
  const test1 = () => {
    localStorage.setItem('name', document.getElementById("product1").getAttribute("value"));
  }

  const test2 = () => {
    localStorage.setItem('name', document.getElementById("product2").getAttribute("value"));
  }

  const test3 = () => {
    localStorage.setItem('name', document.getElementById("product3").getAttribute("value"));
  }

  const test4 = () => {
    localStorage.setItem('name', document.getElementById("product4").getAttribute("value"));
  }
  return (
    <section>
      <Header />
      <Slider />
        {/* Index readmore */}
        <section>
          <div className="readmore">
            <h2>Extraordinary Experience In Nail Care</h2>

            <h1>OUR NAIL SALON IS THE MOST POPULAR, CLEAN AND RECOMMENDED NAIL SALON</h1>

            <Link to="/aboutus" className="readmore-btn">
              <div><span>Read More</span></div>
            </Link>
          </div>
        </section>

        {/* Service index */}
        <section>
          <div className="service-about">
            <div className="service-content">
              <h2>Our Services</h2>
              <h3>What We Offer</h3>
            </div>
            <Link to="/aboutus" className="service-btn">Read More</Link>
          </div>
          <div className="services">
            <div className="service">
              <img src="images/nail_art/index_page/service-two.jpg" alt="Service 2" />
              <Link to="/children">
                <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#efcec9' }}>
                  <span>Childen Nail-Art</span>
                </div>
              </Link>
            </div>
            <div className="service">
              <img src="images/nail_art/index_page/service-three.jpg" alt="Service 3" />
              <Link to="/adult">
                <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#efcec9' }}>
                  <span>Adult Nail-Art</span>
                </div>
              </Link>
            </div>
            <div className="service">
              <img src="images/nail_art/index_page/service-four.jpg" alt="Service 4" />
              <Link to="/product">
                <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#efcec9' }}>
                  <span>Product and Accessories</span>
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
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
              <Link to="/aboutus">Find Out More</Link>
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
              <div style={{ backgroundColor: '#efcec9' }}>
                <img src="images/nail_art/about_us/Mikes.jpg" alt="Jordan Mike" />
                <Link to="/appointment" onClick={() => test1()} value="Jordan Mikes" id="product1">
                  <div><span>Jordan Mikes</span></div>
                </Link>
                <span style={{ color: '#911429' }}>Manager</span>
              </div>
            </div>
            <div className="team-member">
              <div style={{ backgroundColor: '#efcec9' }}>
                <img src="images/nail_art/about_us/Kelle.jpg" alt="Kelley Miles" />
                <Link to="/appointment" onClick={() => test2()} value="Kelley Miles" id="product2">
                  <div><span>Kelley Miles</span></div>
                </Link>
                <span style={{ color: '#911429' }}>Director</span>
              </div>
            </div>
            <div className="team-member">
              <div style={{ backgroundColor: '#efcec9' }}>
                <img src="images/nail_art/about_us/Dan.jpg" alt="Smith Dan" />
                <Link to="/appointment" onClick={() => test3()} value="Smith Dan" id="product3">
                  <div><span>Smith Dan</span></div>
                </Link>
                <span style={{ color: '#911429' }}>Stylist</span>
              </div>
            </div>
            <div className="team-member">
              <div style={{ backgroundColor: '#efcec9' }}>
                <img src="images/nail_art/about_us/Carolyn.jpg" alt="Carolyn Olson" />
                <Link to="/appointment" onClick={() => test4()} value="Carolyn Olson" id="product4">
                  <div><span>Carolyn Olson</span></div>
                </Link>
                <span style={{ color: '#911429' }}>Stylist</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Index */}
        <section>
          <div className="gellary-head">
            <h5>Our Gallery</h5>
            <h3>AN INCREDIBLE Nail Art EXPERIENCE</h3>
          </div>
          <div className="gellary-grid-wrapper">
            <div className="container">
              <div className="row">
                <div className="column">
                  <a href="images/nail_art/index_page/gellary-1.jpg" title="image" className="img-link">
                    <img src="images/nail_art/index_page/gellary-1.jpg" alt="img" />
                  </a>
                  <a href="images/nail_art/index_page/gellary-4.jpg" title="image-4" className="img-link">
                    <img src="images/nail_art/index_page/gellary-4.jpg" alt="img" />
                  </a>
                </div>
                <div className="column">
                  <a href="images/nail_art/index_page/gellary-2.jpg" title="image-2" className="img-link">
                    <img src="images/nail_art/index_page/gellary-2.jpg" alt="img" />
                  </a>
                  <a href="images/nail_art/index_page/gellary-5.jpg" title="image-5" className="img-link">
                    <img src="images/nail_art/index_page/gellary-5.jpg" alt="img" className="last-img" />
                  </a>
                </div>
                <div className="column">
                  <a href="images/nail_art/index_page/gellary-3.jpg" title="image-3" className="img-link">
                    <img src="images/nail_art/index_page/gellary-3.jpg" alt="img" />
                  </a>
                  <a href="images/nail_art/index_page/gellary-6.jpg" title="image-6" className="img-link">
                    <img src="images/nail_art/index_page/gellary-6.jpg" alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <section>
          <div className='testimonial'>
            <h2>Testimonial</h2>
            <h3>What our client say</h3>
          </div>
          <TextSlider/>
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
      
     
      <Footer />
      </section>

  );
}

export default Home;