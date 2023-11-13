import React from "react";
import Navbar from './components/includes/Navbar.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Blog from './components/pages/Blog.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WowComponent from './components/includes/WowComponent.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>

          <WowComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
