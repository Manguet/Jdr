import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem  = ( props ) => {

    return (
        <Link className="nav-link" to={ props.link.link }>{ props.link.name ? props.link.name : <FontAwesomeIcon icon={ props.link.icon } /> }</Link>
    );
}

export default NavItem;