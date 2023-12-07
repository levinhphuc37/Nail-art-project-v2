import React from 'react'
import './Geometric.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Step from '../step'
const Geometric = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Step 1: Buff your nail",
      description: "Buffing your nails is a simple process that can help improve their appearance by smoothing the surface and enhancing shine.",
      imgSrc: "../images/geomatric/step1.png"
    },
    {
      stepNumber: 2,
      title: "Step 2: Dehydrate your nail",
      description: "Cleaning the nails ensures that they are free from any natural oils, dirt, or residue. This clean surface provides a better foundation for the adhesion , allowing it to bond more securely to the natural nails.",
      imgSrc: "../images/geomatric/step2.png"
    },
    {
      stepNumber: 3,
      title: "Step 3: Apply a base coat",
      description: "Apply a base coat: Apply a thin layer of base coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step3.png"
    },
    {
      stepNumber: 4,
      title: "Step 4: Apply a white gel polish",
      description: "Apply a white gel polish: Apply a thin layer of white gel polish to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step4.png"
    },
    {
      stepNumber: 5,
      title: "Step 5: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step5.png"
    },
    {
      stepNumber: 6,
      title: "Step 6: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step6.png"
    },
    {
      stepNumber: 7,
      title: "Step 7: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step7.png"
    },
    {
      stepNumber: 8,
      title: "Step 8: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step8.png"
    },
    {
      stepNumber: 9,
      title: "Step 9: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step9.png"
    },
    {
      stepNumber: 10,
      title: "Step 10: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step10.png"
    },
    {
      stepNumber: 11,
      title: "Step 11: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step11.png"
    },
    {
      stepNumber: 12,
      title: "Step 12: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step12.png"
    },
    {
      stepNumber: 13,
      title: "Step 13: Apply a matte top coat",
      description: "Apply a matte top coat: Apply a matte top coat to each nail and cure in lamp.",
      imgSrc: "../images/geomatric/step13.png"
    },
    {
      stepNumber: 14,
      title: "Step 14: Apply a matte top coat",
      description: "Apply a top coat: Once the nail art is dry, apply a top coat to protect.",
      imgSrc: "../images/geomatric/step14.png"
    },
    {
      stepNumber: 15,
      title: "Step 15: Apply a matte top coat",
      description: "Apply a top coat: Once the nail art is dry, apply a top coat to protect.",
      imgSrc: "../images/geomatric/step15.png"
    },
    {
      stepNumber: 16,
      title: "Step 16: Apply a matte top coat",
      description: "Apply a top coat: Once the nail art is dry, apply a top coat to protect.",
      imgSrc: "../images/geomatric/step16.png"
    },
    {
      stepNumber: 17,
      title: "Step 17: Apply a matte top cure in lamp",
      description: "Apply a top coat: Once the nail art is dry, apply a top coat to protect.",
      imgSrc: "../images/geomatric/step17.png"
    }
  ];
  return (
    <section>
      <Header />
      <div>
        <br /><br /><br /><br /><br />
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
              <p>Welcome to <span><a href="index.html">CherryBlossomNail</a></span>, where creativity meets precision to redefine the art of nail design. At <span><a href="index.html">CherryBlossomNail</a></span>, we believe that every set of nails is a blank canvas awaiting a masterpiece. Established with a passion for transforming the ordinary into the extraordinary, we are your premier destination for professional nail art services.</p>
              <p>Geometric nails are a popular nail art trend, known for using geometric shapes such as lines, squares, triangles, and curves to create artistic nail designs. This creates a modern, elegant and sometimes even sophisticated look, depending on the nail technician's creativity.</p>
              <div>
                <a href="appointment.html" className="banner-btn">
                  <div><span>Make An Appointment</span></div>
                </a>
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