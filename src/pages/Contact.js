import React from 'react'
import { StyledIndex } from '../styles/index.styled'

function Contact() {
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
           <h1>Contact</h1>
                <p>Here is a question: how can I give you a unique experience?</p>
                <p>With the ability to treat mass raw contents to organised data, what harmony may occur in your life?</p>
        </div>
        </StyledIndex>
    );
};

export default Contact;
