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
      <styles.headLine> {props.projectData.title}</styles.headLine>
      <styles.SliderWrapper>
        <Slider {...settings}>
          <img src="http://placekitten.com/300/300" />

          <img src="http://placekitten.com/300/300" />

          <img src="http://placekitten.com/300/300" />

          <img src="http://placekitten.com/300/300" />
        </Slider>
      </styles.SliderWrapper>
      <h2>Overview</h2>
      <p>Here's a summary of the project</p>
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
