import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Home, Skills, Work, Contact } from "./pages";
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home, Skills, Projects, About, Contact } from './pages';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App__container">
          <Link to="/"></Link>
          <Link to="/skills"></Link>
          <Link to="/work"></Link>
          <Link to="/contact"></Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;