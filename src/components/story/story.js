import React, {useState, useRef, useEffect} from 'react';
import '../story/story.scss';
import I18n from '../i18nComponent';
import * as UTIL from '../../share/util/util';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";

const teamImg = process.env.PUBLIC_URL + '/img/sw_team.JPG';
const teamImgStyle = UTIL.getBackgroundImgStyle(teamImg, { width: '100%', height: '100%'}, false);

const quotesTop = process.env.PUBLIC_URL + '/icon/sw-top-quotes.svg';
const topQuotesStyle = UTIL.getBackgroundImgStyle(quotesTop, { width: '3rem', height: '3rem'});

const quotesBottom = process.env.PUBLIC_URL + '/icon/sw-bottom-quotes.svg';
const bottomQuotesStyle = UTIL.getBackgroundImgStyle(quotesBottom, { width: '3rem', height: '3rem'});

const Story = () => {

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('body');

    const PopUpWrapper = styled.div`

    `;

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

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
                        <div className="sw-quotes-text">
                            <I18n text={"sw_our_story"} numWord={600}></I18n> ....
                        </div>
                        <div className="sw-quotes-logo-bttom" style={bottomQuotesStyle}></div>
                    </div>
                    <div onClick={handleClickOpen('body')} className="sw-read-more-btn">Read more </div>
                    <PopUpWrapper>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                            <DialogContent>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    tabIndex={-1}
                                >
                                    <I18n text={"sw_our_story"}></I18n>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </PopUpWrapper>
                </div>
            </div>
        </div>
    )
}

export default Story;