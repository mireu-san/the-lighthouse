import "./Header.scss"

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <div className={"header" + (menuOpen && "active")}>
            <div className="wrapper">
            {/* left side logo and link to frontpage */}
                <div className="left">
                    <a href="#home" className="logo">
                        Silver Library
                    </a>
                </div>
            

            {/* Right side Menubar (hamburger menu) this is not navbar */}
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            
            </div>    
        </div>

    )
}