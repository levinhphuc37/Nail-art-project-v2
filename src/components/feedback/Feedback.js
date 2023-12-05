import React from 'react';
import './Feedback.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Feedback = () => {
  return (
    <section>
        <Header />
      {/* feedback banner */}
      <div className="wrapper">
        <h1 style={{ color: '#911429' }}>FEEDBACK</h1>
      </div>

      {/* feedback form */}
      <div className="contact-form" style={{ marginTop: '50px' }}>
        <div className="sidebar-head" style={{ display: 'flex', alignItems: 'center' }}>
          <h6> <b>Feedback Form</b></h6>
        </div>
        <div className="form-head">
          <form>
            <div style={{ display: 'block' }}>
              <div className="contact-input">
                <input type="text" placeholder="Name" className="form-control" required="" />
                <FontAwesomeIcon icon={faUser} className='icon'/>
              </div>
              <div className="contact-input">
                <input type="email" className="form-control" id="contactemail" placeholder="Email" required="" />
                <FontAwesomeIcon icon={faEnvelope} className='icon'/>
              </div>
              <div className="contact-input">
                <select className="form-control">
                  <option value="0">Service you want to feedback</option>
                  <option value="1">Childen Nail-art Service</option>
                  <option value="2">Grown-up Nail-art Service</option>
                  <option value="3">Production and Accessories</option>
                </select>
                <FontAwesomeIcon icon={faAngleDown} className='icon'/>
              </div>
            </div>
            <div className="contact-input">
              <textarea placeholder="Your Text" required=""></textarea>
            </div>

            <div className="contact-check">
              <input type="checkbox" className="form-check-input" id="check" required="" />
              <label className="form-check-label" htmlFor="check" required="">I agree that my submitted data is being collected and stored.</label>
            </div>

            <input type="hidden" name="form_type" value="contact" />
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <button type="submit" style={{ backgroundColor: '#911439', height: '30px', width: 'auto', border: 'none' }}>
                <span style={{ color: 'white' }}>Submit Feedback</span>
              </button>
            </div>
          </form>
          <br /><br />
        </div>
      </div><br /><br></br>
        <Footer />
    </section>
  );
};

export default Feedback;
