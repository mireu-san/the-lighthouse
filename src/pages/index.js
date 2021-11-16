import Skills from './Skills';
import Work from './Work';
import About from './About';
import Contact from './Contact';

import { StyledIndex } from '../styles/index.styled'

function Home() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
           <h2>안녕하세요, Jongwan Kim 이라고 합니다👋</h2>
           <h1>I am a passionate self-taught frontend developer enthusiast.</h1>
           <h1>우측 상단의 네비게이션 메뉴를 이용해주세요.</h1>
        </div>
    );
};

export { Home, Skills, Work, About, Contact };