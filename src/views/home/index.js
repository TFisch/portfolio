import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as Styles from './styles.sc.js';
import { animated, useSpring, useTransition } from 'react-spring';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/icons/right-arrow.svg';

const HomeView = () => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(true);
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
  const { opacity } = useSpring({ opacity: isVisible ? 0 : 1 });
  const [topShrunk, shrinkTop] = useState(false);
  const { display } = useSpring({ display: topShrunk ? 'none' : 'block' });

  const calc = (o) => {
    if (isVisible === true) {
      if (o < 1150) {
        return `translateY(${o * 0.08}vh)`;
      } else if (o >= 1150 && o < 1200) {
        return `translateY(${1150 * 0.08}vh)`;
      } else if (o >= 1446) {
        setVisible(false);
        return `translateY(${1150 * 0.08}vh)`;
      } else {
        setVisible(false);
        return `translateY(${1150 * 0.08}vh)`;
      }
    }
    shrinkTop(true);
    return `translateY(${1150 * 0.08}vh)`;
  };

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;

    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const checkIt = () => {
    console.log('check it');
  };

  return (
    <Styles.homeView
      ref={ref}
      className="home-view"
      imgurl={process.env.PUBLIC_URL + '/bogomil.jpg'}
    >
      <animated.div
        className="well-anim"
        style={{
          width: '100vw',
          height: '500px',
          transform: offset.interpolate(calc),
          zIndex: 300,
          top: '180px',
          position: 'absolute'
        }}
      >
        <Styles.headLine>Well,</Styles.headLine>
      </animated.div>
      <Styles.scrollableTop style={{ display }}></Styles.scrollableTop>
      <Styles.topSection className="top-content-container">
        <Styles.subHeadline style={{ opacity }} bottom="57px">
          Hello There!
        </Styles.subHeadline>
        <Styles.summary>
          My name is Tim Fischer and I'm a JavaScript Developer. I like building
          websites and applications that are fast, accessible and intuitive.
        </Styles.summary>
      </Styles.topSection>
      <Link
        to="/projects"
        onClick={checkIt}
        style={{ textDecoration: 'none', color: '#000' }}
      >
        <Styles.linkTab>
          <Styles.tabCopy>Check Out Some of My Work</Styles.tabCopy>
          <img src={rightArrow} style={{ width: '15px', paddingLeft: '4px' }} />
        </Styles.linkTab>
      </Link>
      {/* <Styles.midSection></Styles.midSection> */}
    </Styles.homeView>
  );
};

export default HomeView;
