import React, {Component, useState} from "react";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from '../i18n'; // initialized i18next instance
import ReactPlayer from "react-player";
import {MediaCard, Modal, TextContainer, VideoThumbnail} from "@shopify/polaris";
import ServicesOfferedComponent from "../components/servicesOfferedComponent";

function HomePage() {
    const {t, i18n} = useTranslation();
    const [showreelShowed, setShowreelShowed] = useState(false);

    console.log("HomePage is using language " + i18n.language);

    const handleShowreedlOpen = event => {
        console.log("Showreel is shown");
        setShowreelShowed(true);
    };
    const handleShowreedlClose = event => {
        setShowreelShowed(false);
    };

    const showreel = <Modal
        open={showreelShowed}
        onClose={handleShowreedlClose}
        title="S-World"
    >
        <iframe src="https://player.vimeo.com/video/422216652" width="640" height="360" frameBorder="0"
                allow="autoplay; fullscreen" allowFullScreen></iframe>
    </Modal>

    const mediaCard = <MediaCard
        portrait
        primaryAction={{
        }}
        url="google.com"
    >
        <VideoThumbnail
            videoLength={100}
            thumbnailUrl="https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
            onClick={handleShowreedlOpen}
        />
    </MediaCard>

    const logo = <img src={"logos.png"} className="image"/>
    const mainPage = <div>{mediaCard} <ServicesOfferedComponent /> {logo}</div>

    return showreelShowed ? showreel : mainPage;
}

export default HomePage