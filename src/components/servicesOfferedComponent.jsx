import I18n from "./i18nComponent";
import React, {useState} from "react";
import {Layout, MediaCard, Modal, TextContainer} from "@shopify/polaris";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@material-ui/core/Grid";

function OneProductCard(title, image, description, modalChanged) {
    return <MediaCard
        portrait
        title={<I18n text={title}/>}
        primaryAction={{
            content: <I18n text="learn_more_text"/>,
            onAction: modalChanged,
        }}
        description={<I18n text={description}/>}
        popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    >
        <img
            alt=""
            width="100%"
            height="100%"
            style={{
                objectFit: 'cover',
                objectPosition: 'center',
            }}
            src={image}
        />
    </MediaCard>
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

    return <div> {detailModal}

            <Grid container spacing={3}>
                <Grid item xs={3}>

                {OneProductCard("production_text",
                    "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
                    "production_text", detailProductClicked)}
                </Grid>
                <Grid item xs={3}>
                    {OneProductCard("partnership_text",
                    "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
                    "partnership_text", detailPartnershipClicked)}
                </Grid>
                <Grid item xs={3}>
                    {OneProductCard("international_connection_text",
                    "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
                    "international_connection_text", detailInternationalConnectionClicked)}
                </Grid>
                <Grid item xs={3}>
                    {OneProductCard("events_text",
                    "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
                    "events_text", detailEventsClicked)}
                </Grid>
            </Grid>
    </div>
}

export default ServicesOfferedComponent;