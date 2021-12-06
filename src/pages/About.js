import React from "react";
import { StyledIndex } from '../styles/index.styled'

const About = () => {
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
            <h1>Recent Posts</h1>
            <p>tistory</p>
           
        </div>
        </StyledIndex>
    );
};

export default About;