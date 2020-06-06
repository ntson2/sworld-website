import React from "react";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from '../../i18n'; // initialized i18next instance
import MemberList from '../../components/member-list/memberList';

const ProductsPage = () => {

    return (
        <div className="ProductsPage">
            <MemberList />
        </div>
    )
}

export default ProductsPage;
