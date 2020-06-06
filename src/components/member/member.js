import React from 'react';
import '../member/member.scss'
import I18n from '../../components/i18nComponent';
import * as UTIL from '../../share/util/util';
import * as _ from 'lodash';

const Member = (props) => {

    const memberData = _.cloneDeep(props.dataMember);
    const memberImg = UTIL.getBackgroundImgStyle(memberData._img, {}, false);
    const memberAvatar = UTIL.getBackgroundImgStyle(memberData._img, {}, false);

    const firstListStyle = props.isFirstlist ? true : false;

    return (
        <div className="Member" style={firstListStyle ? { width: `calc(100% - 25px)`} : {width: `calc(30% - 25px)`}}>
            <div className="sw-member-genaral">
                <div className="sw-member-img" style={memberImg}></div>
                <h2>{<I18n text={memberData._name}/>}</h2>
                <span className="sw_carier">{<I18n text={memberData._carier}/>}</span>
                <span>{<I18n text={memberData._role}/>}</span>
            </div>
            <div className="sw-member-social">
                <a href={memberData._fbLink}><i className="fa fa-facebook"></i></a>
                <a href={memberData._liLink}><i className="fa fa-linkedin"></i></a>
                <a href={memberData._twlink}><i className="fa fa-twitter"></i></a>
            </div>
            <div className="sw-member-detail">
                <div className="sw-member-img-avatar" style={memberAvatar}></div>
                <div className="sw-member-infor">
                    <h2>{<I18n text={memberData._name}/>}</h2>
                    <span>{<I18n text={memberData._role}/>}</span>
                </div>
                <p>{<I18n text={memberData._decs}/>}</p>
            </div>
        </div>
    )
}

export default Member;