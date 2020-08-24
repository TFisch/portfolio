import React from 'react';
import * as Styles from './styles.sc';

const NavBar = () => {
  return (
    <Styles.navBarContainer className="nav-bar">
      <Styles.navContentsWrapper>
        <Styles.lineTop />
        <Styles.lineMid />
        <Styles.lineBottom />
      </Styles.navContentsWrapper>
    </Styles.navBarContainer>
  );
};

export default NavBar;
