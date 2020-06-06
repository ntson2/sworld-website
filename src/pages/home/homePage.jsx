import React, {Component, useState} from "react";
import VideoBackground from '../../components/video-background/videoBackground';
import ServicesList from "../../components/services-list/services-list";
import ClientList from '../../components/client-list/clientList';
import '../home/homePage.scss';
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from '../../i18n'; // initialized i18next instance
import ReactPlayer from "react-player";
import {MediaCard, Modal, TextContainer, VideoThumbnail} from "@shopify/polaris";
import ServicesOfferedComponent from "../../components/servicesOfferedComponent";
import I18n from "../../components/i18nComponent";
import MemberList from "../../components/member-list/memberList";
import Story from "../../components/story/story";

// function HomePage() {
//     const {t, i18n} = useTranslation();
//     const [showreelShowed, setShowreelShowed] = useState(false);

//     console.log("HomePage is using language " + i18n.language);

//     const handleShowreedlOpen = event => {
//         console.log("Showreel is shown");
//         setShowreelShowed(true);
//     };
//     const handleShowreedlClose = event => {
//         setShowreelShowed(false);
//     };

//     const showreel = <Modal
//         open={showreelShowed}
//         onClose={handleShowreedlClose}
//         title="S-World"
//     >
//         <iframe src="https://player.vimeo.com/video/422216652" width="640" height="360" frameBorder="0"
//                 allow="autoplay; fullscreen" allowFullScreen></iframe>
//     </Modal>

//     const mediaCard = <MediaCard
//         portrait
//         primaryAction={{
//         }}
//         url="google.com"
//     >
//         <VideoThumbnail
//             videoLength={100}
//             thumbnailUrl="https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
//             onClick={handleShowreedlOpen}
//         />
//     </MediaCard>

//     const aboutUs = <div>
//     <section className="small-padding">
//         <div className="wrapper">

//             <h3 className="floatleft">
//                 <I18n text={"about_us_title"} />
//             </h3>
//             </div>
//     </section>
//         <div>
//             <I18n text={"about_us_content"}/>
//         </div>
//     </div>


//     const logo = <img src={"logos.png"} className="image"/>
//     const mainPage = <div>{mediaCard} <ServicesOfferedComponent /> {logo} {aboutUs}</div>

//     return showreelShowed ? showreel : mainPage;
// }

const HomePage = (props) => {
    return (
        <div className="HomePage">
            <VideoBackground />
            <ServicesList />
            <ClientList />
            <MemberList />
            <Story />
        </div>
    )
}

export default HomePage;