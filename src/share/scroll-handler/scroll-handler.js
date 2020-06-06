import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { red } from '@material-ui/core/colors';
import zIndex from '@material-ui/core/styles/zIndex';

export const useScrollHandler = () => {
    const [scroll, setScroll] = useState(1)

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY < 700
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