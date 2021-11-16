import Skills from './Skills';
import Work from './Work';
import About from './About';
import Contact from './Contact';

import { StyledIndex } from '../styles/index.styled'
import homeImage from '../images/home.jpg'

function Home() {
    return (
        <StyledIndex>
        <div className="home__container" alt="acecombat" id="home">
           <img src={homeImage} alt="" />
           <h2>Greetings, this is Jongwan Kim👋</h2>
           <h1>And I am a self-taught passionate frontend web developer enthusiast.</h1>
        </div>
        </StyledIndex>
    );
};

export { Home, Skills, Work, About, Contact };