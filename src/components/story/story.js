import React from 'react';
import '../story/story.scss';
import I18n from '../i18nComponent';
import * as UTIL from '../../share/util/util';

const teamImg = process.env.PUBLIC_URL + '/img/sw_team.JPG';
const teamImgStyle = UTIL.getBackgroundImgStyle(teamImg, { width: '80%', height: '35rem'}, false);

const quotesTop = process.env.PUBLIC_URL + '/icon/sw-top-quotes.svg';
const topQuotesStyle = UTIL.getBackgroundImgStyle(quotesTop, { width: '3rem', height: '3rem'});

const quotesBottom = process.env.PUBLIC_URL + '/icon/sw-bottom-quotes.svg';
const bottomQuotesStyle = UTIL.getBackgroundImgStyle(quotesBottom, { width: '3rem', height: '3rem'});

const Story = () => {
    return (
        <div className="Story">
            <div className="sw-label-wrapper">
                <div className="sw-main-label">
                    {<I18n text={"sw_our_story_label"}/>}
                </div>
                <div className="sw-sub-label">
                    {<I18n text={"sw_our_story_sub_label"}/> }
                </div>
            </div>
            <div className="sw-story-container">
                <div className="sw-story-quotes">
                    <div className="quotes">
                        <div className="sw-quotes-logo-top" style={topQuotesStyle}></div>
                        Nhân một ngày trăng tròn khi đất trời giao mùa xuân hạ, S-World Multimedia được ra đời...
                        <br />
                        Gửi lời chào đến thế giới!
                        <br />
                        Chúng tôi bắt đầu hành trình bằng chữ S nhiều ý nghĩa: 
                        <br />
                        Đó là dáng hình Việt Nam - một trong những quốc gia hiếm hoi được trải mình trên 1 ký tự Latin duyên dáng.
                        Được biển Đông rộng lớn - một dòng mạch của Thái Bình Dương bao la, ôm trọn và bao bọc.
                        S - Việt tuy nhỏ nhắn, nhưng ấn tượng trên bản đồ thế giới, đã gieo trong trái tim mỗi người dân Việt niềm tự tôn dân tộc
                        <br />
                        Chữ S còn là thanh âm của những ý nghĩa thiêng liêng mà vô cùng gần gũi: 
                        của biểu tượng hoa Sen, của hòn ngọc viễn đông "Sài Gòn"
                        <div className="sw-quotes-logo-bttom" style={bottomQuotesStyle}></div>
                    </div>
                    <div className="sw-read-more-btn">Read more </div>
                </div>
                <div className="sw-bg-container">
                    <div className="sw-team-img" style={teamImgStyle}></div>
                </div>
            </div>
        </div>
    )
}

export default Story;