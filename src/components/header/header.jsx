import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import '../header/header.scss';
import * as UTIL from '../../share/util/util';
import { useScrollHandler } from "../../share/scroll-handler/scroll-handler";

const swlogo = process.env.PUBLIC_URL + '/img/transparent.png';
const logoStyle = UTIL.getBackgroundImgStyle(swlogo);

const Header = () =>  {
    
    const currentRoute = useLocation();
    const isTransparentHeader = currentRoute && currentRoute.pathname === '/home';
    const scroll = useScrollHandler();

    console.log(scroll);

    return (
        <div className={`Header ${ (isTransparentHeader && scroll) ? 'transparent' : 'visible'} `}>
            <div className="sw-logo-wrapper">
                <div className="sw-logo" style={logoStyle}>
            </div>
            </div>
            <div className="sw-nav">
                <NavLink to="/home" activeClassName="sw-nav-selected">
                    Home
                </NavLink>
                <NavLink to="/products" activeClassName="sw-nav-selected">
                    Products
                </NavLink>
                <NavLink to="/forum" activeClassName="sw-nav-selected">
                    Forum
                </NavLink>
                <NavLink to="/about" activeClassName="sw-nav-selected">
                    About us
                </NavLink>
                <NavLink to="contact" activeClassName="sw-nav-selected">
                    Contact
                </NavLink>
            </div>
        </div>
    )
}

export default Header;