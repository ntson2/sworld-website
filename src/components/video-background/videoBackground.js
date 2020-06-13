import React, { useState } from 'react';
import '../video-background/videoBackground.scss';
import { useScrollHandler, useChangeWindowMode } from "../../share/scroll-handler/scroll-handler";
import * as UTIL from '../../share/util/util';

const vdSrc = process.env.PUBLIC_URL + '/video/vd-background.mp4';
const muted = process.env.PUBLIC_URL + '/icon/mute.svg';
const mutedStyle = UTIL.getBackgroundImgStyle(muted, {width: '1.5rem', height: '1.5rem'}, false);
const speaker = process.env.PUBLIC_URL + '/icon/speaker.svg';
const speakerStyle = UTIL.getBackgroundImgStyle(speaker, {width: '1.5rem', height: '1.5rem'}, false);

const VideoBackground = () => {
    const isLandscapeMode = useChangeWindowMode();
    const scroll = useScrollHandler(800);
    const [muted, setMuted] = useState(true);

    const onToggeMuted = () => {

        if (muted) {
            setMuted(false);
        } else {
            setMuted(true);
        }
    }

    if (scroll !== 1 && !scroll && !muted) {
        setMuted(true);
    }

    return (
        <div className={`VideoBackground  ${isLandscapeMode ? 'bg-full-height' : 'bg-normal'}`}>
            <div className="sw-mute-wrapper">
                <div className="button-muted" onClick={onToggeMuted} style={muted ? speakerStyle : mutedStyle}></div>
            </div>
            <video id="vd" autoPlay="autoplay" muted={muted} loop="loop">
                <source src="https://sworldmedia-website.s3.amazonaws.com/video-background/SHOWREEL.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoBackground;