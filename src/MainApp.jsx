import React, {Component, useState} from 'react';
import './App.css';
import '@shopify/polaris/styles.css';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import {ChoiceList} from "@shopify/polaris";
import { useTranslation } from "react-i18next";

function TestLang(props) {
    const { t , i18n} = useTranslation();
    const [selected,setSelected] = useState("en");

    const handleLangChange = event => {
        let newlang = event[0];
        console.log("selected val is ", newlang);
        i18n.changeLanguage(newlang);
        setSelected(newlang)
    };

    const langlist = <ChoiceList
        title="language"
        choices={[
            {label: 'english', value: 'en'},
            {label: 'Tiếng Việt', value: 'vn'},
        ]}
        selected={selected}
        onChange={handleLangChange}
    />;

    return <I18nextProvider i18n={i18n}>
        {t("introduction")}
        {langlist}
    </I18nextProvider>;
}

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            dataSource: "",
            lang: "vn",
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://mnlk6yozri.execute-api.us-east-1.amazonaws.com/dev/backend');
            let responseJson = await response.json();
            this.setState(
                {
                    isLoading: false,
                    dataSource: responseJson
                },
                function() {}
            );
        } catch (error) {
            console.error(error);
        }
    }

    render() {

        let dataSource = this.state.dataSource;
        const element = <div> {dataSource.greetings} </div>;


        if (this.state.isLoading) {
            return <div>Loading...</div>;
        } else {
            return <div><TestLang /> {element} </div>;
        }
    }
}
export default MainApp;