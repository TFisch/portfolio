import styled from 'styled-components';

export const linkTab = styled.a`
  background: white;
  height: 40px;
  margin: auto;
  width: 137px;
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: ${(props) => (props.top ? props.top : 'auto')};
  bottom: ${(props) => (props.bottom ? props.bottom : 'auto')};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-family: 'Montreal Bold Italic';
  z-index: 99999;
`;

export const tabCopy = styled.p``;

export const tabArrow = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  right: 2px;
  width: 15px;
`;
