import React from "react";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from '../i18n'; // initialized i18next instance

function AboutPage() {
    const { t,i18n } = useTranslation();

    console.log("AboutPage is using language " + i18n.language);

    return <I18nextProvider i18n={i18n}>{t("introduction")}</I18nextProvider>;
}

export default AboutPage;