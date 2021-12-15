import classes from './Navbar.module.css';
import NavLinks from "./NavLinks";

import { GiBusDoors } from 'react-icons/gi';
import { GiExitDoor } from 'react-icons/gi';
import { useState } from 'react';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <GiBusDoors className={classes.Hamburger} 
                            size="40px" color="white" 
                            onClick={() => setOpen(!open)}
                        />

    const closeIcon = <GiExitDoor className={classes.Hamburger} 
                          size="40px" color="white" 
                          onClick={() => setOpen(!open)}
                        />
                          
    const closeMobileMenu = () => setOpen(false);


    return (
        <nav className={classes.MobileNavigation}>
           {open ? closeIcon : hamburgerIcon}
           {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />} 
        </nav>
    );
        
}

export default MobileNavigation;