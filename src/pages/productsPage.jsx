import React from "react";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from '../i18n'; // initialized i18next instance

function ProductsPage() {
    const {t, i18n} = useTranslation();

    console.log("ProductsPage is using language " + i18n.language);

    return <div/>;
}

export default ProductsPage;
