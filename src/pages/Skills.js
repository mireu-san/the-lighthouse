import React from 'react'
import styled from "styled-components";
import '../styles/Skills.css';
import '../images/skills/';

// temporary only - will be replaced with index later
import html5 from '../images/skills/html5.png';
import css from '../images/skills/css.png';
import nodejs from '../images/skills/nodejs.png';
import react from '../images/skills/reactjs.png';
import typescript from '../images/skills/typescript.png';
import javascript from '../images/skills/js.png';
// end of temporary

export const SkillsStyle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background-color: #23252F;
`;


function Skills() {
    return (
        <section class="skills" id="skills">
            <h2 class="skills__header">Skills</h2>
                <div class="skills__wrapper">
                    <div class="skill__alphaColumn">
                        <img 
                            src={html5} 
                            alt="html5"
                            loading="lazy"
                            class="box skill_box" 
                        />
                        <img 
                            src={css} 
                            alt="css"
                            loading="lazy"
                            class="box skill_box" 
                        />
                        <img 
                            src={nodejs} 
                            alt="nodejs"
                            loading="lazy"
                            class="box skill_box" 
                        />
                    </div>

                    <div class="skill__betaColumn">
                        <img 
                            src={react} 
                            alt="react"
                            loading="lazy"
                            class="box skill_box" 
                        />
                        <img 
                            src={typescript} 
                            alt="htmtypescriptl5"
                            loading="lazy"
                            class="box skill_box" 
                        />
                        <img 
                            src={javascript} 
                            alt="javascript"
                            loading="lazy"
                            class="box skill_box" 
                        />
                    </div>
                </div>
        </section>
    );
};


export default Skills;
