import React from 'react'
import styled from "styled-components";
import '../styles/Skills.css';

export const SkillsStyle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background-color: #23252F;
`;


function Skills() {
    return (
        // <SkillsStyle>
            <div class="skills" id="skills">
        {/* Move this part to CSS later */}
        <h1 id="title">Skills</h1>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
            >
        {/* end of move this part to css */}
            <div className="skills__wrapper">
                <div className="skills__gridAlpha">
                    <div className="skills__one">
                        <i class="fab fa-html5"></i>
                        <h3>HTML5</h3>
                    </div>
                    <div className="skills__two">
                        <i class="fab fa-css3-alt"></i>
                        <h3>CSS3</h3>
                    </div>
                    <div className="skills__three"></div>
                        <i class="fab fa-react"></i>
                        <h3>React</h3>
                    </div>
                <div class="skill__gridBeta">
                <div className="skills__four">
                    <i class="fab fa-python"></i>
                    <h3>Python</h3>
                </div>
                <div className="skills__five">
                    <i class="fab fa-node"></i>
                    <h3>Node.js</h3>
                </div>
                <div className="skills__six">
                    <i class="fab fa-js"></i>
                    <h3>JavaScript</h3>
                </div>
                </div>
                </div>
            </div>
        </div>
        // </SkillsStyle>
    );
};


export default Skills;
