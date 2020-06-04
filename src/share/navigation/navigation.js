import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsPage from '../../pages/products/productsPage';
import HomePage from '../../pages/home/homePage';
import ForumPage from '../../pages/forum/forumPapge';
import AboutPage from '../../pages/about/aboutPage'
import ContactPage from '../../pages/contact/contactPage';
import queryString from "query-string"
import {I18nextProvider, useTranslation} from "react-i18next";

const allowedLanguages = {"en":true, "vn":true};
const defaultLanguage = "vn";

function processLanguageQueryString(props, i18n) {
    console.log(props);

    const params = queryString.parse(props.location.search);
    var language = params.language;

    console.log("language is ", language);
    // Change the language

    if (!language) {
        props.history.push({
            search: `?language=${i18n.language}`
        });
    } else if (!i18n.language) {
        if (!language || !allowedLanguages[language]) {
            language = defaultLanguage;
        }
        i18n.changeLanguage(language);
    } else {
        if (i18n.language != language) {
            props.history.push({
                search: `?language=${i18n.language}`
            });
        }
    }

    console.log("language is changed to", i18n.language);
}

function PageList(props) {
    const {i18n} = useTranslation();

    processLanguageQueryString(props, i18n);

    switch (props.pageName) {
        case "home": return <HomePage/>
        case "products": return <ProductsPage/>
        case "forum": return <ForumPage/>
        case "about": return <AboutPage/>
        case "contact": return <ContactPage/>
    }
};

const Navigation = () => {
    return (
        <Switch>
            <Route path = "/home" component={(props) => <PageList location={props.location} history={props.history} pageName="home"/>}  />
            <Route path = "/products" component={(props) => <PageList location={props.location} history={props.history} pageName="products"/>}  />
            <Route path = "/forum" component={(props) => <PageList location={props.location} history={props.history} pageName="forum"/>}  />
            <Route path = "/about" component={(props) => <PageList location={props.location} history={props.history} pageName="about"/>}  />
            <Route path = "/contact" component={(props) => <PageList location={props.location} history={props.history} pageName="contact"/>}  />
        </Switch>
    )
}

export default Navigation;
