import React from 'react';
import Service from '../service/service';
import serviceList from '../../share/model/service-list';

import '../services-list/servicesList.scss';

const servicesList = serviceList;

const ServicesList = () => {
    return (
        <div className="ServicesList">
            <div className="sw-service-list-label">Our Services</div>
            <div className="sw-service-list-sub-label">We work with you. Not for you</div>
                <div className="service-wrapper">
                    {servicesList.map(item => <Service listData = { item }/>)}
                </div>
        </div>
    )
}

export default ServicesList;