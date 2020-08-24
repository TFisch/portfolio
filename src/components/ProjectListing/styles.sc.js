import styled from 'styled-components';

export const projectListing = styled.div`
  height: 250px;
  width: 400px;
  border: solid white 1px;
  margin: auto;
  background: url(${(props) => props.imgurl});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: center;
  display: flex;
  align-items: flex-end;
  border-radius: 8px;
`;

export const projectBanner = styled.div`
  height: 50px;
  border-top: solid black 1px;
  background: white;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const bannerCopy = styled.h2`
  font-family: 'Montreal Bold Italic';
  font-size: 25px;
`;
