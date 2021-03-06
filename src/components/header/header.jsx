import React, {useEffect, useState} from "react";
import { NavLink, useLocation } from 'react-router-dom';
import '../header/header.scss';
import * as UTIL from '../../share/util/util';
import { useScrollHandler, useChangeWindowMode } from "../../share/scroll-handler/scroll-handler";
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
    const pointToShowHeaderCaseFullWidth = useScrollHandler(300);
    const pointToFixedHeaderCaseSmallWidth = useScrollHandler(300);
    const currentLng = i18n.language;
    const isLanscapeMode = useChangeWindowMode();
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1025px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    // Function handle change media query
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
    };

    // Function toggle menu
    const toggleMenu = () => {
        burgerToggle(!burger);
        if (!burger) {
            disableScroll();
        } else {
            enableScroll();
        }
    };

    const disableScroll = () => { 
        document.body.style.overflow = "hidden";
    } 
      
    const enableScroll = () => { 
        document.body.style.overflow = "unset";
    }

    return (
        <div className={
                `Header
                ${(isTransparentHeader && (pointToShowHeaderCaseFullWidth && isLargeScreen) ||
                (pointToShowHeaderCaseFullWidth && !isLargeScreen && isLanscapeMode)) ? 'transparent' : 'visible'}
                ${(!isLargeScreen && isLanscapeMode) ? 'big-height': 'small-height'}
                ${(isLanscapeMode && pointToShowHeaderCaseFullWidth) ? 'fixed-header' : 'relative-header'}`
            }>
            <div className="sw-logo-wrapper">
                <div className="sw-logo" style={logoStyle}>
                </div>
            </div>
            <div
                className={isLargeScreen ? 'sw-full-nav' : burger ? 'sw-burger-active' : 'sw-burger'}
            >
                <NavLink onClick={burger ? toggleMenu : undefined} to="/home" activeClassName="sw-nav-selected">
                    {<I18n text={"home_tab"} />}
                </NavLink>
                <NavLink onClick={burger ? toggleMenu : undefined} to="/products" activeClassName="sw-nav-selected">
                    {<I18n text={"products_tab"} />}
                </NavLink>
                <NavLink onClick={burger ? toggleMenu : undefined} to="/forum" activeClassName="sw-nav-selected">
                    {<I18n text={"forum_tab"} />}
                </NavLink>
                <NavLink onClick={burger ? toggleMenu : undefined} to="/about" activeClassName="sw-nav-selected">
                    {<I18n text={"about_tab"} />}
                </NavLink>
                <NavLink onClick={burger ? toggleMenu : undefined} to="contact" activeClassName="sw-nav-selected">
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