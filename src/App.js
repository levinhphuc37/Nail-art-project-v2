import React from 'react';
import Adult from './components/adult/Adult';
import About from './components/about/About';
import Home from './components/home/Home';
import Appointment from './components/appointment/Appointment';
import Childen from './components/children/Children';
import Contact from './components/contact/Contact';
import Feedback from './components/feedback/Feedback';
import History from './components/history/History';
import Nailcare from './components/nailcare/Nailcare';
import Product from './components/product/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/adult" element={<Adult />} />
        <Route path="/children" element={<Childen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/history" element={<History />} />
        <Route path="/nailcare" element={<Nailcare />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;