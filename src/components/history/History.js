import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './History.css';
const History = () => {
  return (
    <section>
        <Header />
      {/* history banner */}
      <div className="wrapper">
        <h1 style={{ color: '#911429' }}>History, Origin of NailArt</h1>
      </div>

      {/* history content */}
      <div className="blog-wrapper-one">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="blog-detail-section">
                <h2 className="history-title">A history of nail art (and what could be next)</h2>
                <div className="detail-img">
                  <img src="images/nail_art/history/blog.jpg" alt="img" />
                </div>
                <div className="detail-content">
                  <span>28 May 2022, INTERESTING TO KNOW, MANICURE, STYLE, TRENDS</span>
                  <h4>Ultra Glam Gold Nail Polishes for Holiday.</h4>
                  <div className="detail-pera">
                    <p>The history of nail art dates back to as early as 3000 B.C. when the ancient Egyptians were known for decorating their nails with henna. Not only did they adorn their hands and feet, but would also add designs and pictures of nature such as flowers, animals, and plants...</p>
                    {/* Additional paragraphs go here */}
                  </div>
                  <div className="thought-wrapper">
                    <div className="thought-content">
                      <img src="images/quote-Icon.png" alt="img" />
                      <p>Great nails don't happen by chance. They happen by appointment.</p>
                      <span>- by John Doe</span>
                    </div>
                  </div>
                  <div className="bottom-pera">
                    <p>From our gel polishes and glitter powders – we have everything you need to create stunningly vibrant and unique looks both now and in the future.</p>
                    <p className="pera-three">Here at Glitterbels we know being a successful nail tech about experimenting with different products and techniques to create something which celebrates your client's individual style.</p>
                    {/* Additional paragraphs go here */}
                  </div>
                </div>
              </div>

              {/* Origin */}
              <div className="blog-detail-section">
                <h2 className="history-title">From ancient Egypt to Cardi B: a cultural history of the manicure</h2>
                <div className="detail-img">
                  <img src="images/nail_art/history/blog1.jpg" alt="img" />
                </div>
                <div className="detail-content">
                  <span>28 May 2022, INTERESTING TO KNOW, MANICURE, STYLE, TRENDS</span>
                  <h4>Ultra Glam Gold Nail Polishes for Holiday.</h4>
                  <div className="detail-pera">
                    <p>The Chinese are often credited with creating the first “nail polish”, in 3,000 BC. Women soaked their nails in a combination of egg whites, gelatine, beeswax and dyes from flower petals; roses and orchids were the most popular...</p>
                    {/* Additional paragraphs go here */}
                  </div>
                  <div className="thought-wrapper">
                    <div className="thought-content">
                      <img src="images/quote-Icon.png" alt="img" />
                      <p>"How to Take a Nail Selfie!” “Fruity Manicure Inspo!”</p>
                      <span>Kylie Jenner Slammed by Fans for Nearly Poking Out Stormi's Eyes With Ridiculous Claw Nails.</span>
                    </div>
                  </div>
                  <div className="bottom-pera">
                    <p>The ritual of having one’s nails painted by a professional was largely the preserve of the wealthy until the rise of the nail bar...</p>
                    <p className="pera-three">While Green was about taking the speedy nail bar to customers with a penchant for a classic manicure, the beauty entrepreneur Sharmadean Reid created a movement for a nail tribe looking for something more avant garde...</p>
                    {/* Additional paragraphs go here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default History;
