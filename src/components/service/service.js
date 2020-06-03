import React from 'react';

import '../service/service.scss';

const Service = (props) => {
    const listData = props.listData;
    return (
        <div className="Service">
            {/* TODO: add nav link to wrap this container */}
            <div className="sw-service-wrapper">
                <div className="sw-service-icon-wrapper">
                    <div className="sw-icon">
                        Icon
                    </div>
                </div>
                <div className="sw-service-content-wrapper">
                    <div className="sw-service-name">{listData.name}</div>
                    <div className="sw-service-decs">{listData.decs}</div>
                    <div className="sw-service-arrow">==></div>
                </div>
            </div>
        </div>
    )
}

export default Service;