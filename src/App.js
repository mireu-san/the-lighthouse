import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Skills, Work, About, Contact } from "./pages";
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
        <div>
          <Link to="/skills">Skills</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" exact component={<Home/>} />
    //     <Route path="/about" component={<About/>} />
    //     <Route path="/skills" component={<Skills/>} />
    //     <Route path="/projects" component={<Projects/>} />
    //     <Route path="/contact" component={<Contact/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;
