import React from 'react';
import * as Styles from './styles.sc';
import ProjectListing from '../../components/ProjectListing';

const ProjectsView = () => {
  return (
    <Styles.projectsView
      className="projects-view"
      imgurl={process.env.PUBLIC_URL + '/bagacian.jpg'}
    >
      <Styles.headLine>PROJECTS</Styles.headLine>
      <Styles.projectsWrapper>
        <ProjectListing
          imgurl="/barefoot_top.jpg"
          projectTitle="Barefoot Uploader"
          link="barefoot-uploader"
        />
        <ProjectListing
          imgurl="/goose_preview.jpg"
          projectTitle="Goose Island Web Redesign"
          link="goose-redesign"
        />
      </Styles.projectsWrapper>
    </Styles.projectsView>
  );
};

export default ProjectsView;
