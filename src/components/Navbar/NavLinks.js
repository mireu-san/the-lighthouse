const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Home</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#skills">Skills</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#work">Work</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
    );
}

export default NavLinks;