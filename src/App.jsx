import React, {useEffect, useState, useStyles} from "react";
import Header from "./components/header/header";
import Navigation from './share/navigation/navigation';
import Footer from "./components/footer";
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

const App = () => {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <Footer />
            <ScrollTopArrow className="scrollToTop" />
        </div>
    )
}

export default App;
