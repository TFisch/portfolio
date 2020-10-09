import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/icons/right-arrow.svg';

import * as styles from './styles.sc';

const LinkTab = ({ href, text }) => {
  return (
    <Link
      to={href}
      style={{
        textDecoration: 'none'
      }}
    >
      <styles.linkTab bottom="-67px">
        {text}
        <styles.tabArrow
          src={rightArrow}
          alt="an arrow pointing right indicating navigation"
        />
      </styles.linkTab>
    </Link>
  );
};

export default LinkTab;
