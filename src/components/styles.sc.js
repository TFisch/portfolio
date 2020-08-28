import styled from 'styled-components';

//Styled components for generic components

export const CarouselImage = styled.div`
  background: url(${(props) => props.imgurl});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 200px;
  height: auto;
  width: 100px;
  background-color: #202933;
`;

export const Tag = styled.div`
  display: inline-block;
  font-family: 'Montreal Bold';
  border: solid white 2px;
  background: white;
  color: black;
  padding: 2px;
  border-radius: 8px;
  width: auto;
  height: 15px;
`;
