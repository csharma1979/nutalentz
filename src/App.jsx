import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Staffing from './pages/services/Staffing';
import Training from './pages/services/Training';
import Consulting from './pages/services/Consulting';
import ManagedServices from './pages/services/ManagedServices';
import DataServices from './pages/services/DataServices';
import Personnel from './pages/services/Personnel';
import Financial from './pages/services/Financial';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this line right after Router */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          {/* Services Routes */}
          <Route path="/services/staffing" element={<Staffing />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/data-services" element={<DataServices />} />
          <Route path="/services/personnel" element={<Personnel />} />
          <Route path="/services/financial" element={<Financial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;