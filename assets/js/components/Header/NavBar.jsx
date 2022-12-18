import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { leftLinks, rightLinks } from './links';
import NavItem from "./NavItem";

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="collapse navbar-collapse justify-content-end" id="navbarTextLeft">

                    <ul className="navbar-nav align-items-center mr-5">
                        {leftLinks.map((link, index) => {
                            return <NavItem key={index} link={link} />
                        })}
                    </ul>

                </div>
                <Link className="navbar-brand justify-content-center" to="/">
                    <FontAwesomeIcon className="logo" icon="fa-solid fa-dice-d20"/>
                </Link>
                <div className="collapse navbar-collapse justify-content-start" id="navbarTextRight">

                    <ul className="navbar-nav align-items-center ml-5">
                        {rightLinks.map((link, index) => {
                            return <NavItem key={index} link={link} />
                        })}
                    </ul>

                </div>
            </nav>
        )
    };
}

export default NavBar;