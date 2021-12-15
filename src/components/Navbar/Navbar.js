import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

import "./Navbar.css";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return(
            <nav className="NavbarItems">

                <h1 className="navbar__logo">
                    <a href="/" style={{ textDecoration: "none"}}>JW</a>
                </h1>

                <div className="menu__icon" onClick={this.handleClick}>
                    {/* for the hamburger (bar) menu animation */}
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav__menu active" : "nav__menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a 
                                    className={item.cName} 
                                    href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </nav>
        )
    }
}

export default Navbar;