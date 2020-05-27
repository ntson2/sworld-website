import React from "react";
import StickyFooter from 'react-sticky-footer';
import "./footer.css"

const FooterPage = () => {
    return (
        <StickyFooter
            bottomThreshold={50}
            normalStyles={{
                backgroundColor: "#F8F9F9",
                padding: "2rem"
            }}
            stickyStyles={{
                backgroundColor: "rgba(255,255,255,.8)",
                padding: "2rem"
            }}
        >

            <div align="center">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <a href="https://www.facebook.com/ntson" className="fa fa-facebook"></a>
                <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                <a href="https://www.linkedin.com/in/wilson-ngo-7984ba34/" className="fa fa-linkedin"></a>
                <a href="https://www.youtube.com/" className="fa fa-instagram"></a>
            </div>
        </StickyFooter>
    );
}

export default FooterPage;