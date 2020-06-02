import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProductsPage from "./pages/productsPage";
import ForumPage from "./pages/forumPapge";
import React, {useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import {Card} from "@shopify/polaris";
import ContactPage from "./pages/contactPage";
import I18n from "./components/i18nComponent";
import PropTypes from 'prop-types';
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from "@material-ui/core/Container";

const tabToIdMap = {"home" : 0, "products": 1, "forum": 2, "about": 3, "contact": 4};
const idToTabMap = ["home", "products", "forum", "about", "contact"];

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const backToTopStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function ScrollTop(props) {
    const { children } = props;
    const classes = backToTopStyles();
    const trigger = useScrollTrigger();

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function App(props) {
    const classes = useStyles();

    const tabId = tabToIdMap[props.tabName];

    console.log("Opening a tab from : " + tabId);

    const [selected, setSelected] = useState(tabId);

    const handleTabChange = (event, selectedTabId) => {
        console.log("Main tab is selected: " + selectedTabId );
        setSelected(selectedTabId);
        props.history.push( idToTabMap[selectedTabId])
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
            <Header/>
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

export default App;
