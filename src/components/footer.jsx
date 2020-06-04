import React from "react";
import * as CONSTANTS from '../share/constants/constants';
import "./footer.scss"

const FooterPage = () => {
    return (
        <div className="Footer">
            <div className="sw-social">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <a href="https://www.facebook.com/ntson" className="fa fa-facebook"></a>
                <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                <a href="https://www.linkedin.com/in/wilson-ngo-7984ba34/" className="fa fa-linkedin"></a>
                <a href="https://www.youtube.com/" className="fa fa-instagram"></a>
            </div>
            <div className="sw-contact">
    <div className="sw-hotline">Hotline: { CONSTANTS.SW_INFOR.HOTLINE }</div>
    <div className="sw-address">Address: { CONSTANTS.SW_INFOR.ADDRESS }</div>
            </div>
        </div>
    );
}

export default FooterPage;