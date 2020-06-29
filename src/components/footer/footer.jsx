import React from "react";
import * as CONSTANTS from '../../share/constants/constants';
import "./footer.scss"
import * as UTIL from '../../share/util/util';
import I18n from "../i18nComponent";

const backgroundFooter = 'https://sworldmedia-website.s3.amazonaws.com/image/Others/smallFooter.jpg';
const backgroundFooterStyle = UTIL.getBackgroundImgStyle(backgroundFooter, {width: '100%', height: '100%'}, false);

const FooterPage = () => {
    return (
        <div className="Footer">
            <div className="sw-footer-background-img" style={backgroundFooterStyle}></div>
            <div className="sw-footer-overlay">
                <div className="sw-contact">
                    <div className="sw-hotline">Hotline: { CONSTANTS.SW_INFOR.HOTLINE }</div>
                    <div className="sw-hotline">Email: { CONSTANTS.SW_INFOR.EMAIL }</div>
                    <div className="sw-address"><I18n text={"sw_address_label"} />: { CONSTANTS.SW_INFOR.ADDRESS }</div>
                </div>
                <div className="sw-social">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                    <a href="https://www.facebook.com/sworldmultimedia" className="fa fa-facebook"></a>
                    <a href="https://www.youtube.com/channel/UCzod695AmgnnUeKSSUZ-t1A" className="fa fa-youtube"></a>
                    <a href="https://www.linkedin.com/company/s-worldmultimedia" className="fa fa-linkedin"></a>
                    <a href="https://www.instagram.com/lifeatsworld" className="fa fa-instagram"></a>
                </div>
            </div>
        </div>
    );
}

export default FooterPage;