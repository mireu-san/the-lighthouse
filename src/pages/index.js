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
           <h1>Contact Us Contact</h1> 
        </div>
    );
};

export { Home, Skills, Work, About, Contact };