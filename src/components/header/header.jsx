import React, {useEffect, useState} from "react";
import { NavLink, useLocation } from 'react-router-dom';
import '../header/header.scss';
import * as UTIL from '../../share/util/util';
import { useScrollHandler } from "../../share/scroll-handler/scroll-handler";
import { useTranslation } from 'react-i18next';
import I18n from "../i18nComponent";
import * as CONSTANT from '../../share/constants/constants';

const swlogo = process.env.PUBLIC_URL + '/img/transparent.png';
const logoStyle = UTIL.getBackgroundImgStyle(swlogo);
const swLeftIcon = process.env.PUBLIC_URL + '/icon/left.svg';
const swRightIcon = process.env.PUBLIC_URL + '/icon/right.svg';

const Header = () =>  {
    let swIconStyle;
    const [isLargeScreen, setLargerScreen] = useState(false);
    const [burger, burgerToggle] = useState(false);
    const { i18n } = useTranslation('en');
    const currentRoute = useLocation();
    const isTransparentHeader = currentRoute && currentRoute.pathname === '/home';
    const scroll = useScrollHandler(300);
    const currentLng = i18n.language;

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1025px)");
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = media => {
        if (media.matches) {
            setLargerScreen(true);
        } else {
            setLargerScreen(false);
        }
    }

    // Initial active language
    if (currentLng === CONSTANT.SW_LANGUAGE.VN) {
        swIconStyle = UTIL.getBackgroundImgStyle(swRightIcon, {width: '3rem', height: '3rem'}, false);
    } else {
        swIconStyle = UTIL.getBackgroundImgStyle(swLeftIcon, {width: '3rem', height: '3rem'}, false);
    }

    // On change language
    const onSwitchLanguage = () => {
        if (currentLng === CONSTANT.SW_LANGUAGE.EN) {
            i18n.changeLanguage(CONSTANT.SW_LANGUAGE.VN);
            swIconStyle = UTIL.getBackgroundImgStyle(swRightIcon, {width: '3rem', height: '3rem'}, false);
        } else {
            i18n.changeLanguage(CONSTANT.SW_LANGUAGE.EN);
            swIconStyle = UTIL.getBackgroundImgStyle(swLeftIcon, {width: '3rem', height: '3rem'}, false);   
        }
    }

    // Function toggle menu
    const toggleMenu = () => {
        burgerToggle(!burger);
    }

    return (
        <div className={`Header ${ (isTransparentHeader && scroll && isLargeScreen) ? 'transparent' : 'visible'} `}>
            <div className="sw-logo-wrapper">
                <div className="sw-logo" style={logoStyle}>
                </div>
            </div>
            <div
                className={isLargeScreen ? 'sw-full-nav' : burger ? 'sw-burger-active' : 'sw-burger'}
                onClick={burger ? toggleMenu : undefined}
            >
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

            <div className="nav-right-part">
                <div className="sw-switch-lg">
                    <span>EN</span>
                    <div onClick={onSwitchLanguage} className="sw-icon" style={swIconStyle}></div>
                    <span>VN</span>
                </div>

                <div className="sw-burger-menu">
                    <span className="burger-wrapper" onClick={toggleMenu}>
                        <span className={burger ? 'active-burger' : 'burger-line'}></span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;