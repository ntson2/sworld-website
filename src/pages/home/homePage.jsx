import React from "react";
import VideoBackground from '../../components/video-background/videoBackground';
import ServicesList from "../../components/services-list/services-list";
import ClientList from '../../components/client-list/clientList';
import '../home/homePage.scss';
import MemberList from "../../components/member-list/memberList";
import Story from "../../components/story/story";

const HomePage = () => {
    return (
        <div className="HomePage">
            <VideoBackground />
            <ServicesList />
            <ClientList />
            <MemberList />
            <Story />
        </div>
    )
};

export default HomePage;