import React from 'react';
import '../member-list/memberList.scss';
import I18n from '../i18nComponent';
import Member from '../member/member';
import Listmember from '../../share/model/member-list';
import * as _ from 'lodash';
import * as UTIL from '../../share/util/util';
import Founder from '../founder/found';

const MemberList = () => {
    const listData = _.cloneDeep(Listmember);
    const founder = listData.splice(0, 1);
    console.log(founder);
    
    const advisorList = listData;
    return (
        <div className="MemberList">
            <div className="sw-header-wrapper">
                <div className="sw-label-wrapper">
                    <div className="sw-member-list-label"><I18n text={"our_member"}/>.</div>
                    <div className="sw-member-list-sub-label"><I18n text={"sw_about_us_sologan"}/></div>
                </div>
                <div className="sw-devider"></div>
            </div>
            <Founder {...founder[0]}/> 

            <div className="sw-advisor-label">
                <div className="main-label">
                    <I18n text="our_advisors_title"/>
                </div>
                <div className="sub-label">
                    S-world thanks all of you
                </div>
            </div>

            <div className="sw-second-list">
                {advisorList.map(member => <Member {...{dataMember: member}} />)}
            </div>
        </div>
    )
}

export default MemberList;