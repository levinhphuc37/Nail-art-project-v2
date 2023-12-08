import React, { useState, useEffect } from 'react'
import './Geometric.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Step from '../step'
import stepsData from './data.json'
import { Link } from 'react-router-dom';
const Geometric = () => {
  const [steps, setSteps] = useState([])
  useEffect(() => {
    setSteps(stepsData)
  }, [])
  return (
    <section>
      <Header />
      <div>
        {/* Geometric banner */}
        <section>
          <div className="wrapper">
            <h1 style={{ color: '#911429' }}>Geomatric Categories</h1>
          </div>
        </section>
        {/* Geometric about */}
        <section>
          <div className="blog-wraper-one">
            <div>
              <h5 style={{ color: '#911429' }}>What is Geometric art</h5>
              <h3>AND WHY WE ARE THE BEST AT IT?</h3>
              <p>Welcome to <span><Link to="/home">CherryBlossomNail</Link></span>, where creativity meets precision to redefine the art of nail design. At <span><Link to="/home">CherryBlossomNail</Link></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>              
              <p>Geometric nails are a popular nail art trend, known for using geometric shapes such as lines, squares, triangles, and curves to create artistic nail designs. This creates a modern, elegant and sometimes even sophisticated look, depending on the nail technician's creativity.</p>
              <div>
                <Link to="/appointment" className="banner-btn">
                  <div><span>Make An Appointment</span></div>
                </Link>
              </div>
            </div>
            <div style={{ padding: '30px' }}><img src="../images/staff-2.png" alt="img" /></div>
          </div>
        </section>
        {/* Geometric nailart showcase */}
        <section>
          <div className="gellary-head">
            <h5>Our Geometric art Categories</h5>
            <h3>"Nail the Art, Embrace the Glam: Nail the Look with Geometric Chic!"</h3>
          </div>
          <div className="gellary-grid-wrapper">
            <div className="container">
              <div className="row">
                <div className="column">
                  <a href="../images/gellary-1.png" title="image" className="img-link">
                    <img src="../images/geomatric/Untitled1.png" alt="img" />
                  </a>
                  <a href="../images/gellary-4.png" title="image-4" className="img-link">
                    <img src="../images/geomatric/Untitled2.png" alt="img" />
                  </a>
                </div>
                <div className="column">
                  <a href="../images/gellary-2.png" title="image-2" className="img-link">
                    <img src="../images/geomatric/Untitled3.png" alt="img" />
                  </a>
                  <a href="../images/gellary-5.png" title="image-5" className="img-link">
                    <img src="../images/geomatric/Untitled4.png" alt="img" className="last-img" />
                  </a>
                </div>
                <div className="column">
                  <a href="../images/gellary-3.png" title="image-3" className="img-link">
                    <img src="../images/geomatric/Untitled5.png" alt="img" />
                  </a>
                  <a href="../images/gellary-6.png" title="image-6" className="img-link">
                    <img src="../images/geomatric/Untitled6.png" alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Geometric nail-art step by step banner */}
        <div className="geomatric-step-title">
          <h2>Geometric art process</h2>
          <p>A brief showcase of our professional nail artist on Geometric art</p>
        </div>
        {/* Geometric nail-art process step by step */}
        <section>
          <div className="container">
            {steps.map((step) => (
              <Step
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                imgSrc={step.imgSrc}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}

export default Geometric