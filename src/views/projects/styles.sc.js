import styled from 'styled-components';

export const projectsView = styled.div`
  height: auto;
  width: 100vw;
  overflow: scroll;
  position: relative;
  color: black;
`;

export const headLine = styled.h1`
  color: #fff;
  text-align: left;
  margin: 0 10px;
  margin-left: 14px;
`;

export const projectsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 15px;
  height: auto;
  @media (min-width: 635px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 100px;
  }
`;
