import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
  <footer>
      <div className="container">
          <div className="row">
              <div className="col-3" style={{marginTop: '10px'}}>
                  <p className="company-name">Nail Art Salon</p> 
                  <p>Indulge in the artistry of self-expression at CherryBlossomNail, where your nails become Link canvas for creativity.</p>                                                                                                                        
              </div>
                          
              <div className="col-3" style={{marginTop: '10px'}}>
                  <h4>USEFUL LINKS</h4>
                  <div className="useful-link">
                      <ul className="links">
                          <li><Link to="/home">Home</Link></li>
                          <li><Link to="/aboutus">About Us</Link></li>
                          <li><Link to="/appointment"> Booking</Link></li>
                          <li><Link to="/contact">Contact Us</Link></li>
                          <li><Link to="/feedback">Feedback</Link></li>
                      </ul>
                  </div>
              </div>
            
              <div className="col-3" style={{marginTop: '10px'}}>
                  <h4> INSTAGRAM POST</h4>
                  <div className="instagram">
                      <img src="images/insta-blog1.jpg" alt="insta-blog1.jpg"/> 
                      <img src="images/insta-blog2.jpg" alt="insta-blog2.jpg"/> 
                      <img src="images/insta-blog3.jpg" alt="insta-blog3.jpg"/> 
                      <img src="images/insta-blog4.jpg" alt="insta-blog4.jpg"/> 
                      <img src="images/insta-blog5.webp" alt="insta-blog5"/>
                      <img src="images/insta-blog6.webp" alt="insta-blog6"/> 
                  </div>
              </div>
              <div className="col-3" style={{marginTop: '10px'}}>
                  <div className="contact-info">
                      <h4>CONTACT INFO</h4>
                      <p className="address">ADDRESS:<br/> 121 Waldeck Street, NY, USA</p> 
                      <p className="phone">PHONE:<br/> 0800-123456, 0800-123489</p> 
                      <p className="email">EMAIL:<br/> nailartsalon@gmail.com</p> 
                  </div>
              </div>
          </div>
          <div className="row bottom-footer">
            <div className="col-12">
              <p className="copy-right">© 2023 Nail Art Salon. All rights reserved.</p>
            </div>
          </div>
      </div>
  </footer>
  )
}

export default Footer