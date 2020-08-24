import React from 'react';
import * as Styles from './styles.sc';
import { Link } from 'react-router-dom';

const ProjectListing = ({ imgurl, projectTitle, link }) => {
  return (
    <Link to={`/projects/${link}`}>
      <Styles.projectListing imgurl={process.env.PUBLIC_URL + imgurl}>
        <Styles.projectBanner>
          <Styles.bannerCopy>{projectTitle}</Styles.bannerCopy>
        </Styles.projectBanner>
      </Styles.projectListing>
    </Link>
  );
};

export default ProjectListing;
