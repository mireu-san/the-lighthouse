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
            <h1>About</h1>
            <p>백엔드 개발자와 함께 조화로움을 유지해 나갈 수 있는 프론트엔드 웹개발자입니다.</p>
            <p>자신있는 언어적 특성을 적극 활용하여 파이썬을 시작으로 백엔드를 접하던 중,</p>
            <p>프론트엔드의 자바스크립트의 유연함에 이끌려 프론트엔드 웹개발자가 되기위해 독학을 이어오고 있습니다.</p>
        </div>
        </StyledIndex>
    );
};

export default About;