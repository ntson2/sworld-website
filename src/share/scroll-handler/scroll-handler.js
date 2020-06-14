import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import * as _ from 'lodash';


export const useScrollHandler = (props) => {
    const [scroll, setScroll] = useState(1)
    const offsetY = _.cloneDeep(props);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY < offsetY;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }
        document.addEventListener("scroll", onScroll)
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    }, [scroll, setScroll])
    return scroll
}

export const useChangeWindowMode = () => {
  const [isLanscapeMode, setLandscapeMode] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const isPortrait = window.matchMedia("(orientation: portrait)");
    const handleResizeWindow = (isPortrait) => {
      setLandscapeMode(!isPortrait.matches);
    }
    isPortrait.addListener(handleResizeWindow);

    return () => {
      isPortrait.removeListener(handleResizeWindow);
    }
  }, [isLanscapeMode, setLandscapeMode])

  return isLanscapeMode;
}

const ScrollTopArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {

    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

  const scrollBtnStyleinline = {
      height: 50,
      width: 50,
      display: showScroll ? 'flex' : 'none',
      position: 'fixed',
      bottom: 30,
      right: 30,
      opacity: 0.9,
      zIndex: 10,
      color: '#e9204f',
      '&:hover': {
          opacity: 1
      }
  }

  return (
    <FaArrowCircleUp
        onClick={scrollTop}
        style={scrollBtnStyleinline}
    />
  );
}

export default ScrollTopArrow;