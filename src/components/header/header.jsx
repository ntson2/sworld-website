import React, {useState} from "react";
import { NavLink, useLocation } from 'react-router-dom';
import '../header/header.scss';
import * as UTIL from '../../share/util/util';
import { useScrollHandler } from "../../share/scroll-handler/scroll-handler";
import TopBanner from "../topBanner";
import I18n from "../i18nComponent";

const swlogo = process.env.PUBLIC_URL + '/img/transparent.png';
const logoStyle = UTIL.getBackgroundImgStyle(swlogo);

const Header = () =>  {

    const [curentlg, setLanguage] = useState('EN')
    const currentRoute = useLocation();
    const isTransparentHeader = currentRoute && currentRoute.pathname === '/home';
    const scroll = useScrollHandler();

    return (
        <div className={`Header ${ (isTransparentHeader && scroll) ? 'transparent' : 'visible'} `}>
            <div className="sw-logo-wrapper">
                <div className="sw-logo" style={logoStyle}>
                </div>
            </div>
            <div className="sw-nav">
                <NavLink to="/home" activeClassName="sw-nav-selected">
                    {<I18n text={"home_tab"} />}
                </NavLink>
                <NavLink to="/products" activeClassName="sw-nav-selected">
                    {<I18n text={"products_tab"} />}
                </NavLink>
                <NavLink to="/forum" activeClassName="sw-nav-selected">
                    {<I18n text={"forum_tab"} />}
                </NavLink>
                <NavLink to="/about" activeClassName="sw-nav-selected">
                    {<I18n text={"about_tab"} />}
                </NavLink>
                <NavLink to="contact" activeClassName="sw-nav-selected">
                    {<I18n text={"contact_tab"} />}
                </NavLink>
            </div>
            <div className="sw-switch-lg">
                <span>{curentlg}</span>
                <span className="sw-dropdown"></span>
            </div>
        </div>
    )
}

export default Header;