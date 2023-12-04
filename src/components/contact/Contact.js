import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
const Contact = () => {
  return (
    <section>
        <Header />
      {/* contact banner */}
      <div className="wrapper">
        <h1 style={{ color: '#911429' }}>CONTACT US</h1>
      </div>

      {/* contact content */}
      <div className="contact-wrapper">
        <div style={{ display: 'flex' }}>
          <div className="contact-box">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact-content">
              <h3>Address</h3>
              <p>121 Waldeck Street, NewYork Code: #010101</p>
            </div>
          </div>
          <div className="contact-box">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="contact-content">
              <h3>Phone</h3>
              <p>+ 0800-123456<br />+ 0800-123489</p>
            </div>
          </div>
          <div className="contact-box">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-content">
              <h3>Email</h3>
              <a href="mailto:nailsalon01@example.com">nailsalon01@example.com nailsalon02@example.com</a>
            </div>
          </div>
          <div className="contact-box">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faGlobeAsia} />
            </div>
            <div className="contact-content">
              <h3>Website</h3>
              <a href="mailto:www.nailsalon01.com">www.nailsalon01.com www.nailsalon01.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* contact map */}
      <div className="contact-map">
        <iframe title="google-api" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.585647937771!2d105.7801116!3d21.0288108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zOCBUxKlhIFRo4bqhYyBUaOG6pWMgdGjDqnQsIE3huq1lIMSQxrDhu51uLCBN4bqtdCBExqEsIMSQxrDhu51uLCBDYXUgR2nhuqV5!5e0!3m2!1svi!2s!4v1589564469893!5m2!1svi!2s" 
          allowfullscreen="" loading="lazy"></iframe>
      </div>

      {/* contact form */}
      <div className="contact-form" style={{ marginTop: '50px' }}>
        <div className="sidebar-head" style={{ display: 'flex', alignItems: 'center' }}>
          <h6> <b>Have a Question?</b></h6>
        </div>
        <div className="form-head">
          <form>
            <div style={{ display: 'flex' }}>
              <div className="contact-input">
                <input type="text" placeholder="Name" style={{ width: '400px' }} required="" />
                <i className="fas fa-user"></i>
              </div>
              <div className="contact-input" style={{ marginLeft: '20px' }}>
                <input type="email" className="form-control" style={{ width: '400px' }} id="contactemail" placeholder="Email" required="" />
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="contact-input">
              <textarea placeholder="Your Text" style={{ width: '820px' }} required=""></textarea>
            </div>
            <div className="contact-check">
              <input type="checkbox" className="form-check-input" id="check" required="" />
              <label className="form-check-label" htmlFor="check" required="">I agree that my submitted data is being collected and stored.</label>
            </div>
            <input type="hidden" name="form_type" value="contact" />
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <button type="submit" style={{ backgroundColor: '#911439', height: '30px', width: 'auto', border: 'none' }}>
                <span style={{ color: 'white' }}>Send Message</span>
              </button>
            </div>
          </form>
          <br /><br />
        </div>
      </div><br /><br />

      {/* news section */}
      <div className="blog-wraper-five">
        <h2>Newsletter</h2>
        <h3>LATEST NAIL TRENDS AND DESIGNS FOR YOU</h3>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>
        <Footer />
    </section>
  );
};

export default Contact;
