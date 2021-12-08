import React from 'react'
import styled from "styled-components";
// import { StyledIndex } from '../styles/index.styled'
import '../styles/Work.css';

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
                    <aside className="header__wrapper__entire">
                        
                        <div className="header__wrapper__whiteBox">
                            <div className="work__item-image">
                                <img src="https://i.imgur.com/XqQZQZL.png" alt="work" />
                                    <a href="https://wonderful-goldstine-6adfe3.netlify.app/">
                                        <p className="textFont">Covid-19 tracker with opensource database</p>
                                    </a>
                            </div>
                        </div>
                        <div className="header__wrapper__whiteBox">
                            <div className="work__item-image">
                                <img src="https://i.imgur.com/XqQZQZL.png" alt="work" />
                                    <a href="https://quizzical-goldberg-fd83c4.netlify.app/">
                                        <p className="textFont">Previous reactjs portfolio</p>
                                    </a>
                            </div>
                        </div>
                        <div className="header__wrapper__whiteBox">
                            <div className="work__item-image">
                                <img src="https://i.imgur.com/XqQZQZL.png" alt="work" />
                                    <a href="https://hardcore-chandrasekhar-2978e0.netlify.app/">
                                        <p className="textFont">Previous portfolio</p>
                                    </a>
                            </div>
                        </div>
                        <div className="header__wrapper__whiteBox">
                            <div className="work__item-image">
                                <img src="https://i.imgur.com/XqQZQZL.png" alt="work" />
                                    <a href="https://mireu-san.github.io/moviesite">
                                        <p className="textFont">Opensource Moviesite</p>
                                    </a>
                            </div>
                        </div>
                        <div className="header__wrapper__whiteBox">
                            <div className="work__item-image">
                                <img src="https://i.imgur.com/XqQZQZL.png" alt="work" />
                                    <a href="https://mireu-san.github.io/Kokoa-Clone-2020/">
                                        <p className="textFont">Kakaotalk Web App</p>
                                    </a>
                            </div>
                        </div>
                    </aside>

{/* 





                <div className="work__container">
                    <div className="work__item">
                        <div className="work__item-image">
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
                        <div className="work__item-image">
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
                        <div className="work__item-image">
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
                        <div className="work__item-image">
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