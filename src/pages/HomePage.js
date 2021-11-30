import React from 'react'

import { StyledIndex } from '../styles/index.styled'
import homeImage from '../images/home.jpg'

import Contact from './Contact'
import About from './About'
import Skills from './Skills'
import Work from './Work'

const HomePage = () => {  
    return (
    <StyledIndex>
        <div className="home__container" alt="acecombat" id="home">
            <img src={homeImage} alt="" />
            <h2>Greetings, this is Jongwan Kim👋</h2>
            <h1>And I am a self-taught passionate frontend web developer enthusiast.</h1>
        </div>

        <div className="default__section">
            <h2>test</h2>
        </div>
        <Skills />
        <About />
        <Work />
        <Contact />
    </StyledIndex>
    )
}

export default HomePage;