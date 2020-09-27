import React, { useEffect, useRef, useState, useCallback } from 'react';
import LinkTab from '../../components/LinkTab/index.js';

import * as Styles from './styles.sc.js';

const HomeView = () => {
  return (
    <Styles.homeView className="home-view">
      <Styles.headLine italic={true} paddingTop="50px" margin="0 10px">
        Well,
      </Styles.headLine>
      <Styles.headLine lineHeight=".85" margin="0 10px">
        Hello There.
      </Styles.headLine>
      <Styles.summary marginTop="100px">
        My name is Tim and I'm a JavaScript Developer. Most of my background is
        with front-end development, but I'm currently expanding my proficiencies
        as a full stack developer. Some of my skills include building things,
        fixing things, and especially, breaking things!
      </Styles.summary>
      <Styles.summary padding="0 10px" position="relative">
        In the two years I've been working as a developer I've been extremely
        privileged to work on a wide variety of projects with some incredible
        individuals.
        <LinkTab href="/projects" text="Learn More" />
      </Styles.summary>
      <Styles.headLine margin="140px 10px 0px 10px" lineHeight="1">
        What I've Worked On
      </Styles.headLine>
      <Styles.summary padding="0 10px" position="relative">
        Between my professional and school experience I've built and styled user
        interfaces as well as explored back-end architecture. I make websites
        and applications that are fast, developer empathic and accessible to
        everybody.
        <LinkTab href="/projects" text="Projects" />
      </Styles.summary>
      <Styles.headLine margin="140px 10px 0px 10px" lineHeight="1">
        What I Work With
      </Styles.headLine>
      <Styles.summary padding="0 10px" position="relative">
        The majority of my development has been with JavaScript, CSS and HTML,
        but I find the most satisfaction from stepping out of my comfort zone.
        Here's a list of some of the things I've worked with.
        <LinkTab href="/projects" text="Tech Stack" />
      </Styles.summary>
      <Styles.headLine margin="140px 10px 0px 10px" lineHeight="1">
        Lets Work Together!
      </Styles.headLine>
      <Styles.summary padding="0 10px" position="relative">
        I'm always looking for what's next. Whether its a project collaboration,
        coffee meeting or mentoring opportunity, I'm in. Let's connect and make
        something great!
      </Styles.summary>
    </Styles.homeView>
  );
};

export default HomeView;
