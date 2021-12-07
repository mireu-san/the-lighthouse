import React from 'react'
import styled from "styled-components";
import '../styles/Skills.css';
import '../images/skills/';

// temporary start
import JS from '../images/skills/js.png';
import react from '../images/skills/reactjs.png';
import node from '../images/skills/nodejs.png';
// temporary end


export const SkillsStyle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background-color: #23252F;
`;


function Skills() {
    return (
        <section class="skills" id="skills">
        <h2 class="skills__header">Preferred Skill Sets</h2>

{/* refactoring: consider inserting a new middle function here - to replace it with a fontawesome api */}

        <div class="skills__wrapper">
            <div class="skill__alphaColumn">
                <img
                    src={require("../images/skills/js.png")}
                    alt="javascript"
                    loading="lazy"
                    class="box skill__box"
                />
                <img
                    src="../images/skills/reactjs.png"
                    alt="reactjs"
                    loading="lazy"
                    class="box skill__box"
                />
                <img
                    src="../images/skills/typescript.png"
                    alt="typescript"
                    loading="lazy"
                    class="box skill__box"
                />
            </div>

            <div class="skill__betaColumn">
                <img
                    src="../images/skills/nodejs.png"
                    alt="nodejs"
                    loading="lazy"
                    class="box skill__box"
                />
                <img
                    src="../images/skills/html5.png"
                    alt="HTML"
                    loading="lazy"
                    class="box skill__box"
                />
                <img
                    src="../images/skills/css.png"
                    alt="CSS"
                    loading="lazy"
                    class="box skill__box"
                />
            </div>
        </div>
    </section>
    );
};


export default Skills;
