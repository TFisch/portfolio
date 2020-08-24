import React from 'react';
import * as Styles from './styles.sc';
import { Link } from 'react-router-dom';

const ProjectListing = ({ imgurl, projectTitle, projectData }) => {
  console.log('proData', projectData);
  return (
    <Link
      to={{
        pathname: 'projects/' + projectData.href,
        state: {
          projectData
        }
      }}
    >
      <Styles.projectListing imgurl={process.env.PUBLIC_URL + imgurl}>
        <Styles.projectBanner>
          <Styles.bannerCopy>{projectTitle}</Styles.bannerCopy>
        </Styles.projectBanner>
      </Styles.projectListing>
    </Link>
  );
};

export default ProjectListing;
