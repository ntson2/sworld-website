import React from 'react';
import Service from '../service/service';
import serviceList from '../../share/model/service-list';
import I18n from '../i18nComponent';

import '../services-list/servicesList.scss';

const servicesList = serviceList;

const ServicesList = () => {
    return (
        <div className="ServicesList">
            <div className="sw-label-wrapper">
                <div className="sw-main-label"><I18n text={"our_services"}/></div>
                <div className="sw-sub-label"><I18n text={"our_services_sologan"}/></div>
                <span className="sw-divider"></span>
            </div>
                <div className="service-wrapper">
                    {servicesList.map(service => <Service {...service} key={service._id}  />)}
                </div>
        </div>
    )
}

export default ServicesList;