import React, { useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Appointment.css';
const Appointment = () => {
  useEffect(() => {
    const codeAddress = () => {
      document.getElementById('name').value = localStorage.getItem('name');
    };
    
    codeAddress();
  }, []);
  return (
    <section>
      <body>
        <Header />
        {/* banner */}
        <div className="wrapper">
          <h1 style={{ color: '#911429' }}>APPOINTMENT</h1>
        </div>

        {/* form */}
        <div className="contact-form" style={{ marginTop: '50px' }}>
          <div className="sidebar-head" style={{ alignItems: 'center', display: 'flex' }}>
            <h6>
              <b>Book An Appointment</b>
            </h6>
          </div>
          <div className="form-head">
            <form>
              <div style={{ display: 'flex' }}>
                <div className="contact-input">
                  <input type="text" placeholder="Name" style={{ width: '400px' }} required="" />
                  <i className="fas fa-user"></i>
                </div>
                <div className="contact-input" style={{ marginLeft: '20px' }}>
                  <input
                    type="email"
                    className="form-control"
                    style={{ width: '400px' }}
                    id="contactemail"
                    placeholder="Email"
                    required=""
                  />
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div className="contact-input">
                  <input type="tel" className="form-control" style={{ width: '400px' }} placeholder="Phone" />
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-input" style={{ marginLeft: '20px' }}>
                  <input
                    className="form-control"
                    id="date"
                    name="date"
                    style={{ width: '400px' }}
                    placeholder="MM/DD/YYYY"
                    type="text"
                  />
                  <span className="form-date">
                    <i className="fas fa-calendar-minus"></i>
                  </span>
                </div>
              </div>
              <div className="contact-input">
                  <select className="form-control" style={{ width: '820px', height: '50px' }} id="name">
                  <option>Jordan Mikes</option>
                  <option>Kelley Miles</option>
                  <option>Smith Dan</option>
                  <option>Carolyn Olson</option>
                  </select>
                  <i className="fas fa-user" style={{ marginRight: '20px' }}></i>
              </div>
              <div className="contact-input">
                <textarea placeholder="Your Text" style={{ width: '820px' }} required=""></textarea>
              </div>

              <div className="contact-check">
                <input type="checkbox" className="form-check-input" id="check" required="" />
                <label className="form-check-label" htmlFor="check" required="">
                  I agree that my submitted data is being collected and stored.
                </label>
              </div>

              <input type="hidden" name="form_type" value="contact" />
              <div style={{ marginTop: '25px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#911439',
                    height: '40px',
                    width: '170px',
                    border: 'none',
                  }}
                >
                  <span style={{ color: 'white' }}>Submit</span>
                </button>
              </div>
            </form>
            <br />
            <br />
          </div>
        </div>

        {/* news section */}
        <div className="blog-wraper-five" style={{ marginTop: '50px' }}>
          <h2>Newsletter</h2>
          <h3>LATEST NAIL TRENDS AND DESIGNS FOR YOU</h3>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </body>
      <Footer />
    </section>
  );
};

export default Appointment;
