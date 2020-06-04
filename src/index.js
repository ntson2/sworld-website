import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.jsx";
import { BrowserRouter } from 'react-router-dom'
import "@shopify/polaris/styles.css";

const routing = (

    <AppProvider i18n={enTranslations}>

        <Router>
            <div>
                <Switch>
                    <Route exact path = "/" component={() => <Redirect to="/home" />}/>
                    <Route path = "/home" component={(props) => <App tabName="home" history={props.history} location={props.location}/>}  />
                    <Route path = "/about" component={(props) => <App tabName="about" history={props.history} location={props.location}/>} />
                    <Route path = "/products" component={(props) => <App tabName="products" history={props.history} location={props.location}/>} />
                    <Route path = "/forum" component={(props) => <App tabName="forum" history={props.history} location={props.location}/>} />
                    <Route path = "/contact" component={(props) => <App tabName="contact" history={props.history} location={props.location}/>} />
                </Switch>
            </div>
        </Router>
    </AppProvider>
);

ReactDOM.render(routing, document.querySelector('#root'));
