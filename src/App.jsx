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
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ScrollTopArrow from './share/scroll-handler/scroll-handler';
import './App.scss';
import Container from "@material-ui/core/Container";
import queryString from 'query-string'
import ScrollTop from "./components/scrollToTop";

const App = () => {
    return (
        <div className="App">
            <ScrollTopArrow />
            <Header />
            <Navigation />
            <Footer />
        </div>
    )
};

export default App;
