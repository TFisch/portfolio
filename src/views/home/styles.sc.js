import styled from 'styled-components';
import { animated } from 'react-spring';

export const homeView = styled(animated.div)`
  height: 9000px;
  width: 100vw;
  overflow: scroll;
  position: relative;
  color: black;
  background: url(${(props) => props.imgUrl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const scrollableTop = styled(animated.div)`
  width: 100%;
  height: 500px;
  background: white;
`;

export const topSection = styled.div`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 388px;
  width: 100%;
  position: absolute;
  margin-top: 500px;
  background: white;
  top: 416px;
  left: 0;
  color: black;
  display: flex;
  align-items: flex-end;
  margin-top: 50vh;
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
  font-family: 'Montreal Bold Italic';
  font-size: 78px;
  color: #000;
  text-align: left;
  margin: 0 10px;
  top: 0;
  margin-left: 14px;
  text-shadow: 2px 2px white;
`;

export const subHeadline = styled(animated.h2)`
  display: 'block';
  font-family: 'Montreal Bold Italic';
  font-size: 70px;
  color: #000;
  text-align: center;
  margin: 0 5px;
  line-height: 0.8;
  position: absolute;
  bottom: 227px;
  margin-left: 14px;
  /* transition: opacity 0.5s; */
  /* opacity: 1; */
`;

export const summary = styled.p`
  text-align: left;
  font-family: 'Montreal Light';
  font-size: 25px;
  margin: 1em 1em 3em;
  color: #000;
`;

export const bioTab = styled.div`
  background: white;
  height: 50px;
  margin: auto;
  width: 200px;
  text-align: center;
  margin-top: 1200px;
`;
