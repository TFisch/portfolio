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

  const checkIt = () => {
    console.log('check it');
  };

  return (
    <Styles.homeView ref={ref} className="home-view">
      <Styles.headLine italic={true}>Well,</Styles.headLine>
      <Styles.headLine lineHeight=".85">Hello There.</Styles.headLine>
      <Styles.summary>
        My name is Tim and I'm a JavaScript Developer. Most of my experience is
        with front-end development, but I'm curretly expanding my proficencies
        as a full stack developer. Some of my skills include building things,
        fixing things, and especially, breaking things!
      </Styles.summary>
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
