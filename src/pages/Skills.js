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
    background-color: #272935;
`;


function Skills() {
    return (
        <section class="skills" id="skills">
            <h2 class="skills__header">Skills</h2>
                <div class="skills__wrapper">
                    <div class="skill__alphaColumn">
                        <i class="fab fa-html5 fa-5x" alt="html5" loading="lazy" />
                        <i class="fab fa-css3-alt fa-5x" alt="css" loading="lazy" />
                        <i class="fab fa-js-square fa-5x" alt="javascript" loading="lazy" />
                    </div>
                    <div class="skill__betaColumn">
                        <i class="fab fa-node-js fa-5x" alt="nodejs" loading="lazy" />
                        <i class="fab fa-react fa-5x" alt="react" loading="lazy" />
                        <i class="fab fa-microsoft fa-5x" alt="typescript" loading="lazy" />
                    </div>
                </div>
        </section>
    );
};


export default Skills;
