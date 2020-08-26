import React from 'react';
import { CarouselImage } from '../../components/styles.sc';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import * as styles from './styles.sc';
const project = (props) => {
  const handleDragStart = () => {
    console.log('start drag');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true
  };

  return (
    <styles.ProjectView imgurl={process.env.PUBLIC_URL + '/bogomil.jpg'}>
      <styles.SliderWrapper>
        <Slider {...settings}>
          <img src="http://placekitten.com/350/300" />

          <img src="http://placekitten.com/350/300" />

          <img src="http://placekitten.com/350/300" />

          <img src="http://placekitten.com/350/300" />
        </Slider>
      </styles.SliderWrapper>
      <styles.ProjectContentWrapper>
        <styles.headLine> {props.projectData.title}</styles.headLine>
        <styles.overviewCopy>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </styles.overviewCopy>
      </styles.ProjectContentWrapper>
      <h2>Tech Stack</h2>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </styles.ProjectView>
  );
};

export default project;
