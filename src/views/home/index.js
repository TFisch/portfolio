import React, { useEffect, useRef, useState } from 'react';
import * as Styles from './styles.sc.js';
import { animated, useSpring, useTransition } from 'react-spring';

const HomeView = () => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(true);
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const calc = (o) => {
    if (o < 1004) {
      return `translateY(${o * 0.08}vh)`;
    } else {
      // this won't work b/c im trying to useState in a Fn
      setVisible(false);
      return `translateY(${1012 * 0.08}vh)`;
    }
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

  return (
    <Styles.homeView ref={ref} className="home-view">
      <Styles.topSection
        className="top-content-container"
        imgUrl={process.env.PUBLIC_URL + '/bogomil.jpg'}
      ></Styles.topSection>
      <animated.div
        className="well-anim"
        style={{
          width: '100vw',
          height: '500px',
          transform: offset.interpolate(calc),
          zIndex: 300,
          top: '340px',
          position: 'absolute'
        }}
      >
        <Styles.headLine>Well,</Styles.headLine>
      </animated.div>
      {/* Trying to fade this component when above animated.div is right above it */}
      <Styles.subHeadline fade={isVisible}>Hello There!</Styles.subHeadline>
      {/***************************************/}
    </Styles.homeView>
  );
};

export default HomeView;
