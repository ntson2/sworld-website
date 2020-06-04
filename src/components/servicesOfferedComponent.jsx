import I18n from "./i18nComponent";
import React, {useState} from "react";
import {DisplayText, Heading, Layout, MediaCard, Modal, TextContainer} from "@shopify/polaris";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@material-ui/core/Grid";
import TextOverlayImage from "./textOverlayImageComponent";
import Card from "@material-ui/core/Card";

function OneProductCard(title, image, description) {
    return <Card><TextOverlayImage image={image} content={<I18n text={description}/>}/>
        <DisplayText size="medium"><I18n text={title}/></DisplayText></Card>
}

function ServicesOfferedComponent() {
    const [detailModalText, setDetailModalText] = useState();
    const [detailModalTitle, setDetailModalTitle] = useState();
    const [detailModalOpen, setDetailModalOpen] = useState(false);

    const detailProductClicked = () => {
        setDetailModalText("production_detail");
        setDetailModalTitle("production_detail");
        setDetailModalOpen(true);
    };

    const detailPartnershipClicked = () => {
        setDetailModalText("partnership_detail");
        setDetailModalTitle("partnership_detail");
        setDetailModalOpen(true);
    };

    const detailInternationalConnectionClicked = () => {
        setDetailModalText("international_connection_detail");
        setDetailModalTitle("international_connection_detail");
        setDetailModalOpen(true);
    };

    const detailEventsClicked = () => {
        setDetailModalText("events_detail");
        setDetailModalTitle("events_detail");
        setDetailModalOpen(true);
    };

    const detailModalClose = () => {
        setDetailModalOpen(false);
    };

    const detailModal = <Modal
        open={detailModalOpen}
        onClose={detailModalClose}
        title={<I18n text={detailModalTitle} />}
    >
        <Modal.Section>
            <TextContainer>
                <p>
                    <I18n text={detailModalText} />
                </p>
            </TextContainer>
        </Modal.Section>
    </Modal>

    return  <div>
    <div>
            <Grid container spacing={7}>
                <Grid item xs={3} spacing={2}>

                {OneProductCard("production_text",
                    "https://miro.medium.com/max/4800/1*32h8ts3A-7XNr6A4Js87ng.jpeg",
                    "production_detail")}
                </Grid>
                <Grid item xs={3} spacing={2}>
                    {OneProductCard("partnership_text",
                    "test-image2.jpg",
                    "partnership_detail")}
                </Grid>
                <Grid item xs={3} spacing={2}>
                    {OneProductCard("international_connection_text",
                    "test-image2.jpg",
                    "international_connection_detail")}
                </Grid>
                <Grid item xs={3} spacing={2}>
                    {OneProductCard("events_text",
                    "test-image2.jpg",
                    "events_detail")}
                </Grid>
            </Grid>
    </div></div>
}

export default ServicesOfferedComponent;