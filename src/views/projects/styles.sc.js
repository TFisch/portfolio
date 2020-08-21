import styled from 'styled-components';

export const projectsView = styled.div`
  height: 9000px;
  width: 100vw;
  overflow: scroll;
  position: relative;
  color: black;
  background: url(${(props) => props.imgurl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const headLine = styled.h1`
  font-family: 'Montreal Light Italic';
  font-size: 50px;
  color: #fff;
  text-align: left;
  margin: 0 10px;
  margin-left: 14px;
  text-shadow: 4px 4px black;
  text-decoration: underline;
`;

export const projectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
`;
