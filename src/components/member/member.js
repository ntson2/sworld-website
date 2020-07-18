import React from 'react';
import '../member/member.scss'
import I18n from '../../components/i18nComponent';
import * as UTIL from '../../share/util/util';
import * as _ from 'lodash';

const Member = (props) => {

    const memberData = _.cloneDeep(props.dataMember);
    // const memberImg = UTIL.getBackgroundImgStyle(memberData._img, {}, false);
    // const memberAvatar = UTIL.getBackgroundImgStyle(memberData._img, {}, false);

    const firstListStyle = props.isFirstlist ? true : false;

    return (
        <div className="Member">
            <img
                className="sw-member-img"
                src={memberData._img}
                alt={memberData._imgAlt}
            />
            <div className="sw-advisor-overlay-content">
                <div className="sw-member-infor">
                    <h2>{<I18n text={memberData._name}/>}</h2>
                    <span>{<I18n text={memberData._role}/>}</span>
                    {/* <p>{<I18n text={memberData._decs}/>}</p> */}
                </div>
                <div className="sw-member-social">
                    <a href={memberData._fbLink}><i className="fa fa-facebook"></i></a>
                    <a href={memberData._liLink}><i className="fa fa-linkedin"></i></a>
                    <a href={memberData._twlink}><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Member;