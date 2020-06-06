import React, { Component } from 'react';
import Clients from '../../share/model/client-list';
import * as UTIL from '../../share/util/util';
import '../../components/client-list/clientList.scss';
import I18n from '../i18nComponent';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as CONSTANT from '../../share/constants/constants';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
          ...style,
          display: "block",
          background: "transparent",
        }}
      onClick={onClick}
    />
  );
}

const teamImg = process.env.PUBLIC_URL + '/img/sw-team.jpg';
const imgTeamStyle = UTIL.getBackgroundImgStyle(teamImg);

const sliderSetting = {

    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

const SliderWrap = styled.div`
    .slick-slider {
        .slick-arrow {
            &:before {
                font-size:  4rem;
            }
        }
        .slick-list {
            .slick-track {
                .slick-slide {
                    .sw-logo {
                        height: 15rem;
                        margin: 2rem 0;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                    .sw-logo-antv {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.ANTV});
                    }
                    .sw-logo-everest {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.EVEREST});
                    }
                    .sw-logo-fbnc {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.FBNC});
                    }
                    .sw-logo-forbes {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.FORBES});
                    }
                    .sw-logo-htv {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.HTV});
                    }
                    .sw-logo-ktdt {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.KTDT});
                    }
                    .sw-logo-la34 {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.LA34});
                    }
                    .sw-logo-logigear {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.LOGIGEAR});
                    }
                    .sw-logo-metran {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.METRAN});
                    }
                    .sw-logo-succulen {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.SUCCULEN});
                    }
                    .sw-logo-thvl {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.THVL})};
                    }
                    .sw-logo-vnexpress {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.VNEXPRESS});
                    }
                    .sw-logo-vov {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.VOV});
                    }
                    .sw-logo-vtc {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.VTC});
                    }
                    .sw-logo-zing {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.ZING});
                    }
                    .sw-logo-vtv {
                        background-image: url(${CONSTANT.PARTNER_IMG_SRC.VTV});
                    }
                }
            }
        }
    } 
`
;

const ClientList = () => {
    return (
        <div className="ClientList" style={imgTeamStyle}>
            <div className="sw-label-wrapper">
                <div className="sw-main-label"><I18n text={"our_partner"}/></div>
                <div className="sw-sub-label">From all over the world</div>
            </div>
                <div className="sw-client-list">
                    <SliderWrap>
                        <Slider {...sliderSetting}>
                            <div className="sw-logo sw-logo-antv"></div>
                            <div className="sw-logo sw-logo-everest"></div>
                            <div className="sw-logo sw-logo-fbnc"></div>
                            <div className="sw-logo sw-logo-forbes"></div>
                            <div className="sw-logo sw-logo-htv"></div>
                            <div className="sw-logo sw-logo-ktdt"></div>
                            <div className="sw-logo sw-logo-la34"></div>
                            <div className="sw-logo sw-logo-logigear"></div>
                            <div className="sw-logo sw-logo-metran"></div>
                            <div className="sw-logo sw-logo-succulen"></div>
                            <div className="sw-logo sw-logo-thvl"></div>
                            <div className="sw-logo sw-logo-vnexpress"></div>
                            <div className="sw-logo sw-logo-vov"></div>
                            <div className="sw-logo sw-logo-vtc"></div>
                            <div className="sw-logo sw-logo-vtv"></div>
                            <div className="sw-logo sw-logo-zing"></div>
                        </Slider>
                    </SliderWrap>
                </div>
        </div>
    )
}

export default ClientList;