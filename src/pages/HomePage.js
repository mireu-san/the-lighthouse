import React from 'react'

import { StyledIndex, HomePicture } from '../styles/index.styled'
import homeImage from '../images/home.jpg'
import profilePhoto from '../images/profile.jpg'

import Contact from './Contact'
import About from './About'
import Skills from './Skills'
import Work from './Work'



const HomePage = () => {  
    return (
    <StyledIndex>
        <div className="home__profile">
            <HomePicture img src={profilePhoto} alt="profile" />
            <h2>Jongwan Kim</h2>
            <h3>Frontend web developer enthusiast</h3>
            <i class="fas fa-envelope fa-2x"></i>
            <i class="fab fa-github fa-2x"></i>
            <i class="fab fa-linkedin fa-2x"></i>
            <i class="fas fa-id-card"></i>
        </div>

        <div className="home__container" alt="acecombat" id="home">
            <img src={homeImage} alt="" />
            <h2>Biography</h2>
            <p>Greetings, this is Jongwan Kim👋</p>
            <p>And I am a self-taught passionate frontend web developer enthusiast.</p>
        </div>

        <Skills />
        <About />
        <Work />
        <Contact />
    </StyledIndex>
    )
}

export default HomePage;