import React, { useEffect, useRef, useState } from 'react';
import * as Styles from './styles.sc.js';
import { animated, useSpring, useTransition } from 'react-spring';

const HomeView = () => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(true);
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
  const { opacity } = useSpring({ opacity: isVisible ? 0 : 1 });

  const calc = (o) => {
    console.log(o);
    if (isVisible === true) {
      if (o < 516) {
        return `translateY(${o * 0.08}vh)`;
      } else if (o >= 516 && o < 530) {
        return `translateY(${516 * 0.08}vh)`;
      } else {
        setVisible(false);
        return `translateY(${516 * 0.08}vh)`;
      }
    }
    return `translateY(${516 * 0.08}vh)`;
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
    <Styles.homeView
      ref={ref}
      className="home-view"
      imgUrl={process.env.PUBLIC_URL + '/bogomil.jpg'}
    >
      <Styles.topSection
        className="top-content-container"
        imgUrl={process.env.PUBLIC_URL + '/bogomil.jpg'}
      >
        <Styles.subHeadline style={{ opacity }} bottom="57px">
          Hello There!
        </Styles.subHeadline>
        {/* <Styles.subHeadline style={{ opacity }}>There!</Styles.subHeadline> */}
      </Styles.topSection>
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
      <Styles.midSection></Styles.midSection>
    </Styles.homeView>
  );
};

export default HomeView;
