import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Skills, Projects, About, Contact } from './pages';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={<Home/>} />
        <Route path="/about" component={<About/>} />
        <Route path="/skills" component={<Skills/>} />
        <Route path="/projects" component={<Projects/>} />
        <Route path="/contact" component={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
