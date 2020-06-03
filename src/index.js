import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.jsx";
import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import "@shopify/polaris/styles.css";
import {AppProvider} from "@shopify/polaris";
import enTranslations from '@shopify/polaris/locales/en.json';

// const routing = (
//     <AppProvider i18n={enTranslations}>

//     <Router>
//             <div>
//                 <Switch>
//                     <Route exact path = "/" component={() => <Redirect to="/home" />}/>
//                     <Route path = "/home" component={(props) => <App tabName="home" history={props.history}/>}  />
//                     <Route path = "/about" component={(props) => <App tabName="about" history={props.history}/>} />
//                     <Route path = "/products" component={(props) => <App tabName="products" history={props.history}/>} />
//                     <Route path = "/forum" component={(props) => <App tabName="forum" history={props.history}/>} />
//                     <Route path = "/contact" component={(props) => <App tabName="contact" history={props.history}/>} />
//                 </Switch>
//             </div>
//         </Router>
//     </AppProvider>
// );

ReactDOM.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>,
    document.getElementById("root"));
