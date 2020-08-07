import styled from 'styled-components';

export const navBarContainer = styled.div`
  height: 50px;
  width: 100%;
  background: #1f2833;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 111;
`;

export const navContentsWrapper = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  padding: 0 1px;
  cursor: pointer;
  margin-left: 5px;
`;

export const lineTop = styled.div`
  height: 3px;
  border-radius: 25px;
  border: solid #d4d4dc 1px;
  margin: 2px 0px;
  background: #1d1e22;
  width: 28px;
`;

export const lineMid = styled.div`
  height: 3px;
  border-radius: 25px;
  border: solid #d4d4dc 1px;
  margin: 2px 0px;
  background: #1d1e22;
  width: 32px;
`;

export const lineBottom = styled.div`
  height: 3px;
  border-radius: 25px;
  border: solid #d4d4dc 1px;
  margin: 2px 0px;
  background: #1d1e22;
  width: 22px;
`;
