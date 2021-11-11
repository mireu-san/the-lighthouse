import React from "react"

import FrontPage from "./FrontPage"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

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
