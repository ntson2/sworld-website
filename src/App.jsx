import React from "react";
import Header from "./components/header/header";
import Navigation from './share/navigation/navigation';
import Footer from "./components/footer/footer";
import ScrollTopArrow from './share/scroll-handler/scroll-handler';
import GlobalStyle from "./share/global-style/global-style";
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <ScrollTopArrow />
            <Header />
            <Navigation />
            <Footer />
            <GlobalStyle />
        </div>
    )
};

export default App;
