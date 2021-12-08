import React from 'react'
import styled from "styled-components";
// import { StyledIndex } from '../styles/index.styled'
import '../styles/Work.css';
import '../images/work/';

/* temporary start */
import covid from '../images/work/covid.jpg';
import jsproject from '../images/work/jsportfolio.jpg';
import kakao from '../images/work/kakaoclone.jpg';
import movie from '../images/work/reactmovie.jpg';
import reactproject from '../images/work/reactportfolio.jpg';
/* end of temporary section */


const StyledWork = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function Work() {
    return (
        <StyledWork>
            <section className="work" id="work">
                <h2 className="work__title">Work</h2>
                    <aside className="header__wrapper">

                    <div className="work__alphaColumn">
                        <div className="work__container">
                            <div className="work__box">
                                <img 
                                    src={covid} 
                                    className="workImage"
                                    alt="covid tracker" 
                                /> 
                                    <a href="https://wonderful-goldstine-6adfe3.netlify.app/">
                                        <p className="textFont">Covid-19 tracker with opensource database</p>
                                    </a>
                            </div>
                        </div>
                        <div className="header__wrapper__whiteBox">
                            <div className="work__box">
                                <img 
                                    src={reactproject} 
                                    className="workImage"
                                    alt="react font animation portfolio" 
                                />
                                    <a href="https://quizzical-goldberg-fd83c4.netlify.app/">
                                        <p className="textFont">Previous reactjs portfolio</p>
                                    </a>
                            </div>
                        </div>
                        <div className="header__wrapper__whiteBox">
                            <div className="work__box">
                                <img 
                                    src={jsproject} 
                                    className="workImage"
                                    alt="js html css portfolio" 
                                />
                                    <a href="https://hardcore-chandrasekhar-2978e0.netlify.app/">
                                        <p className="textFont">Previous portfolio</p>
                                    </a>
                            </div>
                        </div>
                    </div>

                    <div className="work__betaColumn">
                        <div className="header__wrapper__whiteBox">
                            <div className="work__box">
                                <img 
                                    src={movie} 
                                    className="workImage"
                                    alt="react movie with openAPI database" 
                                />
                                    <a href="https://mireu-san.github.io/moviesite">
                                        <p className="textFont">Opensource Moviesite</p>
                                    </a>
                            </div>
                        </div>
                        <div className="header__wrapper__whiteBox">
                            <div className="work__box">
                                <img 
                                    src={kakao} 
                                    className="workImage"
                                    alt="kakao web app - limited by html/css" 
                                />
                                    <a href="https://mireu-san.github.io/Kokoa-Clone-2020/">
                                        <p className="textFont">Kakaotalk Web App</p>
                                    </a>
                            </div>
                        </div>
                    </div>
                    </aside>

{/* 





                <div className="work__container">
                    <div className="work__item">
                        <div className="work__box">
                            <img src="#" alt="Covid tracker with React.js" />
                        </div>
                        <div className="work__item-text">
                            <h3 className="work__item-text-header">
                                <a href="#" />
                            </h3>
                            <p className="work__item-text-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur tempor, nisi nunc
                                interdum nisi, euismod consectetur nisi nunc euismod.
                            </p>
                        </div>
                    </div>
                    <div className="work__item">
                        <div className="work__box">
                            <img src="#" alt="JavaScript" />
                        </div>
                        <div className="work__item-text">
                            <h3 className="work__item-text-header">
                                <a href="#" />
                            </h3>
                            <p className="work__item-text-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur tempor, nisi nunc
                                interdum nisi, euismod consectetur nisi nunc euismod.
                            </p>
                        </div>
                    </div>
                    <div className="work__item">
                        <div className="work__box">
                            <img src="#" alt="React.js" />
                        </div>
                        <div className="work__item-text">
                            <h3 className="work__item-text-header">
                                <a href="#" />
                            </h3>
                            <p className="work__item-text-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur tempor, nisi nunc
                                interdum nisi, euismod consectetur nisi nunc euismod.
                            </p>
                        </div>
                    </div>
                    <div className="work__item">
                        <div className="work__box">
                            <img src="#" alt="previous portfolio page" />
                        </div>
                        <div className="work__item-text">
                            <h3 className="work__item-text-header">
                                <a href="#" />
                            </h3>
                            <p className="work__item-text-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur tempor, nisi nunc
                                interdum nisi, euismod consectetur nisi nunc euismod.
                            </p>
                        </div>
                    </div> 
                </div> */}
            </section>
        </StyledWork>
    )
}

export default Work;