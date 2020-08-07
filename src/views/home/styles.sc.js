import styled from 'styled-components';

export const homeView = styled.div`
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  padding-top: 300px;
  color: ${(props) => props.theme.colors.persianGreen};
`;

export const headLine = styled.h1`
  font-family: 'Cunia';
  font-size: 80px;
  color: #fff;
  text-align: left;
  margin: 0 10px;
`;

export const subHeadline = styled.h1`
  font-family: 'Cunia';
  font-size: 40px;
  color: #fff;
  text-align: left;
  margin: 0 5px;
`;
