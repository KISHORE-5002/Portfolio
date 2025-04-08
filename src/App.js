import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Academics from './components/Academics';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
   <Router>
         <Routes>
           <Route path="/Home" element={<Home />} />
           <Route path="/Skills" element={<Skills />} />
           <Route path="/Tools" element={<Tools />} />
           <Route path="/Academics" element={<Academics/>} />
           <Route path="/Projects" element={<Projects />} />
           <Route path="/Certificates" element={<Certificates />} />
           <Route path="/Contact" element={<Contact />} />


           <Route path="/" element={<Home />} />
           </Routes>
   </Router>
  );
}

export default App;