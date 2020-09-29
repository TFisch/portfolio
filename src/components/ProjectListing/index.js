import React from 'react';
import * as styles from './styles.sc';
import { Link } from 'react-router-dom';

const ProjectListing = ({ imgurl, projectTitle, link, className }) => {
  return (
    <styles.ListingContainer className={className}>
      <Link to={`/projects/${link}`} style={{ textDecoration: 'none' }}>
        <styles.ProjectListing
          className="project-listing"
          imgurl={process.env.PUBLIC_URL + imgurl}
        />
        <styles.BannerCopy className="banner-copy">
          {projectTitle}
        </styles.BannerCopy>
      </Link>
    </styles.ListingContainer>
  );
};

export default ProjectListing;
