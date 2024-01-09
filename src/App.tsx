import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* Add more routes for other sections */}
      </Routes>
    </Router>
  );
};

export default App;
