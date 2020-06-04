import React from 'react';
import Clients from '../../share/model/client-list';
import * as UTIL from '../../share/util/util';
import '../../components/client-list/clientList.scss';

const listLogoStyle = Clients.map(client => UTIL.getBackgroundImgStyle(client._img, client._name));

console.log(listLogoStyle);

const ClientList = () => {
    return (
        <div className="ClientList">
            <div className="sw-client-list-label">Our Clients</div>
            <div className="sw-client-list-sub-label">From all over the world</div>
            <div className="sw-client-list">
                {listLogoStyle.map(logoStyle => <div className="sw-client" style={logoStyle}></div>)}
            </div>
        </div>
    )
}

export default ClientList;