import styled from 'styled-components';
import { animated } from 'react-spring';

export const homeView = styled.div`
  height: 9000px;
  width: 100vw;
  overflow: scroll;
  position: relative;
  color: white;
  background: url(${(props) => props.imgUrl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const topSection = styled.div`
  background: url(${(props) => props.imgUrl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 791px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  color: ${(props) => props.theme.colors.persianGreen};
`;

export const midSection = styled.div`
  background: #0f2130;
  margin: 0 auto;
  width: 100%;
  height: 600px;
  padding-top: 78px;
  text-align: left;
`;

export const headLine = styled.h1`
  font-family: 'Cunia';
  font-size: 78px;
  color: #fff;
  text-align: left;
  margin: 0 10px;
  top: 0;
  margin-left: 14px;
`;

export const subHeadline = styled(animated.h2)`
  display: 'block';
  font-family: 'Cunia';
  font-size: 70px;
  color: #fff;
  text-align: center;
  margin: 0 5px;
  line-height: 0.8;
  /* transition: opacity 0.5s; */
  /* opacity: 1; */
`;
