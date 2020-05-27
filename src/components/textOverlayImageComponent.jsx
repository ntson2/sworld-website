import './textOverlayImageComponent.css';
import React from "react";

function TextOverlayImage(props) {
    return <div className="container">
        <img src={props.image} className="image"/>
            <div className="middle">
                {props.content}
            </div>
    </div>;
}

export default TextOverlayImage;