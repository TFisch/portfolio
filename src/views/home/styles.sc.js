import styled from 'styled-components';
import { animated } from 'react-spring';

export const homeView = styled(animated.main)`
  height: auto;
  width: 100vw;
  overflow: scroll;
  position: relative;
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
  margin: ${(props) => (props.margin ? props.margin : '0 10px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 'normal')};
  font-family: ${(props) => (props.italic ? 'Tex Italic' : 'Tex Bold')};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '0')};
`;

export const summary = styled.p`
  text-align: left;
  font-family: 'Montreal Light';
  color: white;
  position: ${(props) => (props.position ? props.position : 'relative')};
  padding: ${(props) => (props.padding ? props.padding : '20px 10px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};
  line-height: 1.3;
`;
