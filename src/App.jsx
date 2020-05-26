import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProductsPage from "./pages/productsPage";
import ForumPage from "./pages/forumPapge";
import React, {useEffect, useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import {AppProvider, Card, ChoiceList, Layout, Page, Tabs} from "@shopify/polaris";
import ErrorPage from "./components/errorPage";
import {I18nextProvider, useTranslation} from "react-i18next";
import ContactPage from "./pages/contactPage";
import I18n from "./components/i18nComponent";

const tabToIdMap = {"home" : 0, "products": 1, "forum": 2, "about": 3, "contact": 4};
const idToTabMap = ["home", "products", "forum", "about", "contact"];
const idToPage = [<HomePage />, <ProductsPage/>, <ForumPage/>, <AboutPage/>, <ContactPage/>];

function App(props) {

    const tabId = tabToIdMap[props.tabName];

    console.log("Opening a tab from : " + tabId);

    const [selected, setSelected] = useState(tabId);

    const handleTabChange = selectedTabId => {
        console.log("Main tab is selected: " + selectedTabId );
        setSelected(selectedTabId);
        props.history.push( idToTabMap[selectedTabId])
    };

    const tabContent = () => {
        console.log("Rendering tab content: " + selected);

        return idToPage[selected];
    };

    const tabs = [
        {
            id: 'home',
            content: <I18n text="home_tab" />,
            panelID: 'home-content',
        },
        {
            id: 'products',
            content: <I18n text="products_tab" />,
            panelID: 'products-content',
        },
        {
            id: 'forum',
            content: <I18n text="forum_tab" />,
            panelID: 'forum-content',
        },
        {
            id: 'about',
            content: <I18n text="about_tab" />,
            panelID: 'about-content',
        },
        {
            id: 'contact',
            content: <I18n text="contact_tab" />,
            panelID: 'contact-content',
        },
    ];

    return (
        <Card>
            <Header/>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} >
                <Card.Section>
                    {tabContent()}
                </Card.Section>
            </Tabs>
            <Footer/>
        </Card>
    );
};

export default App;
