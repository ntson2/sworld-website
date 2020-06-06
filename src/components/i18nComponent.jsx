import {I18nextProvider, Trans, useTranslation} from "react-i18next";
import React from "react";

function I18n(props) {
    const {t} = useTranslation();

    return t(props.text);
}

export default I18n;