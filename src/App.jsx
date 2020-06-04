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
 //   console.log("property ", props);

    /*
        // Getting language from query string, eg: s-worldmedia.com/home?language=en
        console.log(props);
        const params = queryString.parse(props.location.search);
        var language = params.language;

        console.log("language is ", language);
        // Change the language
        const {i18n} = useTranslation();

        if (!i18n.language) {
            if (!language || !allowedLanguages[language]) {
                language = defaultLanguage;
            }
            i18n.changeLanguage(language);
        } else {
            if (!language || i18n.language != language) {
                props.history.push({
                    search: `?language=${i18n.language}`
                });
            }
        }
    */
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

/*
function App(props) {
    const classes = useStyles();

    const tabId = tabToIdMap[props.tabName];

    // Getting language from query string, eg: s-worldmedia.com/home?language=en
    console.log(props);
    const params = queryString.parse(props.location.search);
    var language = params.language;

    // Change the language
    const {i18n} = useTranslation();

    console.log(`Does i18n contains ${allowedLanguages[language]}`);

    if (!i18n.language) {
        if (!language || !allowedLanguages[language]) {
            language = defaultLanguage;
        }
        i18n.changeLanguage(language);
    } else {
        if (!language || i18n.language != language) {
            props.history.push({
                search: `?language=${i18n.language}`
            });
        }
    }

    console.log(`Opening a tab from : ${tabId} with language ${language}`);

    const [selected, setSelected] = useState(tabId);

    const handleTabChange = (event, selectedTabId) => {
        console.log("Main tab is selected: " + selectedTabId );
        setSelected(selectedTabId);
        props.history.push( {
            pathname: idToTabMap[selectedTabId],
            search: `?language=${language}`
        });
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={5}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    function renderedTab() {
        return (
            <Paper className={classes.root}>
                <Tabs
                    value={selected}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label={<I18n text="home_tab" />} />
                    <Tab label={<I18n text="products_tab" />} />
                    <Tab label={<I18n text="forum_tab" />} />
                    <Tab label={<I18n text="about_tab" />} />
                    <Tab label={<I18n text="contact_tab" />} />
                </Tabs>
                <TabPanel value={selected} index={0}>
                    <HomePage />
                </TabPanel>
                <TabPanel value={selected} index={1}>
                    <ProductsPage/>
                </TabPanel>
                <TabPanel value={selected} index={2}>
                    <ForumPage/>
                </TabPanel>
                <TabPanel value={selected} index={3}>
                    <AboutPage/>
                </TabPanel>
                <TabPanel value={selected} index={4}>
                    <ContactPage/>
                </TabPanel>
            </Paper>
        );
    }

    return (
        <Card>
            <Toolbar id="back-to-top-anchor" />
            <Header language={language}/>
            <Container>
                {renderedTab()}
            </Container>
            <Footer/>

            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#00FFFF" width="40" height="30" viewBox="0 0 24 24">
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
                </Fab>
            </ScrollTop>
        </Card>
    );
};
*/
export default App;
