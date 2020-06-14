import React, {useCallback, useState} from "react";
import {AppProvider, Button, Form, FormLayout, Frame, Modal, Page, TextContainer, TextField} from "@shopify/polaris";
import I18n from "../../components/i18nComponent";
import {useTranslation} from "react-i18next";

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function FeedbackForm() {
    const { i18n } = useTranslation();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const [errorModalActive, setErrorModalActive] = useState(false);
    const [successModalActive, setSuccessModalActive] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState();
    const [errorMessagePhone, setErrorMessagePhone] = useState();
    const [errorMessageName, setErrorMessageName] = useState();
    const [errorMessageMessage, setErrorMessageMessage] = useState();

    const handleSuccessModalChange = () => {
        console.log("closing modal");
        setSuccessModalActive(false)
    };

    const handleErrorModalChange = () => {
        setErrorModalActive(false)
    };

    const errorModal =
        <Modal open={errorModalActive} onClose={handleErrorModalChange} >
            <Modal.Section>
                <TextContainer>
                    <p><I18n text={"contact_submit_error"}/></p>
                </TextContainer>
            </Modal.Section>
        </Modal>;
    const successModal =
        <Modal open={successModalActive} onClose={handleSuccessModalChange}
               primaryAction={{
                   content: <I18n text={"close_button"}/>,
                   onAction: handleSuccessModalChange,
               }}
        >
            <Modal.Section>
                    <I18n text={"contact_submit_success"}/>
            </Modal.Section>
        </Modal>;

    const validateInput = () => {
        let isValid = true;

        if (!name || name.trim() == '') {
            setErrorMessageName("Name is required");
            isValid = false;
        }
        if (!message || message.trim() == '') {
            setErrorMessageMessage("Message is required");
            isValid = false;
        }
        if (phone && isNaN(phone)) {
            setErrorMessagePhone('Not a valid number');
            isValid = false;
        }
        if (!validateEmail(email)) {
            setErrorMessageEmail('Not a valid email address');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit =  () => {

        console.log("name ", name);
        console.log("phone ", phone);
        console.log("email ", email);
        console.log("message ", message);

        if (validateInput()) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fullName: name, email: email, phone: phone, message: message, language: i18n.language})
            };

            try {
                const url = process.env.BACKEND_ENPOINT;
                const response = fetch(url + '/items', requestOptions);
                setEmail('');
                setPhone('');
                setName('');
                setMessage('');
                setSuccessModalActive(true);
            } catch (e) {
                setErrorModalActive(true);

            }
        }

    };

    const handleNameChange = useCallback(
        (value) => {
            setName(value)
            setErrorMessageName(null);
        },
        [],
    );

    const handlePhoneChange = useCallback(
        (value) => {
            setPhone(value);
            setErrorMessagePhone(null)
        }, [],
    );

    const handleEmailChange = useCallback(
        (value) => {
            setEmail(value);
            setErrorMessageEmail(null)
        },
                [],
    );

    const handleMessageChange = useCallback(
        (value) => {
            setMessage(value);
            setErrorMessageMessage(null)
        },
                [],
    );

    const handleClearButtonEmail = useCallback(() => setEmail(''), []);
    const handleClearButtonPhone = useCallback(() => setPhone(''), []);
    const handleClearButtonName = useCallback(() => setName(''), []);

    return (
        <Page
            title={<I18n text={"contact_title"}/>}
        >
            {errorModal}
            {successModal}
        <Form onSubmit={handleSubmit}>
            <FormLayout>
                <TextField
                    value={name}
                    label={<I18n text={"contact_name"}/>}
                    onChange={handleNameChange}
                    clearButton
                    onClearButtonClick={handleClearButtonName}
                    error={errorMessageName}
                />
                <TextField
                    value={phone}
                    label={<I18n text={"contact_phone"}/>}
                    onChange={handlePhoneChange}
                    clearButton
                    onClearButtonClick={handleClearButtonPhone}
                    error={errorMessagePhone}
                />
                <TextField
                    value={email}
                    label={<I18n text={"contact_email"}/>}
                    onChange={handleEmailChange}
                    clearButton
                    onClearButtonClick={handleClearButtonEmail}
                    error={errorMessageEmail}
                />
                <TextField
                    value={message}
                    label={<I18n text={"contact_message"}/>}
                    onChange={handleMessageChange}
                    multiline={10}
                    error={errorMessageMessage}
                />
                <Button submit primary>{<I18n text={"contact_submit"}/>}</Button>
            </FormLayout>
        </Form>
        </Page>
    );
}

function ContactPage() {
    return (
        <AppProvider>

        <div className="ClientList">
            <div className="sw-client-list">
                <Frame>
                    {FeedbackForm()}
                </Frame>
            </div></div>
        </AppProvider>

    )

}

export default ContactPage;