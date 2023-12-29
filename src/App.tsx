import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Signin from './components/auth/Signin';
import Footer from './components/Footer';


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<Signin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
