import React, { useState } from 'react';
import '../service/service.scss';
import * as UTIL from '../../share/util/util';
import I18n from '../i18nComponent';
import * as _ from 'lodash';

const Service = (props) => {
    // State hover
    const [hoverState, setHoverState] = useState(false);
    // List data from list service
    const listData = _.cloneDeep(props);
    // Style for arrow icon

    return (
        <div className="Service"       
            onMouseEnter={() => setHoverState(true)}    
            onMouseLeave={() => setHoverState(false)}
        >
            <div className="sw-service-wrapper">
                <div className="sw-service-img">
                    <img src={listData._img} alt={<I18n text={listData._name}/>}/>
                </div>
                <div className="sw-service-overlay"></div>
                <div className="sw-service-content-overlay">
                    <div className="sw-service-name"><I18n text={listData._name}/></div>
                    {listData._decs.map(dec => <div key={dec._id}  className="sw-service-decs"><I18n text={dec._text}/></div>)}
                </div>
                <div className="sw-service-footer-overlay"></div>
            </div>
        </div>
    )
}

export default Service;