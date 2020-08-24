import styled from 'styled-components';

export const ProjectView = styled.div`
  background: url(${(props) => props.imgurl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const SliderWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: solid pink 1px;
  margin: auto;
`;

export const headLine = styled.h1`
  font-family: 'Montreal Light Italic';
  /* font-size: 50px; */
  color: #fff;
  text-align: left;
  margin: 0 10px;
  margin-left: 14px;
  text-shadow: 4px 4px black;
  text-decoration: underline;
`;
