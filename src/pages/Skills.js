import React from 'react'
import { StyledIndex } from '../styles/index.styled'

function Skills() {
    return (
        <StyledIndex>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <h1>Skills</h1>
            <i class="fab fa-html5"></i>
            <p>HTML5</p>
            <i class="fab fa-css3-alt"></i>
            <p>CSS3</p>
            <i class="fab fa-react"></i>
            <p>React</p>
            <i class="fab fa-python"></i>
            <p>Python</p>
            <i class="fab fa-node"></i>
            <p>Node.js</p>
            <i class="fab fa-js"></i>
            <p>JavaScript</p>
        </div>
        </StyledIndex>
    );
};


export default Skills;
