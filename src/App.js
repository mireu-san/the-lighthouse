import React from "react"

import FrontPage from "./Components/Pages/Start/Start"
import Skills from "./Components/Pages/Skills"
import Projects from "./Components/Pages/Projects/Projects"
import Contact from "../src/Components/Pages/Contact/Contact"

import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <FrontPage />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
