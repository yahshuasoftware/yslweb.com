import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your components
import Navbar from './components/Navbar';
import ServiceSlider from './components/ServiceSlider';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Pricing from './components/PricingData';
import Portfolio from './components/Portfolio';
import Team from './components/TeamMembers';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Career from './components/Carrer'

const Home = () => (
  <>
    <ServiceSlider />
    <About />
    <Services />
    <CallToAction />
    <Pricing />
    <Portfolio />
    <Team />
    <Testimonials />
    <Clients />
    <ContactUs />
  </>
);

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Define Routes */}
        <div className='pt-16'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career/>} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
