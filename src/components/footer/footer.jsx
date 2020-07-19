import React from "react";
import * as CONSTANTS from '../../share/constants/constants';
import "./footer.scss"
import * as UTIL from '../../share/util/util';
import I18n from "../i18nComponent";

const footerImg = 'https://sworldmedia-website.s3.amazonaws.com/image/Others/footerImg.jpg';

const FooterPage = () => {
    return (
        <div className="Footer">
            <img className="sw-footer-background-img" src={footerImg} />
            <div className="sw-footer-overlay">
                <div className="sw-infor-wrapper">
                    <p className="sw-infor-header">
                        Our Phone
                    </p>
                    <p className="sw-infor-content">
                        <span className="sw-hotline">
                            Hotline: {CONSTANTS.SW_INFOR.HOTLINE}
                        </span>
                        <br/>
                        <span className="sw-mobile">
                            Phone: {CONSTANTS.SW_INFOR.MOBILE}
                        </span>
                    </p>
                </div>
                <div className="sw-infor-wrapper">
                    <p className="sw-infor-header">
                        Our Address
                    </p>
                    <p className="sw-infor-content">
                        {CONSTANTS.SW_INFOR.ADDRESS}
                    </p>
                </div>
                <div className="sw-infor-wrapper">
                    <p className="sw-infor-header">
                        Our email
                    </p>
                    <p className="sw-infor-content">
                        {CONSTANTS.SW_INFOR.EMAIL}
                    </p>
                </div>
                {/* <div className="sw-infor-wrapper">
                    <p className="sw-infor-header">
                        Working hours
                    </p>
                    <p className="sw-infor-content">
                        <span className="sw-work">
                            Monday-Friday: 09AM-6PM
                        </span>
                    </p>
                </div> */}
                <div className="sw-footer-end">
                    <div className="sw-social">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                        <a href="https://www.facebook.com/sworldmultimedia" className="fa fa-facebook"></a>
                        <a href="https://www.youtube.com/channel/UCzod695AmgnnUeKSSUZ-t1A" className="fa fa-youtube"></a>
                        <a href="https://www.linkedin.com/company/s-worldmultimedia" className="fa fa-linkedin"></a>
                        <a href="https://www.instagram.com/lifeatsworld" className="fa fa-instagram"></a>
                    </div>
                    <p className="sw-copyright">Into the world</p>
                </div>
            </div>
        </div>
    );
}

export default FooterPage;