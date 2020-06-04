import React from "react";
import Header from "./components/header/header";
import Navigation from './share/navigation/navigation';
import Footer from "./components/footer/footer";
import {AppProvider, Card, ChoiceList, Layout, Page} from "@shopify/polaris";
import ErrorPage from "./components/errorPage";
import {I18nextProvider, useTranslation} from "react-i18next";
import I18n from "./components/i18nComponent";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ScrollTopArrow from './share/scroll-handler/scroll-handler';
import './App.scss';
import Container from "@material-ui/core/Container";
import queryString from 'query-string'
import ScrollTop from "./components/scrollToTop";

const App = () => {
    return (
        <div className="App">
            <Toolbar id="back-to-top-anchor" />
            <Header />
            <Navigation />
            <Footer />
            <ScrollTop>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#00FFFF" width="40" height="30" viewBox="0 0 24 24">
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
                </Fab>
            </ScrollTop>
        </div>
    )
};

export default App;
