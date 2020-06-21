import React from 'react';
import '../founder/founder.scss';
import I18n from '../i18nComponent';
import * as _ from 'lodash';

const Founder = (props) => {
    const founderData = _.cloneDeep(props);

    return (
        <div className="Founder">
            <div className="sw-img-wrapper">
                <img
                    className="sw-founder-img"
                    src={founderData._img}
                    alt={founderData._alt}
                />
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