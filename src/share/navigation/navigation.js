import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsPage from '../../pages/products/productsPage';
import HomePage from '../../pages/home/homePage';
import ForumPage from '../../pages/forum/forumPapge';
import AboutPage from '../../pages/about/aboutPage'
import ContactPage from '../../pages/contact/contactPage';

const Navigation = () => {
    return (
        <Switch>
            <Route path="/home" exact>
                <HomePage />
            </Route>
            <Route path="/products" exact>
                <ProductsPage />
            </Route>
            <Route path="/forum" exact>
                <ForumPage />
            </Route>
            <Route path="/about" exact>
                <AboutPage />
            </Route>
            <Route path="/contact" exact>
                <ContactPage />
            </Route>
        </Switch>
    )
}

export default Navigation;
