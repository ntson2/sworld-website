import React from 'react';
import '../video-background/videoBackground.scss'

const VideoBackground = () => {
    return (
        <div className="VideoBackground">
            <video autoplay="autoPlay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoBackground;