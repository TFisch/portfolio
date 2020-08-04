import styled from 'styled-components';

export const homeView = styled.div`
  background: #251e3e;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  padding-top: 300px;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 20px;
  color: ${(props) => props.theme.colors.persianGreen};
`;
