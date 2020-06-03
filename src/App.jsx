import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/about/aboutPage";
import ProductsPage from "./pages/products/productsPage";
import ForumPage from "./pages/forum/forumPapge";
import React, {useEffect, useState} from "react";
import Header from "./components/header/header";
import Navigation from './share/navigation/navigation';
import Footer from "./components/footer";
import {AppProvider, Card, ChoiceList, Layout, Page} from "@shopify/polaris";
import ErrorPage from "./components/errorPage";
import {I18nextProvider, useTranslation} from "react-i18next";
import ContactPage from "./pages/contact/contactPage";
import I18n from "./components/i18nComponent";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

// const tabToIdMap = {"home" : 0, "products": 1, "forum": 2, "about": 3, "contact": 4};
// const idToTabMap = ["home", "products", "forum", "about", "contact"];

// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1,
//     },
// });

// function App(props) {
//     const classes = useStyles();

//     const tabId = tabToIdMap[props.tabName];

//     console.log("Opening a tab from : " + tabId);

//     const [selected, setSelected] = useState(tabId);

//     const handleTabChange = (event, selectedTabId) => {
//         console.log("Main tab is selected: " + selectedTabId );
//         setSelected(selectedTabId);
//         props.history.push( idToTabMap[selectedTabId])
//     };

//     function TabPanel(props) {
//         const { children, value, index, ...other } = props;

//         return (
//             <div
//                 role="tabpanel"
//                 hidden={value !== index}
//                 id={`simple-tabpanel-${index}`}
//                 aria-labelledby={`simple-tab-${index}`}
//                 {...other}
//             >
//                 {value === index && (
//                     <Box p={5}>
//                         <Typography>{children}</Typography>
//                     </Box>
//                 )}
//             </div>
//         );
//     }

//     function renderedTab() {
//         return (
//             <Paper className={classes.root}>
//                 <Tabs
//                     value={selected}
//                     onChange={handleTabChange}
//                     indicatorColor="primary"
//                     textColor="primary"
//                     centered
//                 >
//                     <Tab label={<I18n text="home_tab" />} />
//                     <Tab label={<I18n text="products_tab" />} />
//                     <Tab label={<I18n text="forum_tab" />} />
//                     <Tab label={<I18n text="about_tab" />} />
//                     <Tab label={<I18n text="contact_tab" />} />
//                 </Tabs>
//                 <TabPanel value={selected} index={0}>
//                     <HomePage />
//                 </TabPanel>
//                 <TabPanel value={selected} index={1}>
//                     <ProductsPage/>
//                 </TabPanel>
//                 <TabPanel value={selected} index={2}>
//                     <ForumPage/>
//                 </TabPanel>
//                 <TabPanel value={selected} index={3}>
//                     <AboutPage/>
//                 </TabPanel>
//                 <TabPanel value={selected} index={4}>
//                     <ContactPage/>
//                 </TabPanel>
//             </Paper>
//         );
//     }
// };
    const App = () => {
        return (
            <div className="App">
                <Header />
                <Navigation />
                <Footer />
            </div>
        )
    }


export default App;
