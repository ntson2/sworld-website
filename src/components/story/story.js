import React from 'react';
import '../story/story.scss';
import I18n from '../i18nComponent';
import * as UTIL from '../../share/util/util';
import {useTranslation} from "react-i18next";

const teamImg = process.env.PUBLIC_URL + '/img/sw_team.JPG';
const teamImgStyle = UTIL.getBackgroundImgStyle(teamImg, { width: '100%', height: '100%'}, false);

const quotesTop = process.env.PUBLIC_URL + '/icon/sw-top-quotes.svg';
const topQuotesStyle = UTIL.getBackgroundImgStyle(quotesTop, { width: '3rem', height: '3rem'});

const quotesBottom = process.env.PUBLIC_URL + '/icon/sw-bottom-quotes.svg';
const bottomQuotesStyle = UTIL.getBackgroundImgStyle(quotesBottom, { width: '3rem', height: '3rem'});

const Story = () => {
    const {i18n} = useTranslation();

    const ourStory = i18n.language === 'en' ? <div>
        On a full moon early Summer day, S-World Multimedia was founded…
        <br />
        Dear our beloved partners,
        <br />
        The journey embarks on the letter “S” with many meanings: “S” is the shape of Vietnam, a rare country that takes the shape of a Latin letter.  Covered by the East Sea and centered in the large Pacific Ocean, S – Viet is small yet remarkable on the world map, embracing the national pride in many Vietnamese souls.
        <br />
        S is also the consonant that begins many sentimental yet familiar words: the symbol of Lotus (hoa Sen), of the Pearl of the Orient - Saigon, of the dear mother’s breast milk (Sữa mẹ), of the idyllic countryside (Sông quê), of the precious streams of slit (Phù Sa), enabling the growth of rice paddy fields and the civilization which followed, and a vital part of Vietnam: The Paracel Islands (Hoàng Sa) and Spratly Islands (Trường Sa).
        <br />
        S is the first letter of Skyview, where you and I can stand on the tallest ground of Vietnam with the ambition of reaching new heights. Hence, Landmark 81 is where S-World Multimedia is based.
        <br />
        S is also the first letter of the founder’s name – Ms. Soan, a difficult yet memorable name. Soan in Vietnamese stands for a simple delicate flower that blooms in white and purple, bearing lively and inspirational qualities. Ms. Soan had the opportunity to grow from the paddy fields, travel to the metropolitan city of Saigon and was destined to “travel the world” to fully understand “the small world”. At the age of 30, she embraced her “be myself” journey and wants to send out the message: The World is small if only we connect, new values will be created once we can grow closer by connecting with each other.
        <br />
        S-W = Vietnam and the World: It’s the journey for Vietnam to step into the world with both distinctive and common values. After many decades, though the S-shaped country has gone through many historical milestones and challenges under the rising digital age, it still persists, persevers, and takes pride in itself matching with the world, together forming new values.
        <br />
        Embracing connecting values and creating unique new values that derived from multimedia will be the path of S-World. Not only in Vietnam, but we will also bring the Vietnamese spirit and talents to step into the world confidently.
        <br />
        Ho Chi Minh City, June 07th, 2020 (Lunar date: April 16, 2020)
    </div> : <div>
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
        của biểu tượng hoa Sen, của hòn ngọc viễn đông "Sài Gòn" </div>;

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
                <div className="sw-bg-container">
                    <div className="sw-team-img" style={teamImgStyle}></div>
                </div>
                <div className="sw-story-quotes">
                    <div className="quotes">
                        <div className="sw-quotes-logo-top" style={topQuotesStyle}></div>
                        {ourStory}
                        <div className="sw-quotes-logo-bttom" style={bottomQuotesStyle}></div>
                    </div>
                    <div className="sw-read-more-btn">Read more </div>
                </div>
            </div>
        </div>
    )
}

export default Story;