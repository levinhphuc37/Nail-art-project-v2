import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TextSlider from '../home/Slide';
const About = () => {
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
        <body className="container-body">
        <div className="wrapper">
            <h1 style={{ color: '#911429' }}>About-Us</h1>
        </div>
        <div className="blog-wraper-one">
            <div>
            <h5 style={{ color: '#911429' }}>About US</h5>
            <h3>WHY WE ARE THE BEST?</h3>
            <p>
                Welcome to{' '}
                <span>
                <Link to="/">CherryBlossomNail</Link>
                </span>
                , where creativity meets precision to redefine the art of nail design. At{' '}
                <span>
                <Link to="/">CherryBlossomNail</Link>
                </span>
                , we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for
                transforming the ordinary into the extraordinary, we are your premier destination for professional nail art
                services.
            </p>

            <p>
                <b>Our team:</b>
                <br /> At the heart of our establishment is a team of highly skilled and dedicated nail artists who bring a
                wealth of experience and artistic flair to every session. Trained in the latest techniques and trends, our
                team is committed to delivering not just beautiful nails, but an experience that leaves you feeling pampered
                and confident.
            </p>
            <p>
                <b>Services:</b>
                <br />
                <span>
                <Link to="/">CherryBlossomNail</Link>
                </span>{' '}
                offers a comprehensive range of nail art services, from classic designs to avant-garde creations. Whether
                you're looking for a timeless and elegant look or something bold and trendy, our artists are here to bring
                your vision to life. We specialize in nail extensions, intricate hand-painted designs, 3D nail art, and much
                more. Our services cater to various occasions, from everyday glamour to special events like weddings and
                parties.
            </p>
            <p>
                <b>Client Satisfaction:</b>
                <br /> Our commitment to client satisfaction is unwavering. We take the time to understand your preferences,
                lifestyle, and the occasion for which you seek our services. This personalized approach allows us to tailor
                our designs to suit your individual style, ensuring that you leave our studio not just satisfied but
                absolutely delighted with your nails.
            </p>
            <p>
                Join us at{' '}
                <span>
                <Link to="/">CherryBlossomNail</Link>
                </span>
                , where nails become a canvas, and art becomes a statement.
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
        <div className="blog-wraper-two">
            <h4 style={{ color: '#911429' }}>Extraordinary Experience In Nail Care</h4>
            <h2>OUR NAIL SALON IS THE MOST POPULAR, CLEAN</h2>
            <h2>AND RECOMMENDED NAIL SALON</h2>
            <iframe 
            title="About Us Video" 
            style={{width: '800px', height: '550px', border: 'none'}} 
            src="https://www.youtube.com/embed/JMJ4yrchiZ4">
            </iframe>
        </div>
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
        <div className="blog-wraper-four">
            <h2>Testimonial</h2>
            <h3>What our client's say</h3>
        </div>
        <TextSlider/>
        <div className="blog-wraper-five">
            <h2>Newsletter</h2>
            <h3>LATEST NAIL TRENDS AND DESIGNS FOR YOU</h3>
            <form className="subscribe-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit" style={{backgroundColor:'#911439', cursor: 'pointer'}}>Subscribe Now</button>
            </form>
        </div>
        </body>
        <Footer />
    </section>
  );
};

export default About;
