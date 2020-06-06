import React from 'react';
import '../member-list/memberList.scss';
import I18n from '../i18nComponent';
import Member from '../member/member';
import Listmember from '../../share/model/member-list';

const MemberList = () => {

    const listAdvisor = Listmember.splice(1, 6);

    return (
        <div className="MemberList">
            <div className="sw-header-wrapper">
                <div className="sw-label-wrapper">
                    <div className="sw-member-list-label"><I18n text={"our_member"}/></div>
                    <div className="sw-member-list-sub-label">We're more than media team</div>
                </div>
            </div>
            <div className="sw-founder"></div>
            <div className="sw-members">
                {listAdvisor.map(member => <Member {...member} />)}
            </div>
        </div>
    )
}

export default MemberList;