import styled from 'styled-components';

export const navBarContainer = styled.div`
  height: 50px;
  width: 100%;
  background: brown;
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
  border: solid pink 1px;
  margin: 2px 0px;
  background: black;
  width: 28px;
`;

export const lineMid = styled.div`
  height: 3px;
  border-radius: 25px;
  border: solid pink 1px;
  margin: 2px 0px;
  background: black;
  width: 32px;
`;

export const lineBottom = styled.div`
  height: 3px;
  border-radius: 25px;
  border: solid pink 1px;
  margin: 2px 0px;
  background: black;
  width: 22px;
`;
