import styled from 'styled-components';

export const ProjectView = styled.div`
  /* background: url(${(props) => props.imgurl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  background-color: white;
  padding-top: 20px;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export const headLine = styled.h1`
  font-family: 'Montreal Bold Italic';
  /* font-size: 50px; */
  color: #000;
  text-align: left;
  margin: 0 0.5rem;
  padding: 0.5rem 0;
  /* text-shadow: 2px 1px #0f2130; */
`;

export const overviewCopy = styled.p`
  background: #fff;
  margin: 0 0.5rem;
  line-height: 1.25;
`;

export const ProjectContentWrapper = styled.div`
  background: #fff;
  height: auto;
  width: 100%;
`;
