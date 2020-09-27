import styled from 'styled-components';
import { animated } from 'react-spring';

export const homeView = styled(animated.div)`
  height: 9000px;
  width: 100vw;
  overflow: scroll;
  position: relative;
  color: black;
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
  font-size: 50px;
  color: white;
  text-align: left;
  margin: 0 10px;
  margin-left: 14px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 'normal')};
  font-family: ${(props) => (props.italic ? 'Tex Italic' : 'Tex Bold')};
`;

export const summary = styled.p`
  text-align: left;
  font-family: 'Montreal Light';
  background: white;
  font-size: 20px;
  color: #000;
  padding: 20px 10px;
  margin-top: 100px;
`;

export const linkTab = styled.div`
  background: white;
  height: 50px;
  margin: auto;
  width: 240px;
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 1200px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-family: 'Montreal Bold Italic';
  z-index: 99999;
`;

export const tabCopy = styled.p``;
