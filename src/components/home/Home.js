import React,{ useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Home.css';
import { Link } from 'react-router-dom';
// import 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js';
// import 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js';
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
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Số lượng slides
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };
  
  return (
    <section>
      <Header />
      <div className="simple-slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="slide">
          <img src="images/nail_art/index_page/bg-slider-2.jpg" alt="img" />
          <div className="carousel-caption">
            <div className="banner-head">
              <h1> CHOOSE THE <span>BEST ATTITUDE</span> AND SERVICES</h1>
              <p>Change Your Nails Look With Our Talented Stylists.</p>
              <a href="appointment.html" className="banner-btn">
                <div><span>Get An Appointment</span> </div>
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src="images/bg-slider-index3.png" alt="img" />
          <div className="carousel-caption">
            <div className="banner-head">
              {/* <h1> SHINE THAT <span>BRIGHTENS</span></h1><h1> YOUR LIFE</h1>
              <p>Change Your Nails Look With Our Talented Stylists.</p>
              <a href="appointment.html" className="banner-btn">
                <div><span>Get An Appointment</span> </div>
              </a> */}
            </div>
          </div>
        </div>
        <div className="slide">
          <img src="images/bg-slider-index1.png" alt="img" />
          <div className="carousel-caption">
            {/* <div className="banner-head">
              <h1> GET YOUR NAILS <span>DONE BY A</span> SKILLED NAIL ARTIST</h1>
              <p>Change Your Nails Look With Our Talented Stylists.</p>
              <a href="appointment.html" className="banner-btn">
                <div><span>Get An Appointment</span></div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" onClick={nextSlide}></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" onClick={prevSlide} ></span>
          </a>
        
          </div>
      <div>
        {/* Index banner */}      
        {/* <div id="demo" className="carousel slide" data-ride="carousel"> */}
          {/* Indicators */}
          {/* <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul> */}

          {/* The slideshow */}
          {/* <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/nail_art/index_page/bg-slider-2.jpg" alt="img" />
              <div className="carousel-caption">
                <div className="banner-head">
                  <h1> CHOOSE THE <span>BEST ATTITUDE</span> AND SERVICES</h1>
                  <p>Change Your Nails Look With Our Talented Stylists.</p>
                  <a href="appointment.html" className="banner-btn">
                    <div><span>Get An Appointment</span> </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/nail_art/index_page/bg-slider-2.jpg" alt="img" />
              <div className="carousel-caption">
                <div className="banner-head">
                  <h1> SHINE THAT <span>BRIGHTENS</span></h1><h1> YOUR LIFE</h1>
                  <p>Change Your Nails Look With Our Talented Stylists.</p>
                  <a href="appointment.html" className="banner-btn">
                    <div><span>Get An Appointment</span> </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/nail_art/index_page/bg-slider-2.jpg" alt="img" />
              <div className="carousel-caption">
                <div className="banner-head">
                  <h1> GET YOUR NAILS <span>DONE BY A</span> SKILLED NAIL ARTIST</h1>
                  <p>Change Your Nails Look With Our Talented Stylists.</p>
                  <a href="appointment.html" className="banner-btn">
                    <div><span>Get An Appointment</span></div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* Left and right controls */}
          {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div> */}

        {/* Index readmore */}
        <section>
          <div className="readmore">
            <h2>Extraordinary Experience In Nail Care</h2>

            <h1>OUR NAIL SALON IS THE MOST POPULAR, CLEAN AND RECOMMENDED NAIL SALON</h1>

            <a href="aboutus.html" className="readmore-btn">
              <div><span>Read More</span></div>
            </a>
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
            <a href="aboutus.html" className="service-btn">Read More</a>
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
              <a href="about.html">Find Out More</a>
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
                <a href="appointment" onClick={() => test1()} value="Jordan Mikes" id="product1">
                  <div><span>Jordan Mikes</span></div>
                </a>
                <span style={{ color: '#911429' }}>Manager</span>
              </div>
            </div>
            <div className="team-member">
              <div style={{ backgroundColor: '#efcec9' }}>
                <img src="images/nail_art/about_us/Kelle.jpg" alt="Kelley Miles" />
                <a href="appointment" onClick={() => test2()} value="Kelley Miles" id="product2">
                  <div><span>Kelley Miles</span></div>
                </a>
                <span style={{ color: '#911429' }}>Director</span>
              </div>
            </div>
            <div className="team-member">
              <div style={{ backgroundColor: '#efcec9' }}>
                <img src="images/nail_art/about_us/Dan.jpg" alt="Smith Dan" />
                <a href="appointment" onClick={() => test3()} value="Smith Dan" id="product3">
                  <div><span>Smith Dan</span></div>
                </a>
                <span style={{ color: '#911429' }}>Stylist</span>
              </div>
            </div>
            <div className="team-member">
              <div style={{ backgroundColor: '#efcec9' }}>
                <img src="images/nail_art/about_us/Carolyn.jpg" alt="Carolyn Olson" />
                <a href="appointment" onClick={() => test4()} value="Carolyn Olson" id="product4">
                  <div><span>Carolyn Olson</span></div>
                </a>
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
      <div className="testimonial">
        <h2>Testimonial</h2>
        <h3>What our client's say</h3>

        <div id="demo1" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo1" data-slide-to="0" className="active"></li>
            <li data-target="#demo1" data-slide-to="1"></li>
          </ul>

          {/* The slideshow */}
          <div className="carousel-inner" style={{ margin: 'auto', width: '600px', height: '245px' }}>
            <div className="carousel-item active">
              <div className="testimonials" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="testimonial-item" style={{ backgroundColor: 'rgb(94, 94, 94)' }}>
                  <p>
                    We provide exquisite service with some of the most talented and
                    experienced artists in the industry. My team and I compliment the face using
                    stunning hairdressing techniques, from up-do's to fishtails. Whether you're
                    attending a red carpet event or hosting a TV show, my makeup services will
                    ensure you look flawless.
                  </p>
                  <img src="images/nail_art/index_page/testimonial-1.webp" alt="Testimonial1" />
                  <h4>Pamela Adams</h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="testimonial-item" style={{ backgroundColor: 'rgb(94, 94, 94)' }}>
                  <p>
                    Treat yourself to one of our signature services. Our beauty experts will make
                    you look more beautiful and feel better than ever before. The royal treatment
                    for the hands of a queen. Join our membership for extra benefit. Get discount
                    monthly. Charming, bubbly, relaxing atmosphere Extraordinary nail art designs
                  </p>
                  <img src="images/nail_art/index_page/testimonial-2.webp" alt="Testimonial2" />
                  <h4>Kelley Miles</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#demo1" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo1" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
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
      </div>
      <Footer />
      </section>

  );
}

export default Home;
