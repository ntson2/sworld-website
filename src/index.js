import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.jsx";
import { BrowserRouter } from 'react-router-dom'
import "@shopify/polaris/styles.css";

ReactDOM.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>,
document.getElementById("root"));
