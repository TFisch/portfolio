import React from 'react';
import * as styles from './styles.sc';

const CarouselImage = ({ href, onDragStart }) => {
  return <styles.CarouselImage src={href} onDragStart={onDragStart} />;
};

export default CarouselImage;
