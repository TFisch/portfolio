import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListingContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  justify-self: center;
  @media (min-width: 400px) {
    width: 400px;
  }

  @media (min-width: 635px) {
    width: 200px;

    &:nth-child(1) {
      height: 100%;
    }
    &:nth-child(2) {
      height: 100%;
    }
    &:nth-child(3) {
      height: 100%;
    }
    &:nth-child(4) {
      height: 100%;
    }
    &:nth-child(5) {
      height: 100%;
    }
    &:nth-child(6) {
      height: 100%;
    }
  }
`;

export const ProjectListing = styled.div`
  height: 100%;
  width: 100%;
  border: solid white 1px;
  margin: auto;
  display: flex;
  align-items: flex-end;
  position: relative;
  &::before {
    background: url(${(props) => props.imgurl});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.7;
    content: '';
  }
`;

export const BannerCopy = styled.h2`
  font-family: 'Tex Bold';
  color: white;
  position: absolute;
  bottom: 0;
  left: 10px;
`;
