import React from 'react';
import Clients from '../../share/model/client-list';
import * as UTIL from '../../share/util/util';
import '../../components/client-list/clientList.scss';
import I18n from '../i18nComponent';

const listLogoStyle = Clients.map(client => UTIL.getBackgroundImgStyle(client._img, client._name));

const ClientList = () => {
    return (
        <div className="ClientList">
            <div className="sw-client-list-label"><I18n text={"our_partner"}/></div>
            <div className="sw-client-list-sub-label">From all over the world</div>
            <div className="sw-client-list">
                {listLogoStyle.map(logoStyle => <div className="sw-client" style={logoStyle}></div>)}
            </div>
        </div>
    )
}

export default ClientList;