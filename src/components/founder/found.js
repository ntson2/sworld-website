import React from 'react';
import * as UTIL from'../../share/util/util';
import '../founder/founder.scss';
import I18n from '../i18nComponent';
import * as _ from 'lodash';


const Founder = (props) => {
    const founderData = _.cloneDeep(props);
    const founderImg = UTIL.getBackgroundImgStyle(founderData._img, {width: '100%', height: '100%'}, false);

    return (
        <div className="Founder">
            <div className="sw-img-wrapper">
                <div className="sw-founder-img" style={founderImg}></div>
            </div>
            <div className="sw-founder-infor">
                <div className="founder-header">
                    <h3 className="sw-founder-name">
                        <I18n text={founderData._name} />
                    </h3> 
                    <h5 className="sw-founder-role">
                        <I18n text={founderData._role}/>
                    </h5>
                </div>
                <div className="founder-container">
                    <div className="founder-sort-decs">
                        <I18n text={founderData._decs}/> 
                    </div>
                </div>
                <div className="founder-carier"></div>
            </div>
        </div>
    )
}

export default Founder;