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
import Product from './components/product/Product1';
import Acrylic from './components/acrylic/Acrylic';
import Flower from './components/flower/Flower';
import Geometric from './components/geometric/Geometric';
import Polish from './components/polish/Polish';
import Crystal from './components/crystal/Crystal';

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
        <Route path="/acrylic" element={<Acrylic />} />
        <Route path="/flower" element={<Flower />} />
        <Route path="/geometric" element={<Geometric />} />
        <Route path="/polish" element={<Polish />} />
        <Route path="/crystal" element={<Crystal />} />
      </Routes>
    </Router>
  );
}

export default App;