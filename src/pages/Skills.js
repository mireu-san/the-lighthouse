import React from 'react'
import styled from "styled-components";
import '../styles/Skills.css';
import '../images/skills/';



export const SkillsStyle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background-color: #272935;
`;


function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="skills__header">Skills</h2>
                <div className="skills__wrapper">
                    <div className="skill__alphaColumn">
                        
                        <div className="skill__icon">
                            <i className="fab fa-html5 fa-5x box" alt="html5" loading="lazy" p="test" />
                            <p>HTML5</p>
                        </div>
                        
                        <div className="skill__icon">
                            <i className="fab fa-css3-alt fa-5x box" alt="css" loading="lazy" />
                            <p>CSS</p>
                        </div>

                        <div className="skill__icon">
                            <i className="fab fa-js-square fa-5x box" alt="javascript" loading="lazy" />
                            <p>Javascript/ECMA6</p>
                        </div>

                    </div>

                    <div className="skill__betaColumn">

                        <div className="skill__icon">
                            <i className="fab fa-node-js fa-5x box" alt="nodejs" loading="lazy" />
                            <p>Node.js</p>
                        </div>

                        <div className="skill__icon">    
                            <i className="fab fa-react fa-5x box" alt="react" loading="lazy" />
                            <p>React.js</p>
                        </div>
                        
                        <div className="skill__icon">
                            <i className="fab fa-microsoft fa-5x box" alt="typescript" loading="lazy" />
                            <p>TypeScript</p>
                        </div>

                    </div>
                </div>
        </section>
    );
};


export default Skills;
