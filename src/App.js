import React from "react";
import Start from "./Components/Pages/Start/Start";
import Skills from "./Components/Pages/Skills/Skills";
import Projects from "./Components/Pages/Projects/Projects";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";

import Logo from "./Components/Containers/Logo/Logo";
import Navbar from "./Components/Containers/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />

      <div className="Page">
        <Start />
        <Skills />
        <Projects />
        {/* I know this is not suppose to be about section. Just cloning only! */}
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
