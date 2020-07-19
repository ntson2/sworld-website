import React, {useState, useEffect} from 'react';
import {FaArrowUp, FaGratipay} from 'react-icons/fa';
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
      height: 35,
      width: 35,
      display: showScroll ? 'flex' : 'none',
      position: 'fixed',
      bottom: 20,
      right: 20,
      opacity: 0.4,
      zIndex: 10,
      background: 'gray',
      padding: 6,
      '&:hover': {
        opacity: 1
      }
  }

  return (
    <FaArrowUp
        onClick={scrollTop}
        style={scrollBtnStyleinline}
    />
  );
}

export default ScrollTopArrow;