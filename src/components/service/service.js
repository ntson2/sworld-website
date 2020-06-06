import React, { useState } from 'react';
import '../service/service.scss';
import * as UTIL from '../../share/util/util';

const swArrow = process.env.PUBLIC_URL + '/icon/sw-next-white.svg';


const Service = (props) => {
    // State hover
    const [hoverState, setHoverState] = useState(false);
    // List data from list service
    const listData = props.listData;
    // Additional for style service icon
    const listOtherStyle = {
        width: '5rem',
        height: '5rem'
    }
    // Style for icon
    const iconStyle = !hoverState ?
        UTIL.getBackgroundImgStyle(listData._icon[0], {...listOtherStyle}) :
        UTIL.getBackgroundImgStyle(listData._icon[1], {...listOtherStyle});
    // Style for arrow icon
    const arrowStyle = !hoverState ?
        UTIL.getBackgroundImgStyle(swArrow) :
        UTIL.getBackgroundImgStyle(swArrow, {width: '4rem', height: '4rem'});

    return (
        <div className="Service"       
            onMouseEnter={() => setHoverState(true)}    
            onMouseLeave={() => setHoverState(false)}
        >
            <div className="sw-service-wrapper">
                <div className="sw-service-icon-wrapper">
                    <div
                        className="sw-icon"
                        style={iconStyle}    
                    ></div>
                </div>
                <div className="sw-service-content-wrapper">
                    <div className="sw-service-name">{listData._name}</div>
                    {listData._decs.map(dec => <div className="sw-service-decs">{dec}</div>)}
                    <div className="sw-service-arrow" style={arrowStyle}></div>
                </div>
            </div>
        </div>
    )
}

export default Service;