import {I18nextProvider, useTranslation} from "react-i18next";
import React from "react";

function I18n(props) {
    const {t, i18n} = useTranslation();

    return <I18nextProvider i18n={i18n}>
        {t(props.text)}
    </I18nextProvider>
}

export default I18n;