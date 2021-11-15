import Skills from './Skills';
import Work from './Work';
import About from './About';
import Contact from './Contact';

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
           <h3>안녕하세요, Jongwan Kim 이라고 합니다👋</h3>
           <h1>I am a passionate self-taught frontend developer enthusiast.</h1>
           <p>우측 상단의 네비게이션 메뉴를 이용해주세요.</p>
        </div>
    );
};

export { Home, Skills, Work, About, Contact };