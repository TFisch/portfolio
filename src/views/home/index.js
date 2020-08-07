import React, { Component } from 'react';
import * as Styles from './styles.sc.js';

class HomeView extends Component {
  render() {
    return (
      <Styles.homeView imgUrl={process.env.PUBLIC_URL + '/pexels.jpg'}>
        <Styles.headLine>Well,</Styles.headLine>
        <Styles.subHeadline>Hello There!</Styles.subHeadline>
      </Styles.homeView>
    );
  }
}

export default HomeView;
