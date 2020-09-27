import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/icons/right-arrow.svg';

import * as styles from './styles.sc';

const LinkTab = ({ href, text }) => {
  return (
    <Link to={href} style={{ textDecoration: 'none', color: '#000' }}>
      <styles.linkTab bottom="-67px">
        <styles.tabCopy>{text}</styles.tabCopy>
        <styles.tabArrow src={rightArrow} />
      </styles.linkTab>
    </Link>
  );
};

export default LinkTab;
