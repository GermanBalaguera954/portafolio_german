import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (

    <Router>
      <div className="body-container">
        <div className="app-container">
          <ScrollToTop />
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;